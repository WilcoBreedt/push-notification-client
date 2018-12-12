import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://localhost:3000';

@Injectable()
export class PushNotificationService {
    constructor(private http: HttpClient) { }

    public sendSubscriptionToTheServer(subscription: PushSubscription) {
        return this.http.post(SERVER_URL + '/subscription', subscription);
    }

    public sendMessage() {
        return this.http.post('http://localhost:3000/sendNotification', JSON.stringify({}));
    }
}
