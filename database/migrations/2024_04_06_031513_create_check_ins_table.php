<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('check_ins', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("departmentId");
            $table->foreign("departmentId")->references("id")->on("departments")->onDelete("cascade");
            $table->unsignedBigInteger("employeeId");
            $table->foreign("employeeId")->references("id")->on("employees")->onDelete("cascade");
            $table->dateTime("checkInTime");
            $table->dateTime("checkOutTime");
            $table->decimal("lat",8,6);
            $table->decimal("lng",9,6);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('check_ins');
    }
};