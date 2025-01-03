import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _commonService:CommonService) {}


  get currentLanguage() {
    return this._commonService.lang;
  }


  changeLanguage(lang: string) {
    this._commonService.changeLanguage(lang);
  }
}
