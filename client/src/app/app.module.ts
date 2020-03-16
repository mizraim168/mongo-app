import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { CustomersComponent } from './components/customers/customers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { AirbnbComponent } from './components/airbnb/airbnb.component';

const appRoutes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'users',      component: UsersComponent },
 
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomersComponent,
    ReviewsComponent,
    ReviewComponent,
    AirbnbComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2SearchPipeModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
