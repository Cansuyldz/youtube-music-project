import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar,A11y]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent {
  config: SwiperOptions = {
    slidesPerView: 'auto',
  };
  onSwiper([swiper]: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
export class SwiperModule{
}
