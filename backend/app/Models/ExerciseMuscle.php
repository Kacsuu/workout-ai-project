<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ExerciseMuscle extends Pivot
{
    use HasFactory;

    protected $table = 'exercise_muscle';

    protected $fillable = ['exercise_id', 'muscle_id'];
}
