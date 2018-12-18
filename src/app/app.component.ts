import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './push-notification.service';

const VAPID_PUBLIC = 'BIGKUYhw3Ns4zYynxbrY72mzFVbPTSlsLb44pnmV-IeKz0RUFpZ8-8IGeyykNCVjroyAFTEn87kw2qGsHG42lo0';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'angular-push-notifications';
	constructor(swPush: SwPush, private pushService: PushNotificationService) {
		if (swPush.isEnabled) {
			swPush.requestSubscription({
				serverPublicKey: VAPID_PUBLIC
			})
			.then(subscription => {
				this.pushService.sendSubscriptionToTheServer(subscription).subscribe();
			})
			.catch(console.error);
		}
	}
}
