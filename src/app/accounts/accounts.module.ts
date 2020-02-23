import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { RegisterComponent } from './register/register.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    NgxAuthFirebaseUIModule
  ]
})
export class AccountsModule { }
