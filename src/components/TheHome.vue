<template>
  <section class="relative flex h-[28rem] items-center justify-center overflow-hidden">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute z-0 min-h-full w-auto min-w-full max-w-none"
    >
      <source :src="introVideo" type="video/mp4" />Your browser does not support the video tag.
    </video>
  </section>

  <!-- Accident itake start -->
  <AccidentStart />

  <!-- Our values -->
  <OurValues />

  <!-- Common cases we handle -->
  <CommonCases />
</template>

<script setup>
import introVideo from "../assets/frontpagevideo.mp4";
import AccidentStart from "./AccidentStart.vue";
import OurValues from "./OurValues.vue";
import CommonCases from "./CommonCases.vue";
</script>


