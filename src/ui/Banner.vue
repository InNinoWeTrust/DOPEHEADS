<template>
  <div class="relative bg-orange-600 dark:bg-black-dynamo-500">
    <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex justify-center sm:w-full sm:px-16 sm:text-center">
        <slot></slot>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2"></div>
    </div>
  </div>
</template>

<script setup></script>
