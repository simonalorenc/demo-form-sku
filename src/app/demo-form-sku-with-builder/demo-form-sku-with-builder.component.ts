import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.scss']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm = this.fb.group({
    sku: ['ABC123']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('you submitted value: ', value)
  }
}
