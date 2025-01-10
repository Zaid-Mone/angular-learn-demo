import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { EditComponent } from './components/users/edit/edit.component';

export const routes: Routes = [
   {
      path: 'users',
      children:
        [
          { path: '', component: UsersComponent },
          { path: 'edit', component: EditComponent },
        ]
    }
];
