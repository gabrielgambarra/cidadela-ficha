import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdventureStatsComponent } from './adventure-stats/adventure-stats.component';
import { FormsModule } from '@angular/forms';
import { IncrementButtonComponent } from './increment-button/increment-button.component';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { MonstersEncountersComponent } from './monsters-encounters/monsters-encounters.component';
import { MonstersListComponent } from './monsters-list/monsters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdventureStatsComponent,
    IncrementButtonComponent,
    SpellsListComponent,
    ItemsListComponent,
    MonstersEncountersComponent,
    MonstersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
