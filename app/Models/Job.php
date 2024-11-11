<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    protected $fillable = [
    'departmentId',
    'type',
    'description',
    'salary',
    'position',
    'image',
    'benefits',
    'requirements',
    'missions'
];

    
    public function department()
    {
        return $this->belongsTo(Department::class,"departmentId");
    }
    public function applies(){
        return $this->hasMany(Apply::class,"jobId","id");
    }
    public function descriptions(){
        return $this->hasMany(JobDescription::class, "jobId");
    }
    public function requirements(){
        return $this->hasMany(JobRequirement::class, "jobId");
    }
}