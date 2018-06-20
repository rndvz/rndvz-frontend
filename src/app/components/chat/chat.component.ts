import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('chatWindow') public chatElement: ElementRef;
  messages: Message[];
  authorEnum = Author;

  constructor() { }

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
      new Message('😂', Author.SELF)
    ];
  }

  ngAfterViewInit(): void {
    this.chatElement.nativeElement.scrollTop = this.chatElement.nativeElement.scrollHeight;
  }

}
