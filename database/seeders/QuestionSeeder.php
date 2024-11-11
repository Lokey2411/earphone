<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for($i=0;$i<10;$i++){
            $faker = Faker::create();
            \App\Models\Question::create([
                "title"=>$faker->sentence(10),
                "answer"=>$faker->text,
                "type"=>"question",
            ]);
        }
    }
}