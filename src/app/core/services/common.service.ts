import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
      constructor(private http: HttpClient) {}
  currentLanguage = signal<string>('en');
  userProfileSignal = signal<any | null>(null);

  updateUserProfile(obj:any){
    this.userProfileSignal.set(obj);
  }
  getUserProfile(){
    return this.userProfileSignal();
  }
  changeLanguage(lang: string) {
    this.currentLanguage.set(lang);
  }

  get userProfile() {
    return this.userProfileSignal();  
  }
  get lang() {
    return this.currentLanguage();  
  }






  fetchProfile() {

    console.log('trigger fetchProfile');

    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users?id=1')
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('Error fetching profile:', error);
          return of(1);
        }))

      .subscribe((profile) => {
        console.log('API Response:', profile);

        this.userProfileSignal.set(profile);

        console.log('set userProfileSignal', this.userProfileSignal);

      });

  }
}
