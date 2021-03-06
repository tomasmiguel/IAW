import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { CountUpModule } from 'ngx-countup';
import { LyricComponent } from './index/results/lyric/lyric.component';
import { FeelingsComponent } from './index/results/feelings/feelings.component';
import { PlayerComponent } from './index/results/player/player.component';
import { InfoComponent } from './index/results/info/info.component';
import { CallbackComponent } from './index/results/callback/callback.component';
import { SafePipe } from './index/results/player/pipes/safe.pipe';
import { LoginComponent } from './index/login/login.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/es-AR';

registerLocaleData(localeDeAt);

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 4000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 1
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 400,
      easing: 'ease'
    },
    hide: {
      preset: 'slide',
      speed: 400,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    LogoComponent,
    FooterComponent,
    ResultsComponent,
    LoadingComponent,
    LyricComponent,
    FeelingsComponent,
    PlayerComponent,
    InfoComponent,
    CallbackComponent,
    SafePipe,
    LoginComponent,

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
    CountUpModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding: 7,
      radius: 75,
      space: -9,
      animationDuration: 2000,
      animation: true,
      clockwise: false,
      imageHeight: 120,
      imageWidth: 120,
      showImage: true,
      showBackground: false,
      outerStrokeGradient: true,
      outerStrokeWidth: 9,
      outerStrokeGradientStopColor: '#3b3c42',
      innerStrokeWidth: 2,
      innerStrokeColor: '#a7a7a7',
    }),
    NotifierModule.withConfig((customNotifierOptions)),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
