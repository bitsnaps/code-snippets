import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageControllerComponent } from './home-page-controller/home-page-controller.component';
import { UtilityComponentModule } from '../utility-component/utility-component.module';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { SnippetAdderComponent } from './snippet-adder/snippet-adder.component';
import { SnippetCardComponent } from './snippet-card/snippet-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SnippetManagerService } from './services/snippet-manager.service';
import { LanguageManagerService } from './services/language-manager.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    UtilityComponentModule,
    FormsModule
  ],
  declarations: [
    HomePageControllerComponent,
    LanguageBarComponent,
    SnippetAdderComponent,
    SnippetCardComponent
  ],
  exports: [
    HomePageControllerComponent
  ],
  providers: [
    SnippetManagerService,
    LanguageManagerService
  ]
})
export class HomePageModule { }
