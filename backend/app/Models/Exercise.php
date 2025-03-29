<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    use HasFactory;

    protected $fillable = ['exercise_name', 'exercise_picture', 'is_bodyweight', 'is_twodumbells', 'is_deleted'];

    public function muscles()
    {
        return $this->belongsToMany(Muscle::class, 'exercise_muscle', 'exercise_id', 'muscle_id');
    }

    public function pictures()
    {
        return $this->hasMany(ExercisePicture::class, 'exercise_id');
    }
}
