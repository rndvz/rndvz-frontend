import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';
import { Person } from '../../util/person';
import { Gender } from '../../util/gender.enum';
import { PanHammerInput } from '../../util/pan-hammer-input';
import {RestFullService} from '../../services/rest-full.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @ViewChild('mainCard') public cardElement: ElementRef;
  public currentPlayer: AnimationPlayer;
  public cards: Person[];
  public maxCards = 10;

  public startXPosition = 0;
  public startYPosition = 0;
  public noRotateTransform = 'rotate(0deg)';
  public currentXPosition = this.startXPosition;
  public currentYPosition = this.startYPosition;
  public currentTransform = this.noRotateTransform;

  constructor(private domSanitizer: DomSanitizer, private animationBuilder: AnimationBuilder, private restService: RestFullService) { }

  ngOnInit() {
    const photo1 = 'https://thumb9.shutterstock.com/display_pic_with_logo/111616/111616,1312478131,2/stock-photo-beauty-woman' +
      '-portrait-of-teen-girl-beautiful-cheerful-enjoying-with-long-brown-hair-and-clean-skin-82225732.jpg';
    const photo2 = 'https://thumb9.shutterstock.com/display_pic_with_logo/399136/646898302/stock-photo-beautiful-woman-646898302.jpg';
    const photo3 = 'http://4.bp.blogspot.com/-i9qj20Om4Zs/UYshvXTJcoI/AAAAAAAAHkA/k3YQEoa0ZPg/s400/603760_454781201278701_1591909635_n.jpg';
    const card1 = new Person('Amelia', 'hehe ;)', Gender.female, [photo1, photo2, photo3]);
    const card2 = new Person('Jessica', '(:', Gender.female, [photo2]);
    this.cards = [card1, card2, card1];
  }

  public onPanMove(event: PanHammerInput): void {
    const offsetX = event.deltaX + this.startXPosition;
    const offsetY = event.deltaY + this.startYPosition;

    this.currentXPosition = offsetX;
    this.currentYPosition = offsetY;
    this.currentTransform = 'rotate(' + (((offsetX - this.startXPosition) * 50) / this.cardElement.nativeElement.clientWidth) + 'deg)';
  }

  public onPanEnd(event: PanHammerInput): void {
    if (this.isSwipeRight(event)) {
      this.restService.accepptUser(22, 14); // my_id, another_user_id
      this.currentPlayer = this.createSwipeRightAnimation();
    } else if (this.isSwipeLeft(event)) {
      this.restService.blockUser(22, 14);
      this.currentPlayer = this.createSwipeLeftAnimation();
    } else {
      this.currentPlayer = this.createReturnAnimation();
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

  private createReturnAnimation(): AnimationPlayer {
    return this.createCardAnimation(150, this.startXPosition, false);
  }

  private createSwipeRightAnimation(): AnimationPlayer {
    return this.createSwipeAnimation(window.innerWidth * 2);
  }

  private createSwipeLeftAnimation(): AnimationPlayer {
    return this.createSwipeAnimation((-window.innerWidth) * 2);
  }

  private createSwipeAnimation(left: number): AnimationPlayer {
    return this.createCardAnimation(250, left, true);
  }

  private createCardAnimation(timings: number, left: number, withCardPop: boolean): AnimationPlayer {
    const animationFactory = this.animationBuilder.build([
      animate(timings, style({
        left: left + 'px',
        top: '0px',
        transform: this.noRotateTransform
      }))
    ]);

    const player = animationFactory.create(this.cardElement.nativeElement);
    player.onDone(() => {
      this.resetPlayerAndCard(withCardPop);
    });

    return player;
  }

  private async resetPlayerAndCard(withCardPop: boolean): Promise<void> {
    if (this.currentPlayer) {
      this.currentPlayer.destroy();
    }

    if (withCardPop) {
      this.cards.shift();
    }

    this.currentXPosition = this.startXPosition;
    this.currentYPosition = this.startYPosition;
    this.currentTransform = this.noRotateTransform;
  }
}
