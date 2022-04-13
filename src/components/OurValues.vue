<template>
  <div class="bg-white py-20 dark:bg-black-dynamo-800">
    <div class="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base font-semibold uppercase tracking-wide text-orange-600">OUR VALUES</h2>
        <p
          class="mt-2 font-Bebas text-3xl font-extrabold uppercase italic leading-8 tracking-wider text-gray-900 dark:text-gray-100 sm:text-4xl"
        >
          The Law Offices of Heriberto Ramos & Associates values
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit.
        </p>
      </div>
      <h2 class="sr-only">Our values.</h2>
      <dl class="mt-16 space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <div
              class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-tr from-orange-300 to-orange-500 text-white"
            >
              <component :is="feature.icon" class="h-7 w-7" aria-hidden="true" />
            </div>
            <p
              class="leading-12 mt-5 font-Bebas text-2xl font-medium uppercase italic tracking-wider text-gray-900 dark:text-orange-600"
            >
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 text-base text-gray-500 dark:text-gray-200">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import HandShake from "../ui/icons/HandShake.vue";
import Badge from "../ui/icons/CarbonBadge.vue";
import Scale from "../ui/icons/ScalesLight.vue";

// TODO: Import from database if needs to be dynamically updated
const features = [
  {
    name: "Professionalism",
    description:
      "The Law firm of Heriberto Ramos & Associates, efficiently and effectively use various disciplines learned in their career to solve every case with dignity, and respect our clients deserve.",
    icon: HandShake,
  },
  {
    name: "Experience",
    description:
      "Experience has given them the knowledge and skills required in different circumstances, situations, and cases. Each case is different and therefore is treated with personalized attention.",
    icon: Badge,
  },
  {
    name: "Honesty",
    description: "This is a virtue that characterizes them; they truly are the lawyers Houston TX resident’s trust.",
    icon: Scale,
  },
];
</script>
