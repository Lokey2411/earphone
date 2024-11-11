<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
    use HasFactory;
    protected $fillable = [
        'departmentId',
        'socialPage',
        'socialLink',
        'icon'
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'departmentId');
    }
}