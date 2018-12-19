import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { PushNotificationService } from './services/push-notification.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PushComponent } from './push/push.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
        AdminComponent,
        AppComponent,
        PushComponent,
    ],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        PushNotificationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
