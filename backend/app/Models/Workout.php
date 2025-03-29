<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'start_time', 'finish_time', 'is_deleted'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function sets()
    {
        return $this->hasMany(WorkoutSet::class, 'workout_id');
    }
}

