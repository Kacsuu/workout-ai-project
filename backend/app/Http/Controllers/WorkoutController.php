<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workout;
use Illuminate\Support\Facades\Auth;

class WorkoutController extends Controller
{
    public function index()
    {
        return response()->json(Auth::user()->workouts);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'start_time' => 'required|date',
            'finish_time' => 'required|date|after:start_time',
        ]);

        $workout = Workout::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'start_time' => $request->start_time,
            'finish_time' => $request->finish_time,
            'is_deleted' => false
        ]);

        return response()->json($workout, 201);
    }

    public function show($id)
    {
        $workout = Workout::where('id', $id)->where('user_id', Auth::id())->firstOrFail();
        return response()->json($workout);
    }

    public function update(Request $request, $id)
    {
        $workout = Workout::where('id', $id)->where('user_id', Auth::id())->firstOrFail();

        $request->validate([
            'title' => 'string|max:255',
            'start_time' => 'date',
            'finish_time' => 'date|after:start_time',
        ]);

        $workout->update($request->only('title', 'start_time', 'finish_time'));
        return response()->json($workout);
    }

    public function destroy($id)
    {
        $workout = Workout::where('id', $id)->where('user_id', Auth::id())->firstOrFail();
        $workout->update(['is_deleted' => true]);

        return response()->json(['message' => 'Workout deleted']);
    }
}

