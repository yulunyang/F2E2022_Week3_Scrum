<!-- eslint-disable vue/multi-word-component-names -->
<template>
<main>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>
</main>

</template>

<script>

export default {
  components: { },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));
  @return $randomNum;
}
$colors: #B967FF, #01CDFE, #05FFA1;
$numOfFireworks: 50;


@mixin create-path() {
  offset-path: path(
    "M 0, 0 " + 
    "q 0, #{randomNum(0, -50)}, #{randomNum(-300, 300)}, #{randomNum(-300, 300)} "
  );
}

body {
  background: #151515;
  width: 100vw;
  height: 100vh;
}

main {
  position: absolute;
  height: 10px;
  width: 10px;
  animation: 5s position ease-out infinite;
}

.firework {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  offset-distance: 0;
  z-index: -1;

  @for $i from 0 through $numOfFireworks {
    &:nth-of-type(#{$i}) {
      @include create-path();
      animation: 1s scatter ease-out infinite;
      background: lighten(nth($colors, random(length($colors))), 20%);
    }
  }
}

@keyframes scatter {
  0% {
    offset-distance: 0%;
  }
  50% {
    opacity: 1;
  }
  100%{
   offset-distance: 100%; 
    opacity: 0;
  }
}

@keyframes position {
  0%, 19.9% {
    transform: translate(10vw, 40vh);
  }
  20%, 39.9% {
    transform: translate(40vw, 30vh);
  }
  40%, 59.9% {
    transform: translate(20vw, 90vh);
  }
  60%, 79.9% {
    transform: translate(30vw, 20vh);
  }
  80%, 99.9% {
    transform: translate(80vw, 50vh);
  }
}
</style>