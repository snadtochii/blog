import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
<<<<<<< HEAD:front-end/src/app/shared/md.module.ts
import { MatButtonModule } from '@angular/material/button';
=======
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/app/shared/md.module.ts

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
<<<<<<< HEAD:front-end/src/app/shared/md.module.ts
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
=======
    MatSelectModule
  ],
  declarations: [],
  exports: [MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule]
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/app/shared/md.module.ts
})
export class MdModule { }
