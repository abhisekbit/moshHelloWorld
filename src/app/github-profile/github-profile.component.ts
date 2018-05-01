import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // tslint:disable-next-line:prefer-const
    let username = this.route.snapshot.paramMap.get('username');
    console.log(username);


    /* this.route.paramMap
        .subscribe(params => {
          // tslint:disable-next-line:prefer-const
          let id = +params.get('id')
          console.log(id);
        }); */
  }

}
