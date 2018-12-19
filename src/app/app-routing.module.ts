import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { PushComponent } from './push/push.component';
import { AdminComponent } from './admin/admin.component';

const ROUTES: Routes = [{
    path: '',
    component: PushComponent,
},
{
    path: 'admin',
    component: AdminComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
