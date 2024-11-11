<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        'username',
        'email',
        'phone_number',
        'password',
        'address',
        "avatar",
        'created_at',
        'updated_at',
    ];
    public function department()
    {
        return $this->hasMany(Department::class, "ownerId", "id");
    }
    public function applies()
    {
        return $this->hasMany(Apply::class, "userId", "id");
    }
    public function employee()
    {
        return $this->hasOne(Employee::class, "userId", "id");
    }
    public function logIncodes()
    {
        return $this->hasMany(LoginCode::class, "userId", "id");
    }
    public function favoriteProducts()
    {
        return $this->hasMany(Favorite::class, "userId");
    }
    public function carts()
    {
        return $this->hasMany(Cart::class, "customerId", "id");
    }
    public function roles()
    {
        return $this->hasManyThrough(Role::class, UserRole::class, "userId", "id", "id", "role");
    }
}