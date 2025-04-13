<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MusclesTableSeeder extends Seeder
{
    public function run()
    {
        $muscles = [
            'Shoulders',
            'Back',
            'Chest',
            'Biceps',
            'Triceps',
            'Forearms',
            'Core',
            'Quads',
            'Hamstrings',
            'Glutes',
            'Calves',
        ];

        foreach ($muscles as $muscle) {
            DB::table('muscles')->insert([
                'muscle_name' => $muscle,
            ]);
        }
    }
}
