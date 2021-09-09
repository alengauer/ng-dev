import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthModule } from '../fbauth/fbauth.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { AdalComponent } from './samples/adal/adal.component';
import { FirebaseComponent } from './samples/firebase/firebase.component';
import { FirebaseAuthInterceptor } from '../fbauth/firebase/firebase-auth.interceptor';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'firebase', component: FirebaseComponent },
      { path: 'adal', component: AdalComponent },
    ],
  },
];

@NgModule({
  declarations: [DemoContainerComponent, FirebaseComponent, AdalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FBAuthModule,
  ],
  providers: [
    DemoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseAuthInterceptor,
      multi: true,
    },
  ],
})
export class DemosModule {}
