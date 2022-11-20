<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="loading w-full h-screen fixed left-0 top-0">
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="hover-area"></div>
    <div class="star-field">
        <div class="stars stars-sm"></div>
        <div class="stars stars-md"></div>
        <div class="stars stars-lg"></div>
    </div>
    <div class="ship">
      <Vue3Lottie id="loading_pen" :animationData="animationData" class="h-auto" :width="150" />
        <!-- <div class="wrapper">
            <div class="body side left"></div>
            <div class="body main">
                <div class="wing left"></div>
                <div class="wing right"></div>
                <div class="booster"></div>
                <div class="exhaust"></div>
            </div>
            <div class="body side right"></div>
        </div> -->
    </div>
  </div>

</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import animationData from '@/assets/Rocket.json'
export default {
  components: {
    Vue3Lottie
  },
  data () {
    return {
      animationData: animationData
    }
  },
  mounted () {},
  methods: {
  }
}
</script>
<style lang="scss">
:root {
  --ship-size: 10vmin;

  --sky-color: #1C1740;
  --ship-color: #F9E2FE;
  --ship-cap-color: crimson;
  --ship-wing-color: #4C3198;
  --ship-window-trim-color: #4C3198;
  --ship-booster-color: #C38382;
  --star-color: white;

  --stars-sm-speed: 5s;
  --stars-md-speed: 2s;
  --stars-lg-speed: 1s;
}

@function star-generator($amount) {
  $value: (random(200) * 1vw) (random(200) * 1vh) var(--star-color);

  @for $i from 2 through $amount {
    $value: #{$value}, (random(200) * 1vw) (random(200) * 1vh) var(--star-color);
  }

  @return $value;
}

.loading {
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: var(--sky-color);
  z-index: 999;
}

.ship,
.star-field {
  position: absolute;
  top: 50%;
  left: 50%;
  will-change: transform;
  transition: transform 0.4s ease;
  transform: translate(-50%, -50%);
}

.star-field {
  width: 200%;
  height: 200%;
  transition: transform 1s ease-out;
}

// Stars
.stars {
  position: absolute;
  top: 0;
  left: 0;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation: stars linear infinite;
    transform: translateY(-100vh);
  }
  
  &-sm {
    width: 1px;
    height: 1px;
    
    &:before, &:after {
      box-shadow: star-generator(500);
      animation-duration: var(--stars-sm-speed);
    }
      
    &:after {
      animation-delay: calc(var(--stars-sm-speed) / -2);
    }
  }
  
  &-md {
    width: 2px;
    height: 2px;
    
    &:before, &:after {
      box-shadow: star-generator(200);
      animation-duration: var(--stars-md-speed);
    }
      
    &:after {
      animation-delay: calc(var(--stars-md-speed) / -2);
    }
  }
  
  &-lg {
    width: 4px;
    height: 4px;
    
    &:before, &:after {
      box-shadow: star-generator(50);
      animation-duration: var(--stars-lg-speed);
    }
    
    &:after {
      animation-delay: calc(var(--stars-lg-speed) / -2)
    }
  }
}


// Animations
@keyframes stars {
  0%   { opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}

@keyframes exhaust {
  to { transform: scaleX(0.98) translateY(-1vmin); }
}

@keyframes speed-up-exhaust {
  from { transform: scale(0.98, 1); }
  to   { transform: scale(0.96, 1.5); }
}

@keyframes speed-up-ship {
  from { transform: translateY(-5%); }
  to   { transform: translateY(-3%); }
}

</style>