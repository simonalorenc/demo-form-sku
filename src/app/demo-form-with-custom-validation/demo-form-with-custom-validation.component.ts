import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
  return {invalidSku: false}
}

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.scss']
})

export class DemoFormWithCustomValidationComponent implements OnInit{
  myForm: FormGroup = this.fb.group({
    sku: ['', Validators.compose([
      Validators.required, skuValidator])]
  })
  sku: FormControl = this.myForm.controls['sku'] as FormControl
  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }
}
