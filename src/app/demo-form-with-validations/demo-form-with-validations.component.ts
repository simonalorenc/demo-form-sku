import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations',
  templateUrl: './demo-form-with-validations.component.html',
  styleUrls: ['./demo-form-with-validations.component.scss']
})
export class DemoFormWithValidationsComponent implements OnInit{
  myForm: FormGroup = this.fb.group({
    sku: ['', Validators.required]
  })
  sku: FormControl = this.myForm.controls['sku'] as FormControl
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }
}
