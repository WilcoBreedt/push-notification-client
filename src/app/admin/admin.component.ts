import { Component } from "@angular/core";
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '../services/push-notification.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    title = '';
    message = '';
    icon = '';

    constructor(private pushService: PushNotificationService) {
    }
    sendPush() {
        this.pushService.sendPush(this.message, this.icon, this.title);
    }
}
