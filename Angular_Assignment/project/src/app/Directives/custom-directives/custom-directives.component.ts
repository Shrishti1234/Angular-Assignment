import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {User} from '../models/user.interface'
@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss']
})
export class CustomDirectivesComponent implements OnInit {
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
  
  @Input()
  userIndex:number

  
  
  @Output()
  userDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  handleuserDeleted(userIndex:number){
    this.users.splice(userIndex,1)
  }
  
  delete(userIndex:number){
   
    this.users.splice(userIndex,1)
   
  }

}
