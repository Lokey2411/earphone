<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employees';

    protected $fillable = [
        'departmentId', 'level', 'userId', 'name', 'email', 'phoneNumber', 'avatar', 'start_date', 'position'
    ];
    public function department()
    {
        return $this->belongsTo('App\Models\Department', 'departmentId');
    }

    public function level()
    {
        return $this->belongsTo('App\Models\Level', 'level');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }
    public function bankAccounts(){
        return $this->hasMany(BankAccount::class, 'employeeId');
    }
    public function notes(){
        return $this->hasMany(EmployeeNote::class, 'employeeId');
    }
}