<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExercisesTableSeeder extends Seeder
{
    public function run()
    {
        $exercises = [
            ['exercise_name' => 'Push Up', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Pull Up', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Barbell Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Dumbbell Shoulder Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Dumbbell Bicep Curl', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Leg Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Lunges', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Plank', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Deadlift', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Triceps Dip', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Chest Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Lat Pulldown', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Cable Row', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Leg Extension', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Leg Curl', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Smith Machine Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Farmers Walk', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Bent-Over Row', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Dumbbell Deadlift', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Seated Shoulder Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Chest Fly', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Chest Dips', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Russian Twist', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Leg Raise', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Incline Bench Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Cable Tricep Pushdown', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Bicep Curl with Barbell', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Front Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Overhead Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Reverse Lunges', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Triceps Kickback', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Shoulder Lateral Raise', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Shrug', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Bulgarian Split Squat', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Barbell Bench Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Smith Machine Deadlift', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Kettlebell Swing', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Leg Press Calf Raise', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Seated Leg Curl', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Hack Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Calf Raises with Dumbbells', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Face Pull', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'T-Bar Row', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Zercher Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Smith Machine Bench Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Lateral Raise Machine', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Romanian Deadlift', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Concentration Curl', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Dumbbell Chest Press', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Triceps Overhead Extension', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => true, 'is_deleted' => false],
            ['exercise_name' => 'Sledgehammer Swing', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Cable Leg Curl', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Ab Wheel Rollout', 'exercise_picture' => null, 'is_bodyweight' => true, 'is_twodumbells' => false, 'is_deleted' => false],
            ['exercise_name' => 'Kettlebell Goblet Squat', 'exercise_picture' => null, 'is_bodyweight' => false, 'is_twodumbells' => false, 'is_deleted' => false],
        ];

        foreach ($exercises as $exercise) {
            DB::table('exercises')->insert($exercise);
        }
    }
}
