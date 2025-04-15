<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use App\Models\Set;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WorkoutController extends Controller
{
    public function index()
    {
        $workouts = Workout::with('sets')
            ->where('user_id', Auth::id())
            ->where('is_deleted', false)
            ->get();

        return response()->json($workouts);
    }

    public function show($id)
    {
        $workout = Workout::with('sets')
            ->where('id', $id)
            ->where('user_id', Auth::id())
            ->where('is_deleted', false)
            ->firstOrFail();

        return response()->json($workout);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'start_time' => 'required|date',
            'finish_time' => 'required|date|after:start_time',
            'sets' => 'required|array|min:1',
            'sets.*.exercise_id' => 'required|integer|exists:exercises,id',
            'sets.*.set_number' => 'required|integer|min:1',
            'sets.*.repetitions' => 'required|integer|min:1',
            'sets.*.weight' => 'required|numeric|min:0',
        ]);

        DB::beginTransaction();

        try {
            $workout = Workout::create([
                'user_id' => $request->user_id,
                'title' => $request->title,
                'start_time' => $request->start_time,
                'finish_time' => $request->finish_time,
                'is_deleted' => false
            ]);

            foreach ($request->sets as $index => $setData) {
                $set = Set::create([
                    'exercise_id' => $setData['exercise_id'],
                    'set_number' => $setData['set_number'],
                    'repetitions' => $setData['repetitions'],
                    'weight' => $setData['weight'],
                    'is_deleted' => false
                ]);

                WorkoutSet::create([
                    'workout_id' => $workout->id,
                    'set_id' => $set->id,
                    'number' => $index + 1,
                    'is_deleted' => false
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Workout created successfully'], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to create workout', 'details' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $workout = Workout::where('id', $id)
            ->where('user_id', Auth::id())
            ->where('is_deleted', false)
            ->firstOrFail();

        $request->validate([
            'title' => 'string|max:255',
            'start_time' => 'date',
            'finish_time' => 'date|after:start_time',
        ]);

        $workout->update($request->only('title', 'start_time', 'finish_time'));

        return response()->json(['message' => 'Workout updated successfully']);
    }

    public function destroy($id)
    {
        $workout = Workout::where('id', $id)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $workout->update(['is_deleted' => true]);

        return response()->json(['message' => 'Workout deleted successfully']);
    }
}
