import { Component, OnInit,Input } from '@angular/core';
import {User} from '../models/user.interface'

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  users:User[]=[

    {
      name: 'Shrishti',
      username : "Shrishti123",
      email : "shrishti546@gmail.com"
    },
    {
      name: 'Shubhangi',
      username : "Shubhangi4321",
      email : "shubhangi6@gmail.com"
    },
    {
      name: 'Pradyumn',
      username : "Pradyumn7880",
      email : "pradyumn@gmail.com"
    },
    {
      name: 'Sachi',
      username : "Sachinkumar",
      email : "sahinn@gmail.com"
    },
    {
      name: 'Gaurav',
      username : "Gaurav7880",
      email : "gaurav@gmail.com"
    },
    {
      name: 'Mahak',
      username : "Mahak7880",
      email : "mahakn@gmail.com"
    }
 
  ]
  @Input()
  user:User
   
  constructor() { }

  ngOnInit(): void {
  }
  delete(userIndex:number){
    this.users.splice(userIndex,1)
  }

}
