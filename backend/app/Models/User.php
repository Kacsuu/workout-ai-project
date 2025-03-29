<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['name', 'email', 'password'];

    protected $hidden = ['password', 'remember_token'];

    public function userInfo()
    {
        return $this->hasOne(UserInfo::class, 'user_id');
    }

    public function workouts()
    {
        return $this->hasMany(Workout::class, 'user_id');
    }

    public function achievements()
    {
        return $this->belongsToMany(Achievement::class, 'user_achievement', 'user_id', 'achievement_id');
    }

    public function friends()
    {
        return $this->hasMany(Friend::class, 'user_id_1')->orWhere('user_id_2', $this->id);
    }
}
