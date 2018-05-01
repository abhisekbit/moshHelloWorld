import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      // tslint:disable-next-line:prefer-const
      let id = combined[0].get('id');
      // tslint:disable-next-line:prefer-const
      let paged = combined[1].get('page');
      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);
  }
}
