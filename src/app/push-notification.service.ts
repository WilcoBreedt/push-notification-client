import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = '/server';

@Injectable()
export class PushNotificationService {
    constructor(private http: HttpClient) { }

    public sendSubscriptionToTheServer(subscription: PushSubscription) {
        return this.http.post(SERVER_URL + '/subscription', subscription);
    }

    public sendPush(msg: String, icon: String, title: String) {
        let res  = this.http.post(SERVER_URL + '/sendNotification', {msg, icon, title} ).subscribe();
        console.log(res);
        return res;
    }
}
