import { Injectable } from '@angular/core';
import { Languages } from './language-manager.service';
import { Snippet } from '../models/snippet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetManagerService {

  private SNIPPET_STORAGE_KEY = 'code_snippets.saved_snippets';

  constructor() { }

  fetchSavedSnippets = (lang: Languages): Observable<Array<Snippet>> => {
    return Observable.create(observable => {
      // here we use try/catch block
      try {
        const relevantSnippets: Array<Snippet> = [];
        // we do not cast here to use _lang, otherwise it'll becsome private variable
        let snippets = JSON.parse(window.localStorage.getItem(this.SNIPPET_STORAGE_KEY));
        if (!snippets){
          snippets = [];
        }
        for (const snippet of snippets){
          if (snippet._lang === lang){
            relevantSnippets.push(new Snippet(snippet._title, snippet._desc, snippet._code, snippet._lang));
          }
        }
        observable.next(relevantSnippets);
      } catch (err){
        observable.error(err);
      }
    });
  }

  saveSnippet = (snippet: Snippet): Observable<void> => {
    return Observable.create(observable => {
      let savedSnippets = JSON.parse(window.localStorage.getItem(this.SNIPPET_STORAGE_KEY)) as Array<Snippet>;
      if (!savedSnippets){
        savedSnippets = [];
      }
      savedSnippets.push(snippet);
      window.localStorage.setItem(this.SNIPPET_STORAGE_KEY, JSON.stringify(savedSnippets));
      observable.next();

    })
  }

}
