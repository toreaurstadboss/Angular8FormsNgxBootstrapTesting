import { Component, OnInit } from "@angular/core";
import { IUserSettings } from "../data/user-settings";
import { NgForm, NgModel } from "@angular/forms";
import { DataService } from "../data/data.service";
import { AppFocusDirective } from "../data/app-focus.directive";
import { ReactiveFormsModule } from "@angular/forms";
import * as _ from "lodash";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  singleModel = "On";

  userSettings: IUserSettings = { ...this.originalUserSettings };
  postError: boolean;
  startDate: Date;
  userRating: number;
  maxRating: number;
  startTime: Date;
  postErrorMessage: any;
  subscriptionTypes: Observable<string[]>;
  // subscriptionTypes = _.range(210);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
    this.maxRating = 3;
    this.userRating = 1;
    setInterval(this.updateTimePickerContinuously, 1000);
  }

  updateTimePickerContinuously() {
    console.log("Setting start time");
    this.startTime = new Date();
    console.log(this.startTime);
  }

  onBlur(field: NgModel) {
    console.log("in onBlur: ", field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log("error: " + errorResponse);
    this.postError = true;
    // debugger
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);
    console.log("in onSubmit:", form.value);

    // if (form.valid){
    // this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //   result => console.log('success: ', result),
    //   error => this.onHttpError(error)
    // );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = "Please fix the above errors";
    // }
  }
}
