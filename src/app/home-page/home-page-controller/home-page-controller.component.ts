import { Component, OnInit } from '@angular/core';
import { Snippet } from '../models/snippet';
import { Languages } from '../models/temp-languages.enum';

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {

  snippets = [
    new Snippet('My Snipshake', 'desc', 'let i = 0', Languages.typescript),
    new Snippet('My Snipshake', 'desc', 'let i = 0', Languages.typescript),
    new Snippet('My Snipshake', 'desc', 'let i = 0', Languages.typescript)
  ]
  constructor() { }

  ngOnInit() {
  }

}
