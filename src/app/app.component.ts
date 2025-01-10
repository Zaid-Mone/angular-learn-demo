import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { CommonService } from './core/services/common.service';
import { HttpClient } from '@angular/common/http';
import { catchError, of, retry } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    constructor(private _commonService:CommonService,private http: HttpClient) {}

  ngOnInit(): void {
  
  }

    userProfile: any;



  changeLanguage(lang: string) {
    this._commonService.changeLanguage(lang);
    
  }



  get currentLanguage() {
    return this._commonService.lang;
  }



}
