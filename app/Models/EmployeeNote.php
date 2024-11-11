<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeNote extends Model
{
    use HasFactory;
    protected $fillable = [
        'employeeId', 'note_date', 'attachment_file', 'description'
    ];

    public function owner()
    {
        return $this->belongsTo(Employee::class);
    }
    public function todoItems(){
        return $this->hasMany(TodoItem::class,"noteId");
    }
}