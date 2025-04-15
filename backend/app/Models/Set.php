<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Set extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['exercise_id', 'set_number', 'repetitions', 'weight', 'is_deleted'];

    public function exercise()
    {
        return $this->belongsTo(Exercise::class, 'exercise_id');
    }

    public function workouts()
    {
    return $this->belongsToMany(Workout::class, 'workouts_set', 'set_id', 'workout_id')
                ->withPivot('number')
                ->wherePivot('is_deleted', false);
    }
}
