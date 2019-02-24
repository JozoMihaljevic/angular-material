import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from "./table-list/table-list.component";
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from "./icons/icons.component";
import { MapsComponent } from "./maps/maps.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { BmiService } from './services/bmi.service';
import { WhrService } from './services/whr.service';
import { HomaService } from './services/homa.service';
import { KrvnaSlikaService } from './services/krvnaslika.service';
import { KalkulatorRizikaService } from './services/kalkulatorrizika.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY"
    })
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [
    BmiService,
    WhrService,
    HomaService,
    KrvnaSlikaService,
    KalkulatorRizikaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
