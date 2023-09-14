import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.scss']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log('you submitted value: ', form)
  }
}
