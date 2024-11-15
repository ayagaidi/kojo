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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name',50);
            $table->string('last_name',50);
            $table->string('username',50)->unique();
            $table->string('email',100)->unique();
            $table->string('phonenumber',9)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('active')->default(1);
            $table->timestamp('created_at')->useCurrent();
            $table->rememberToken();
            $table->integer('cities_id')->unsigned()->nullable();
            $table->foreign('cities_id')->references('id')->on('cities')->onDelete('cascade');
            $table->integer('user_type_id')->unsigned()->nullable();
            $table->foreign('user_type_id')->references('id')->on('user_types')->onDelete('cascade');
       
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
