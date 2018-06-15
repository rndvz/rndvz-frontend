import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

library.add(faSpinner);

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css', '../../common.css']
})
export class RefreshComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['']);
  }

}
