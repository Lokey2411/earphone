<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobDescription extends Model
{
    use HasFactory;
    protected $fillable = ["jobId", "description"];
    public function job(){
        return $this->belongsTo(Job::class);
    }
}