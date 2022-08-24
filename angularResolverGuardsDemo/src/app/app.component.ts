import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularResolverGuardsDemo';
  loading: boolean = false;
  isLoggedIn!: boolean;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        this.isLoggedIn = this.authService.isLoggedIn();
        if (event instanceof NavigationStart) {
          this.loading = true;
        }

        if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError) {
          this.loading = false;
        }
      }
    );
  }

  logOut(): void{
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }


}
