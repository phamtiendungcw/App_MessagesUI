import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (v) => {
        this.router.navigateByUrl('/members').then((r) => r.valueOf());
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/').then((r) => r.valueOf());
  }
}
