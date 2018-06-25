import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {RestFullService} from '../../services/rest-full.service';

enum Author {
  SELF,
  OTHER
}

export class Message {
  constructor(c: string, a: Author) {
    this.content = c;
    this.author = a;
  }
  content: string;
  author: Author;
}
function delay(ms: number) {
  return new Promise(resolve => setTimeout(() => resolve(), 1000)).then(() => console.log('fired'));
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('chatWindow') public chatElement: ElementRef;
  messages: Message[];
  authorEnum = Author;
  inputText = '';
  base = {':)': '🙂', ';)': '😂', ':(': '😔', ';(' : '😢', 'xD' : '😆', ';P': '😜', 'OK' : '👌', ':D' : '😀', ';D': '😁',
    ':p' : '😋', 'xxx' : '😘', ':|' : '😐'};
  emotics = Object.create(this.base);
  constructor(private restService: RestFullService) {}

  ngOnInit() {
    this.messages = [
      new Message('hej', Author.OTHER),
      new Message('no siemka', Author.SELF),
      new Message('jak leci', Author.SELF),
      new Message('u mnie spoko', Author.OTHER),
      new Message('a u cb?', Author.OTHER),
      new Message('a w porządku, ostatnio udało mi się także ten tego czy ten tekst już zajmuje dużo miejsca czy jeszcze', Author.SELF),
      new Message('123', Author.SELF),
      new Message('12313123', Author.SELF),
      new Message('', Author.SELF),
      new Message('asdasdasd', Author.OTHER),
      new Message('as', Author.SELF),
      new Message('bb', Author.OTHER),
      new Message('no czesc ;/', Author.SELF),
      new Message('buziaczki', Author.OTHER),
      new Message('matko boska', Author.OTHER),
      new Message('memixy', Author.OTHER),
      new Message('😂', Author.SELF),
      new Message('🤣', Author.OTHER)
    ];
  }

  ngAfterViewInit(): void {
    this.chatElement.nativeElement.scrollTop = this.chatElement.nativeElement.scrollHeight;
  }

  sendMsgFromView(event: any): void {
    this.mapTextWithEmoji();
    this.messages.push(new Message(this.inputText, Author.SELF));
    // rest-full.send Msg to User
    this.inputText = '';
    this.reciveMsg();
  }  // messages| JSON {text:dsads, from:1, to:3}

  private async reciveMsg() {
    while (true) {
      await delay(6000);  // Would be good to change something diffrent
      this.restService.getExistsUserWithName('a')
        .forEach(x => {
          if (x.value) {
            console.log(this);
            console.log(this.messages.push(new Message('xxx', Author.OTHER)));
          } else {
            this.inputText = 'nie ma';
          }
        });
    }
  }     // messages / search / last | JSON {from:1, to:3} -> 10

  private mapTextWithEmoji() {
    for (const prop in this.emotics) {
      if (this.inputText.includes(prop)) {
        console.log(this.inputText.indexOf(prop));
        const index = this.inputText.indexOf(prop);
        const begining = this.inputText.substring(0, index);
        const ending = this.inputText.substr(index + prop.length);

        this.inputText = begining + this.emotics[prop] + ending;
        if (this.inputText.includes(prop)) { this.mapTextWithEmoji(); }
      }
    }
  }
}
