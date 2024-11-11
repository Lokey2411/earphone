<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = [
        'departmentId',
        'title',
        'details',
        'type',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'departmentId');
    }

}