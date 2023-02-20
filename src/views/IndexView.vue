

<template>
  <swiper :slides-per-view="1" :space-between="50" :modules="modules" navigation :pagination="{ clickable: true }">
    <swiper-slide>
      <div class="bg" style="
      background-image: url('/images/02.png');
      ">
        <div>
          <div class="row justify-content-center">
            <div class="col-6  text-white flex-column d-flex align-items-center justify-content-center" style="height: 100vh;
              margin-top: -5rem;">
              <div class="p-5 text-center" style="background: rgb(0, 0, 0,30%);">
                <h2>卓越品質 歷久不衰</h2>
                <h3>讓經營成為享受</h3>
              </div>
              <div>
                <p class="mt-8 text-white">酷碼期待與您的合作</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg" style="
      background-image: url('/images/01.png');">
        <div>
          <div class="row justify-content-center">
            <div class="col-6  text-white flex-column d-flex align-items-center justify-content-center" style="height: 100vh;
              margin-top: -5rem;">
              <div class="p-5 text-center" style="background: rgb(0, 0, 0,30%);">
                <h2>卓越品質 歷久不衰</h2>
                <h3>讓經營成為享受</h3>
              </div>
              <div>
                <p class="mt-8 text-white">酷碼期待與您的合作</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  data() {
    return {
      modules: [Navigation, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style>
.swiper {
  max-width: 100%;
  height: 100%;
  margin: 0;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
}

.swiper-pagination-bullet {
  background-color: white;

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>