import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './weather.component.html', // Use templateUrl instead of template
  styleUrls: ['./weather.component.css'], // This links the CSS file
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';
  containerClass : string = 'day';
style: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    const apiKey = '795a2df0f89dd1df3cb7ed4f78ea05ab';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'City not found. Please try again.';
        this.weatherData = null;
      },
    });
  }
}

