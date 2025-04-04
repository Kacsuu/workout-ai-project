<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAchievement extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'achievement_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function achievement()
    {
        return $this->belongsTo(Achievement::class, 'achievement_id');
    }
}
