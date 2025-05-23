<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;

    protected $fillable = ['medal_name', 'description', 'tier'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_achievement', 'achievement_id', 'user_id');
    }
}
