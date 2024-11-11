<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupportedInformation extends Model
{
    use HasFactory;
    protected $fillable = ["title", "description","detail","detailLink","detailText"];
}