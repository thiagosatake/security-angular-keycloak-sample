import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router"
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() icon: string | undefined;

  authenticated: boolean = false;
  loggedUserName: string | undefined;

  profileLink: string | undefined;
  walletLLink: string | undefined;

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {

    if (this.keycloakService.isLoggedIn()) {
      this.authenticated = true;
      this.keycloakService.loadUserProfile().then(profile => {
        this.loggedUserName = profile.email;
      });
    } else {
      this.authenticated = false;
    }
  }

  login(): void {
    this.keycloakService.login();
  }

  logout(): void {    
    if (this.keycloakService.isLoggedIn()) {
      this.keycloakService.logout(window.location.origin + "/home");
    } else {
      this.router.navigate(['/home'])
    }    
    this.authenticated = false;
  }

  gotToProfile(): void {
    this.router.navigate(['/profile'])
  }

  gotToPremium(): void {
    this.router.navigate(['/premium'])
  }

  gotToHome(): void {
    this.router.navigate(['/home'])
  }



}
