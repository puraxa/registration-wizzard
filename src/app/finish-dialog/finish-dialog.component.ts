import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-finish-dialog',
  templateUrl: './finish-dialog.component.html',
  styleUrls: ['./finish-dialog.component.css']
})
export class FinishDialogComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  close = () => {
    this.dialog.closeAll();
  }
}
