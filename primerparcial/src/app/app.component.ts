import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostapiService } from './service/postapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostapiService],
})
export class AppComponent {
  title = 'primerparcial';
}
