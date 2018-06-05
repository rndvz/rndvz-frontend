import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Person } from '../../util/person';
import { Gender } from '../../util/gender.enum';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, keyframes, style } from '@angular/animations';
import { PanHammerInput } from '../../util/pan-hammer-input';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @ViewChild('mainCard') public cardElement: ElementRef;
  @ViewChildren('secondaryCard') public cardElements: QueryList<ElementRef>;
  public currentPlayer: AnimationPlayer;
  public cards: Person[];
  public maxCards = 10;

  public startXPosition = 0;
  public startYPosition = 0;
  public startTransform = 'rotate(0deg)';
  public currentXPosition = this.startXPosition;
  public currentYPosition = this.startYPosition;
  public currentTransform = this.startTransform;

  constructor(private domSanitizer: DomSanitizer, private animationBuilder: AnimationBuilder) { }

  ngOnInit() {
    const photo1 = 'https://thumb9.shutterstock.com/display_pic_with_logo/111616/111616,1312478131,2/stock-photo-beauty-woman' +
      '-portrait-of-teen-girl-beautiful-cheerful-enjoying-with-long-brown-hair-and-clean-skin-82225732.jpg';
    const photo2 = 'https://thumb9.shutterstock.com/display_pic_with_logo/399136/646898302/stock-photo-beautiful-woman-646898302.jpg';
    const card1 = new Person('Amelia', 'hehe ;)', Gender.FEMALE, [photo1]);
    const card2 = new Person('Jessica', '(:', Gender.FEMALE, [photo2]);
    this.cards = [card1, card2, card1];
  }

  onPanStart(event: PanHammerInput): void {
    if (this.currentPlayer != null) {
      this.resetCardElement();
    }

    this.startXPosition = this.cardElement.nativeElement.offsetLeft;
    this.startYPosition = this.cardElement.nativeElement.offsetTop;
    this.startTransform = 'rotate(0deg)';
  }

  private resetCardElement(): void {
    this.currentPlayer.destroy();
    this.currentXPosition = this.startXPosition;
    this.currentYPosition = this.startYPosition;
    this.currentTransform = this.startTransform;
  }

  onPanMove(event: PanHammerInput): void {
    const offsetX = event.deltaX + this.startXPosition;
    this.currentXPosition = offsetX;
    this.currentYPosition = event.deltaY + this.startYPosition;
    this.currentTransform = 'rotate(' + (((offsetX - this.startXPosition) * 50) / this.cardElement.nativeElement.clientWidth) + 'deg)';
  }

  onPanEnd(event: PanHammerInput): void {
    if (this.isSwipeRight(event)) {
      this.currentPlayer = this.createRightAnimation().create(this.cardElement.nativeElement);
      this.currentPlayer.onDone( () => {
        this.cards.shift();
        this.currentXPosition = this.startXPosition;
        this.currentYPosition = this.startYPosition;
        this.currentTransform = this.startTransform;
      });
    } else if (this.isSwipeLeft(event)) {
      this.currentPlayer = this.createLeftAnimation().create(this.cardElement.nativeElement);
      this.currentPlayer.onDone(() => {
        this.cards.shift();
        this.currentXPosition = this.startXPosition;
        this.currentYPosition = this.startYPosition;
        this.currentTransform = this.startTransform;
      });
    } else {
      this.currentPlayer = this.createReturnAnimation().create(this.cardElement.nativeElement);
      this.currentPlayer.onStart(() => {
        this.currentXPosition = this.startXPosition;
        this.currentYPosition = this.startYPosition;
        this.currentTransform = this.startTransform;
      });
    }

    this.currentPlayer.play();
  }

  private isSwipeRight(event: PanHammerInput): boolean {
    return (event.additionalEvent === 'panright' && event.velocityX > 3.0) ||
      (event.deltaX > this.cardElement.nativeElement.clientWidth / 2.5);
  }

  private isSwipeLeft(event: PanHammerInput): boolean {
    return (event.additionalEvent === 'panleft' && event.velocityX < -3.0) ||
      (event.deltaX * (-1) > this.cardElement.nativeElement.clientWidth / 2.5);
  }

  private createReturnAnimation(): AnimationFactory {
    return this.animationBuilder.build([
      animate(150, keyframes([
        style({
          left: '*',
          top: '*',
          transform: '*'
        }),
        style({
          left: this.startXPosition + 'px',
          top: this.startYPosition + 'px',
          transform: this.startTransform
        })
      ]))
    ]);
  }

  private createRightAnimation(): AnimationFactory {
    return this.animationBuilder.build([
      animate(400, keyframes([
        style({
          left: '*',
          top: '*',
          transform: '*'
        }),
        style({
          left: window.innerWidth + 'px',
          top: 0 + 'px',
          transform: 'rotate(0deg)'
        })
      ])),
      animate(1, keyframes([
        style({
          left: this.startXPosition + 'px',
          top: this.startYPosition + 'px',
          transform: this.startTransform
        })
      ]))
    ]);
  }

  private createLeftAnimation(): AnimationFactory {
    return this.animationBuilder.build([
      animate(400, keyframes([
        style({
          left: '*',
          top: '*',
          transform: '*'
        }),
        style({
          left: (-window.innerWidth) + 'px',
          top: 0 + 'px',
          transform: 'rotate(0deg)'
        })
      ])),
      animate(1, keyframes([
        style({
          left: this.startXPosition + 'px',
          top: this.startYPosition + 'px',
          transform: this.startTransform
        })
      ]))
    ]);
  }
}
