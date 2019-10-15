import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FinishDialogComponent } from './finish-dialog/finish-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
  constructor(public dialog: MatDialog){

  }
  openDialog = () => {
    const nesto = this.dialog.open(FinishDialogComponent);
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
      'cardnumber': new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      'cardholder': new FormControl(null, Validators.required),
      'expdate': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      'cvc': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    })
  });
  onSubmit = () => {
    console.log(this.registration.value);
    this.openDialog();
    setTimeout(()=> {
      this.dialog.closeAll();
    },3000);
  }
  checkPassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      
      return control.get('password').value != control.get('confirmPassword').value ? {'notMatch': true} : null;
    };
  }
}