import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LogInComponent } from './log-in/log-in.component';
import { HeadersComponent } from './headers/headers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeadersComponent,LogInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'AuthZero';
  private auth = inject(AuthService);
  private router = inject(Router)
  ngOnInit(): void {}
  login() {
    this.auth.loginWithRedirect()

  }
}
