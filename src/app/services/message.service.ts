import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  startTimer() {
    setTimeout(() => {
      this.clear()
    }, 3000)
  }

  messages: string[] = [];

  add(message: string) {
    this.startTimer()
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
