import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

constructor(private _user:UsersService) {}


users$: Observable<any[]> = of([]);

ngOnInit(): void {
  this.getUsers();  
}


getUsers(){
  this.users$ = this._user.getUsers();
}
}
