import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { UserSettingsFormComponent } from "./user-settings-form/user-settings-form.component";
import { AppFocusDirective } from "./data/app-focus.directive";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { defineLocale } from "ngx-bootstrap/chronos";
import { nbLocale } from "ngx-bootstrap/locale";
import { TimepickerModule, TimepickerConfig } from 'ngx-bootstrap/timepicker';
import { getTimepickerConfig  } from './TimepickerConfig';

defineLocale("nb", nbLocale);

@NgModule({
  declarations: [AppComponent, UserSettingsFormComponent, AppFocusDirective],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot()
  ],
  providers: [ BsLocaleService,
   { provide: TimepickerConfig, useFactory: getTimepickerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('nb');
  }
}
