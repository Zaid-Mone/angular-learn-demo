import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges{
  constructor(private _commonService:CommonService) {}

  _lang =input('');
   currentLang=output<string>();

  get currentLanguage() {
    return this._commonService.lang;
  }


  ngOnChanges(changes: SimpleChanges) {
    // the _lang will be changed
    // console.log(changes._lang?.previousValue);
    // console.log(changes._lang?.currentValue);

  }


  changeLanguage(lang: string) {
    this._commonService.changeLanguage(lang);
  }

  onLangChange(){
    this.currentLang.emit(this._lang());
  }
}
