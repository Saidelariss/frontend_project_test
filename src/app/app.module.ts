import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SidenavBarComponent } from './components/sidenav-bar/sidenav-bar.component';
import { MainComponent } from './components/main/main.component';
import { DashbordComponent } from './components/dashbordPages/dashbord/dashbord.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { StackedBarChartComponent } from './components/dashbordPages/stacked-bar-chart/stacked-bar-chart.component';
import { PieChartComponent } from './components/dashbordPages/pie-chart/pie-chart.component';
import { CandidateChartComponent } from './components/dashbordPages/candidate-chart/candidate-chart.component';
import { CreateProductComponent } from './components/productCrudPage/create-product/create-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    SidenavBarComponent,
    MainComponent,
    DashbordComponent,
    StackedBarChartComponent,
    PieChartComponent,
    CandidateChartComponent, 
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
