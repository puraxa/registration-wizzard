import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
  year = new Date().getFullYear();
  registration = new FormGroup({
    '0': new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    },{
      validators: this.checkPassword()
    }),
    '1': new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
    }),
    '2': new FormGroup({
      'subscription': new FormControl(null, Validators.required)
    }),
    '3': new FormGroup({
      'cardnumber': new FormControl(null, Validators.required),
      'cardholder': new FormControl(null, Validators.required),
      'expmonth': new FormControl(null, Validators.required),
      'expyear': new FormControl(null, [Validators.required, Validators.min(this.year)]),
      'cvv': new FormControl(null, Validators.required)
    })
  });
  months: Array<any> = [
    {
      value: 'January',
      id: 0
    },
    {
      value: 'February',
      id: 1
    },
    {
      value: 'March',
      id: 2
    },
    {
      value: 'April',
      id: 3
    },
    {
      value: 'May',
      id: 4
    },
    {
      value: 'Juny',
      id: 5
    },
    {
      value: 'July',
      id: 6
    },
    {
      value: 'August',
      id: 7
    },
    {
      value: 'September',
      id: 8
    },
    {
      value: 'October',
      id: 9
    },
    {
      value: 'November',
      id: 10
    },
    {
      value: 'December',
      id: 11
    },
  ]
  error: string;
  onSubmit = () => {
    console.log(this.registration.value);
    this.registration.get('0').errors
  }
  checkPassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      
      return control.get('password').value != control.get('confirmPassword').value ? {'notMatch': true} : null;
    };
  }
  nesto = () => {
    console.log(this.registration.get('0').errors);
  }
}