import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() id: number;
  @Input() userId: number;
  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit(): void {
  }

}
