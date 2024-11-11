<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    use HasFactory;
    protected $fillable = [
        'employeeId',
        'accountNumber',
        'bankName',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employeeId', 'id');
    }
}