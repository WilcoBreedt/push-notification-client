import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://178.62.79.245:3000';

@Injectable()
export class PushNotificationService {
    constructor(private http: HttpClient) { }

    public sendSubscriptionToTheServer(subscription: PushSubscription) {
        return this.http.post(SERVER_URL + '/subscription', subscription);
    }
}
