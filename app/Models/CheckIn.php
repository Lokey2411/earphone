<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckIn extends Model
{
    use HasFactory;
    protected $fillable = [
        'departmentId',
        'employeeId',
        "checkInTime",
        "checkOutTime",
        "lat",
        "lng",
    ];
    public function department()
    {
        return $this->belongsTo(Department::class, 'departmentId', 'id');
    }
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employeeId', 'id');
    }

}