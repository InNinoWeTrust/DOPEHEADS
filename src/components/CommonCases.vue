<template>
  <div class="bg-gray-100 dark:bg-black-dynamo-500">
    <div class="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-12">
        <div>
          <h2
            class="font-Bebas text-3xl font-extrabold uppercase italic tracking-wider text-gray-900 dark:text-gray-100"
          >
           
          </h2>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-200">
        
            <router-link class="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400" to="/team">
            team
              </router-link
            >
          </p>
        </div>
        <div class="mt-12 lg:col-span-2 lg:mt-0">
          <dl class="space-y-12">
            <div v-for="faq in faqs" :key="faq.question">
              <dt
                class="font-Bebas text-2xl font-medium uppercase italic leading-6 tracking-wide text-gray-900 dark:text-gray-100"
              >
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base text-gray-500 dark:text-gray-300">{{ faq.answer }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: "Do you handle maritime accidents?",
    answer:"",
  }
];
</script>

<style lang="scss" scoped></style>
