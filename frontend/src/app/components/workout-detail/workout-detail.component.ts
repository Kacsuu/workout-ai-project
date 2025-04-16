import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-workout-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  workout: any;
  aiResponse: string = '';
  geminiResponse: string | null = null;
  geminiError: string | null = null;
  loadingAI: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private geminiService: GeminiService
  ) {}

  ngOnInit(): void {
    const workoutId = this.route.snapshot.paramMap.get('id');
    if (workoutId) {
      this.http.get<any>(`http://localhost:8000/workouts/${workoutId}`).subscribe(
        (data) => {
          this.workout = data; 
        },
        (error) => {
          console.error('Error geting workout', error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/workouts']);
  }

  async askAI(): Promise<void> {
    const prompt = this.generatePromptFromWorkout(this.workout);
    this.aiResponse = 'Thinking...';
    try {
      this.aiResponse = await this.geminiService.generateText(prompt);
    } catch (error) {
      console.error(error);
      this.aiResponse = 'Error while getting answer.';
    }
  }

  generatePromptFromWorkout(workout: any): string {
    let prompt = `This is a workout log:\n`;
    prompt += `Title: ${workout.title}\n`;
    prompt += `Start: ${workout.start_time}\n`;
    prompt += `End: ${workout.finish_time}\n`;
    prompt += `Exercises:\n`;
    workout.sets.forEach((set: any, index: number) => {
      prompt += `  ${index + 1}. ${set.exercise?.exercise_name || 'Unknown'} - Number of sets: ${set.set_number}, ${set.repetitions} reps, ${set.weight} kg\n`;
    });
    prompt += `\nPlease analyze this workout. Mention any potential issues and provide recommendations to improve its effectiveness.
                Avoid using Markdown or bold/italic formatting, and don't use asterisks (*). 
                However, feel free to use simple lists using dashes (-) or numbers (1., 2., 3.) and organize the text into readable paragraphs.`;
  
    return prompt;
  }

  askGemini() {
    this.loadingAI = true;
    const prompt = this.generatePromptFromWorkout(this.workout);
  
    this.geminiService.generateText(prompt).then(response => {
      this.geminiResponse = response;
      this.geminiError = null;
      this.loadingAI = false;
    }).catch(error => {
      this.geminiError = error.message || 'Unknown error';
      this.geminiResponse = null;
      this.loadingAI = false;
    });
  }
}
