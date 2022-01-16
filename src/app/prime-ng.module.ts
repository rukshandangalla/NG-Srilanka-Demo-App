import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
