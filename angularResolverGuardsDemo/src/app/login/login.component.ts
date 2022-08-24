import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public pageTitle: string | undefined;

  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.pageTitle = this.router.snapshot.data['pageTitle'];
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  public formDirty(): boolean{
    return this.loginForm.dirty;
  }
  public submitForm(): void{
    this.authService.logIn({
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    })
    this.route.navigateByUrl('/home');
  }

}
