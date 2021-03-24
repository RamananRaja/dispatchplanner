import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignupButtonClicked(firstName: string, lastName: string, contact: number, userName: string, email: string, password: string) {
    this.authService.signup(firstName, lastName, contact, userName, email, password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        console.log(res);
        this.router.navigate(['/login-page']);
      }
    })
  }

}
