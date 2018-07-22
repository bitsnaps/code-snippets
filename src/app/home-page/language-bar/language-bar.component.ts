import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Languages } from '../models/temp-languages.enum';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  @Output() newSelectionMade = new EventEmitter<Languages>();
  readonly headerText = "Select A Language";

  selectedLanguages = new Set<Languages>();
  languagesOptions  = new Set<Languages>();
  showModal = false;
  newSelection: Languages;

  constructor() { }

  ngOnInit() {
    this.languagesOptions.add(Languages.css);
    this.languagesOptions.add(Languages.typescript);
  }

  updateNewSelection = (lang: Languages) => {
    this.newSelection = lang;
  }

  saveLanguage = () => {
    this.selectedLanguages.add(this.newSelection);
    this.newSelectionMade.emit(this.newSelection);
    this.showModal = false;
  }

  show = () => {
    this.showModal = true;
  }

}
