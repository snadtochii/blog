import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD:front-end/src/app/app.module.ts
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/app/app.module.ts

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdModule } from './shared/md.module';
<<<<<<< HEAD:front-end/src/app/app.module.ts
import { ThemingService } from './shared/services/common';
=======
import { ThemingService } from './shared/services/theming.service';
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    PostComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD:front-end/src/app/app.module.ts
    HttpClientModule,
    // FormsModule,
=======
    FormsModule,
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/app/app.module.ts
    MdModule,
    SharedModule
  ],
  providers: [ThemingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
