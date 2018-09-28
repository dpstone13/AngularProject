import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: '/profile.component.html',
})
export class ProfileComponent implements OnInit {

  ngOnInit() {
    let firstName = new FormControl()
    let lastName = new FormControl()
    
  }
       
}