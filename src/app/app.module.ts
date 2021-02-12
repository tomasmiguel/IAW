import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchComponent } from './index/search/search.component';
import { LogoComponent } from './index/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultsComponent } from './index/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PlayerComponent } from './index/results/components/player/player.component';
import { InfoComponent } from './index/results/components/info/info.component';
import { CallbackComponent } from './index/results/components/callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    LogoComponent,
    FooterComponent,
    ResultsComponent,
    LoadingComponent,
    PlayerComponent,
    InfoComponent,
    CallbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding: 7,
      radius: 100,
      space: -9,
      animationDuration: 2000,
      animation: true,
      clockwise: false,
      imageHeight: 130,
      imageWidth: 130,
      showImage: true,
      showBackground: false,
      outerStrokeGradient: true,
      outerStrokeWidth: 9,
      outerStrokeGradientStopColor: '#3b3c42',
      innerStrokeWidth: 2,
      innerStrokeColor: '#a7a7a7',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
