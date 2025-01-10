import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import { Observable, of } from 'rxjs';
import { SpinnerComponent } from "../../../core/layout/spinner/spinner.component";
import { CommonModule } from '@angular/common';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [SpinnerComponent,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  // #region variables
  id:number=0;
  username:string='';
  user$: Observable<any> = of({});
  // #endregion


  constructor(private activatedRoute:ActivatedRoute,private _userService:UsersService,public _commonService:CommonService) {
  debugger;
  // getting the query params without subscribe ... (?id=number)
   this.id = this.activatedRoute.snapshot.queryParams['id'];
  }


  ngOnInit(): void {
    this.getUserByID();
  }


getUserByID(){
  if(this.id ==0 || this.id == undefined) return;
  this.user$=this._userService.getUserByID(this.id)
}


}
