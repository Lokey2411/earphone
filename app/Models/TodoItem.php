<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoItem extends Model
{
    use HasFactory;

    protected $fillable = ['noteId', 'message', 'detail'];

    public function note()
    {
        return $this->belongsTo(EmployeeNote::class, 'noteId');
    }
}