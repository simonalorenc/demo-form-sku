import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
  return {invalidSku: false}
}

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.scss']
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    sku: ['', Validators.required]
  })
  sku: FormControl = this.myForm.controls['sku'] as FormControl
  
  constructor(private fb: FormBuilder) {
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value)
      }
    )

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form)
      }
    )

  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }
}
