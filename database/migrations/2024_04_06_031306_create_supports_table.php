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
        Schema::create('supports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("departmentId")->unsigned();
            $table->foreign("departmentId")->references("id")->on("departments")->onDelete("cascade");
            $table->bigInteger("userId")->unsigned();
            $table->foreign("userId")->references("id")->on("users")->onDelete("cascade");
            $table->string("title");
            $table->text("description");
            $table->text("attachment")->nullable();
            $table->string("type", 50);
            $table->string("phone_number", 20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supports');
    }
};