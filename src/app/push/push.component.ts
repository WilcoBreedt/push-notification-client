import { Component } from "@angular/core";
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '../services/push-notification.service';

const VAPID_PUBLIC = 'BIGKUYhw3Ns4zYynxbrY72mzFVbPTSlsLb44pnmV-IeKz0RUFpZ8-8IGeyykNCVjroyAFTEn87kw2qGsHG42lo0';

@Component({
    selector: 'push',
    templateUrl: 'push.component.html'
})
export class PushComponent {
	title = '';
	message = '';
	icon = '';

	constructor(private swPush: SwPush, private pushService: PushNotificationService) {
	}

	enablePush() {
		if (this.swPush.isEnabled) {
			this.swPush.requestSubscription({
				serverPublicKey: VAPID_PUBLIC
			})
			.then(subscription => {
				this.pushService.sendSubscriptionToTheServer(subscription).subscribe();
			})
			.catch(console.error);
		}
	}
	sendPush() {
		this.pushService.sendPush(this.message, this.icon, this.title);
	}
}