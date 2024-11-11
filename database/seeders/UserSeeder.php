<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faker = Faker::create();
        $user = [
            "username"=>"admin",
            "password"=>Hash::make("admin"),
            "phone_number"=>$faker->phoneNumber,
            "email"=>$faker->email,
            "address"=>$faker->address,
            "remember_token"=>$faker->text,
        ];
        User::create($user);
    }
}