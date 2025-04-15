<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutSet extends Model
{
    use HasFactory;

    protected $table = 'workouts_set';

    public $timestamps = false;

    protected $fillable = ['workout_id', 'set_id', 'number', 'is_deleted'];

    public function workout()
    {
        return $this->belongsTo(Workout::class, 'workout_id');
    }

    public function set()
    {
        return $this->belongsTo(Set::class, 'set_id');
    }
}
