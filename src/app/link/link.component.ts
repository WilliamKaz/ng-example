import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() data;
  link: any;
  constructor() { }

  ngOnInit() {
    this.link = this.data;
    console.log(this.link)
  }

}
