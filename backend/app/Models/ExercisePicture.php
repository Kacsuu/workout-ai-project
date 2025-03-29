<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExercisePicture extends Model
{
    use HasFactory;

    protected $fillable = ['exercise_id', 'exercise_picture'];

    public function exercise()
    {
        return $this->belongsTo(Exercise::class, 'exercise_id');
    }
}
