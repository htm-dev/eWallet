import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { Ng2GoogleChartsModule } from "ng2-google-charts";

import { HomePage } from "./home.page";
import { JackpotCardComponent } from "../components/jackpot-card/jackpot-card.component";
import { HistoriqueListeComponent } from "../components/historique-liste/historique-liste.component";
import { ChartsModule } from "ng2-charts";
import { DoughnutComponent } from "../components/doughnut/doughnut.component";
//import { IconsListComponent } from "../components/icons-list/icons-list.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]),
    Ng2GoogleChartsModule
  ],
  declarations: [
    HomePage,
    JackpotCardComponent,
    HistoriqueListeComponent,
    DoughnutComponent
    //IconsListComponent
  ]
})
export class HomePageModule {}
