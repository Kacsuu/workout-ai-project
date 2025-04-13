<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use Illuminate\Http\Request;

class ExercisesController extends Controller
{
    public function index()
    {
        $exercises = Exercise::all();
        return response()->json($exercises);
    }
}
