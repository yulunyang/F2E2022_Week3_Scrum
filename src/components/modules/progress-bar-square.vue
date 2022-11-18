<template>
  <section>
    <div class="bar-steps">
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: "progress-bar-square",
  components: { },
  data () {
    return {
    }
  },
  props: {
    // step: {
    //   type: Number
    // }
  },
  computed: {
    // calcWidth () {
    //   if (this.step > 0) {
    //     return (this.step / 9) * 100
    //   } else {
    //     return 0
    //   }
    // }
  }
};
</script>
<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*--FIRST CONTINUOUS PROGRESS BAR--*/
.bar,
.bar::after,
.bar-steps {
  position: relative;
  width: 480px;
  height: 28px;
  background: #464B55;
}

.bar::after {
  position: absolute;
  content: "";
  background-color: steelblue;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  // animation: loading 5s 2s ease-in-out forwards;
}

.text {
  font-family: sans-serif;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}

// @keyframes loading {
//   from {
//     clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
//   }

//   75% {
//     clip-path: polygon(0 0, 5% 0, 5% 100%, 0 100%);
//   }

//   to {
//     clip-path: polygon(0 0, 5% 0, 5% 100%, 0 100%);
//   }
// }


.bar-steps {
  display: flex;
}

.step,
.step::after {
  width: 24px;
  height: 32px;
  border-right: solid 6px #2F343F;
  position: relative;
}

.step:last-of-type {
  border-right: none;
}

.step::after {
  position: absolute;
  content: "";
  background-color: steelblue;
  opacity: 0;
}

// .step:first-of-type::after {
//   animation: loading-steps 2s linear forwards;
// }

// .step:nth-of-type(2)::after {
//   animation: loading-steps 1s 2s linear forwards;
// }
// .step:nth-of-type(3)::after {
//   animation: loading-steps 1s 3s linear forwards;
// }

// .step:nth-of-type(4)::after {
//   animation: loading-steps 0.5s 4s linear forwards;
// }

// .step:nth-of-type(5)::after {
//   animation: loading-steps 2s 4.5s linear forwards;
// }

// .step:nth-of-type(6)::after {
//   animation: loading-steps 1s 6.5s linear forwards;
// }

// .step:nth-of-type(7)::after {
//   animation: loading-steps 1s 7.5s linear forwards;
// }

// .step:nth-of-type(8)::after {
//   animation: loading-steps 0.5s 8.5s linear forwards;
// }

// .step:nth-of-type(9)::after {
//   animation: loading-steps 0.5s 10s linear forwards;
// }

// .step:nth-of-type(10)::after {
//   animation: loading-steps 0.5s 12s linear forwards;
// }

// @keyframes loading-steps {
//   from {
//     opacity: 0;
//   }

//   to {
//     opacity: 1;
//   }
// }

/*--PROGRESSIVE RING--*/
.ring,
.ring::after {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 10px solid lightgray;
  position: relative;
}

.ring::after {
  position: absolute;
  content: "";
  top: -10px;
  left: -10px;
  border-color: green;

  clip-path: polygon(
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%
  );
  animation: ring-loading 10s 2s linear forwards;
}

@keyframes ring-loading {
  from {
    clip-path: polygon(
      50% 50%,
      50% 50%,
      50% 50%,
      50% 50%,
      50% 50%,
      50% 50%,
      50% 50%,
      50% 50%,
      50% 50%
    );
  }
  1% {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      50% 0%,
      50% 0%,
      50% 0%,
      50% 0%,
      50% 0%,
      50% 0%,
      50% 10%
    );
  }

  12.5% {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%
    );
  }

  37.5% {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%
    );
  }
  62.5% {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 100%,
      0% 100%,
      0% 100%,
      0% 100%
    );
  }

  75% {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 50%,
      0% 50%,
      0% 50%,
      0% 50%
    );
  }

  87.5% {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 50%,
      0% 0%,
      0% 0%,
      0% 0%
    );
  }

  to {
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 50%,
      0% 0%,
      25% 0%,
      50% 0%
    );
  }
}

</style>