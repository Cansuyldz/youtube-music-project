import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwiperComponent } from './swiper/swiper.component';
import { KesfetComponent } from './kesfet/kesfet.component';
import { KitaplikComponent } from './kitaplik/kitaplik.component';
// @ts-ignore
import { SwiperModule } from "swiper/angular";
import { HomeComponent } from './home/home.component';
import { QuicselectionswiperComponent } from './quicselectionswiper/quicselectionswiper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwiperComponent,
    KesfetComponent,
    KitaplikComponent,
    HomeComponent,
    QuicselectionswiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
