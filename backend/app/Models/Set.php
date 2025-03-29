<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Set extends Model
{
    use HasFactory;

    protected $fillable = ['exercise_id', 'set_number', 'repetitions', 'weight', 'is_deleted'];

    public function exercise()
    {
        return $this->belongsTo(Exercise::class, 'exercise_id');
    }
}
