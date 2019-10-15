import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.checkPw();
  }
  obj = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    subscription: '',
    cardnumber: '',
    cardholder: '',
  }
  year = new Date().getFullYear();
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
      id: 2
    },
    {
      value: 'May',
      id: 2
    },
    {
      value: 'Juny',
      id: 2
    },
    {
      value: 'July',
      id: 2
    },
    {
      value: 'August',
      id: 2
    },
    {
      value: 'September',
      id: 2
    },
    {
      value: 'October',
      id: 2
    },
    {
      value: 'November',
      id: 2
    },
    {
      value: 'December',
      id: 2
    },
  ]
  error: string;
  registration = new FormGroup({
    '0': new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
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
  checkPw = () => {
    this.registration.get('0').valueChanges.subscribe(values => {
      if(values.confirmPassword.length > 1 && values.password != values.confirmPassword){
        this.error = "Passwords don't match";
      } else {
        this.error = null;
      }
    })
  }
  onSubmit = () => {
    console.log(this.registration.value);
  }
}