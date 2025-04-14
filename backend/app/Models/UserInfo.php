<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'users_info';
    protected $primaryKey = 'user_id';
    public $incrementing = false;

    protected $fillable = ['user_id', 'height', 'weight', 'birth_date', 'usr_picture', 'is_deleted'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
