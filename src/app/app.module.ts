import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NestedCompComponent } from './nested-comp/nested-comp.component';
import { ContentCompComponent } from './content-comp/content-comp.component';
import { DyrektywyNGComponent } from './dyrektywy-ng/dyrektywy-ng.component';
import { DyrektywyNgIfComponent } from './dyrektywy-ng-if/dyrektywy-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedCompComponent,
    ContentCompComponent,
    DyrektywyNGComponent,
    DyrektywyNgIfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
