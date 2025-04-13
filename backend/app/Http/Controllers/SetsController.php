<?php

namespace App\Http\Controllers;

use App\Models\Set;
use Illuminate\Http\Request;

class SetsController extends Controller
{
    public function index()
    {
        $sets = Set::with('exercise')->get();
        return response()->json($sets);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'exercise_id' => 'required|exists:exercises,id',
            'set_number' => 'required|integer',
            'repetitions' => 'required|integer',
            'weight' => 'required|numeric',
        ]);

        $set = Set::create([
            'exercise_id' => $validated['exercise_id'],
            'set_number' => $validated['set_number'],
            'repetitions' => $validated['repetitions'],
            'weight' => $validated['weight'],
        ]);

        return response()->json($set, 201);
    }
}
