import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CardModule } from "ngx-card/ngx-card";
import { IonicModule } from "@ionic/angular";

import { AddCardPage } from "./add-card.page";

const routes: Routes = [
  {
    path: "",
    component: AddCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CardModule
  ],
  declarations: [AddCardPage]
})
export class AddCardPageModule {}
