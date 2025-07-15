import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-headers',
  imports: [RouterLink, RouterModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
})
export class HeadersComponent {
  private auth = inject(AuthService);
  private documnet = inject(DOCUMENT);
  logIn() {
    this.auth.loginWithRedirect();
  }
  logOut() {
    this.auth.logout({
      logoutParams: { returnTo: this.documnet.location.origin },
    });
  }
}
