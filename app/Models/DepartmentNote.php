<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartmentNote extends Model
{
    use HasFactory;
    protected $fillable = [
        'departmentId',
        'message',
        'attachFile',
        'schedule',
        'contacts',
        'map',
        'otherMessage',
        'jobs'
    ];
    
    public function department()
    {
        return $this->belongsTo(Department::class, 'departmentId');
    }
}