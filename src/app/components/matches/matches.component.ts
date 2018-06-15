import { Component, OnInit } from '@angular/core';
import { Match } from '../../util/match';
import * as Fuse from 'fuse.js';

const FUSE_OPTIONS = {
  shouldSort: true,
  findAllMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'nick'
  ]
};

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css', '../../common.css']
})
export class MatchesComponent implements OnInit {
  private matches: Match[];
  private fuse: Fuse;
  public searchMatches: Match[];

  constructor() { }

  ngOnInit() {
    const photo1 = 'https://thumb9.shutterstock.com/display_pic_with_logo/111616/111616,1312478131,2/stock-photo-beauty-woman' +
      '-portrait-of-teen-girl-beautiful-cheerful-enjoying-with-long-brown-hair-and-clean-skin-82225732.jpg';
    const photo2 = 'https://thumb9.shutterstock.com/display_pic_with_logo/399136/646898302/stock-photo-beautiful-woman-646898302.jpg';

    this.matches = [
      new Match('Roksana', photo1),
      new Match('Amelia', photo2),
      new Match('Sidey Myoo', photo2)
    ].sort((a: Match, b: Match) => a.nick.localeCompare(b.nick));

    this.searchMatches = this.matches;
    this.fuse = new Fuse(this.matches, FUSE_OPTIONS);
  }

  public search(searchString: string): void {
    this.searchMatches = searchString ? this.fuse.search(searchString) : this.matches;
  }

}
