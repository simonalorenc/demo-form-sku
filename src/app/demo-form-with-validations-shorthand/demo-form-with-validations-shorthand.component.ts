import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-shorthand',
  templateUrl: './demo-form-with-validations-shorthand.component.html',
  styleUrls: ['./demo-form-with-validations-shorthand.component.scss']
})
export class DemoFormWithValidationsShorthandComponent implements OnInit{
  myForm: FormGroup = this.fb.group({
    sku: ['', Validators.required]
  })
  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('you submitted value: ', value.sku)
  }
}
