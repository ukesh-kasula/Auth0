import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';


@Component({
  selector: 'log-in',
  imports: [CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  protected document = inject(DOCUMENT)
  protected auth = inject(AuthService)


}
