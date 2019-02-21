import { Component, OnInit } from "@angular/core";
import { Osobni } from "../models/osobni.model";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  spolovi: string[] = ["Muškarac", "Žena"];
  osobni: Osobni;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {}

  ngOnInit() {
    this.osobni = new Osobni();
    console.log(this.osobni);
  }

  onReset() {
    this.osobni = new Osobni();
  }

  onSubmit() {
    console.log(this.osobni);
  }
}
