import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit{
  productName: string
  
  constructor(private fb: FormBuilder) {
   this.productName = 'ng-book: The Complete Guide to Angular'
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }
}
