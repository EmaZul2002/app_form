import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  signup : FormGroup

  ngOnInit() {
    this.signup = new FormGroup({
      nominativo : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required, Validators.email])
    })
  }

  onSubmit() {
    console.log(this.signup.value)
    this.signup.reset()
  }
}
