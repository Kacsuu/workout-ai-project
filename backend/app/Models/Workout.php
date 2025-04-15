<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['user_id', 'title', 'start_time', 'finish_time', 'is_deleted'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function sets()
    {
        return $this->belongsToMany(Set::class, 'workouts_set', 'workout_id', 'set_id')
            ->withPivot('number')
            ->wherePivot('is_deleted', false)
            ->where('sets.is_deleted', false);
    }
}

