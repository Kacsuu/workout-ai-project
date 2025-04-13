<?php

namespace App\Http\Controllers;

use App\Models\WorkoutSet;
use Illuminate\Http\Request;

class WorkoutSetController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'workout_id' => 'required|exists:workouts,id',
            'set_id' => 'required|exists:sets,id',
            'number' => 'required|integer',
        ]);

        $workoutSet = WorkoutSet::create([
            'workout_id' => $validated['workout_id'],
            'set_id' => $validated['set_id'],
            'number' => $validated['number'],
        ]);

        return response()->json($workoutSet, 201);
    }
}
