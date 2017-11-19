import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,

  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MdModule { }
