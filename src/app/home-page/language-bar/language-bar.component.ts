import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Languages, LanguageManagerService } from '../services/language-manager.service';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  @Output() languageSelected = new EventEmitter<Languages>();
  readonly headerText = "Select A Language";

  selectedLanguage: Languages;
  selectedLanguages = new Set<Languages>();
  languagesOptions  = new Set<Languages>();
  showModal = false;
  newSelection: Languages;

  constructor(private languageManager: LanguageManagerService) { }

  ngOnInit() {

    this.fetchAllOptions();
    this.fetchSavedOptions();
  }

  updateNewSelection = (lang: Languages) => {
    this.newSelection = lang;
  }

  updateSelectedLanguage = (lang: Languages) => {
    this.selectedLanguage = lang;
    this.languageSelected.emit(lang);
  }

  saveLanguage = () => {
    this.languageManager.saveLanguage(this.newSelection).subscribe(res => {
      this.selectedLanguages.add(this.newSelection);
      this.newSelection = undefined;
      this.showModal = false;
    }, err => {
      console.debug('could not save the language', err);
    })
  }

  show = () => {
    this.showModal = true;
  }

  private fetchAllOptions = () => {
    this.languageManager.fetchAllOptions().subscribe(res => {
      this.languagesOptions = res;
    }, err => {
      console.log('could not fetch all options from the language bar', err);
    });
  }
  private fetchSavedOptions = () => {
    this.languageManager.fetchSavedOptions().subscribe(res => {
      this.selectedLanguages = res;
      if (!this.selectedLanguage && res.size > 0){
        const first = res.values().next();
        this.selectedLanguage = first.value;
        this.languageSelected.emit(first.value);
      }
    }, err => {
      console.debug('could not fetch saved options in the language bar', err);
    });
  }

}
