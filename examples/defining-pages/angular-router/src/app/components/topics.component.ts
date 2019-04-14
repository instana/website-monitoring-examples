import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit {
  title = 'Topics';
  topic = 'Unspecified';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe(({topic}) => this.topic = topic);
  }
}
