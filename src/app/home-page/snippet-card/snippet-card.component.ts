import { Component, OnInit, Input } from '@angular/core';
import { Snippet } from '../models/snippet';

@Component({
  selector: 'app-snippet-card',
  templateUrl: './snippet-card.component.html',
  styleUrls: ['./snippet-card.component.scss']
})
export class SnippetCardComponent implements OnInit {

  @Input() snippet: Snippet;
  showModal = false;

  constructor() { }

  ngOnInit() {
  }

  showDetails = () => {
    this.showModal = true;
  }

}
