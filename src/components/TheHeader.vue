<template>
  <BannerComp>
    <p class="font-medium text-white">
      <span class="md:hidden">
        <PhoneIcon class="mx-2 inline-flex h-5 w-5 flex-shrink-0 text-gray-200 dark:text-orange-500" />
        <a class="font-Bebas italic tracking-widest" to="tel:713-333-7025">713-205-0548</a>
      </span>
      <span class="hidden text-gray-200 md:inline">
        <PhoneIcon class="mx-2 -mt-2 inline-flex h-5 w-5 flex-shrink-0 text-gray-200 dark:text-orange-500" />
        <a class="font-Bebas tracking-widest hover:text-white" to="tel:713-333-7025">713-205-0548</a>
      </span>
    </p>
  </BannerComp>

  <div class="relative py-10">
    <Popover>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div class="flex w-full items-center justify-between md:w-auto">
              <router-link to="/">
                <h2
                  class="block font-BebasExtraBold text-3xl font-semibold uppercase italic leading-none tracking-wide text-orange-500"
                >
                  Dopeheads NFT
                </h2>
             
              </router-link>
              <dark-mode-toggle class="md:hidden" />
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-orange-600 dark:text-white"
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="font-Bebas text-2xl font-medium uppercase italic tracking-widest text-gray-700 hover:text-gray-900 dark:bg-black-dynamo-800 dark:text-gray-400 dark:hover:text-white"
              >{{ item.name }}</router-link
            >
            <dark-mode-toggle class="-mt-1" />
          </div>

          <div class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span class="inline-flex rounded-md">
              <a
                to="#"
                class="ml-8 inline-flex -skew-x-12 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-black-dynamo-400 px-4 py-2 font-Bebas text-lg uppercase tracking-wider text-white shadow-sm hover:bg-orange-600"
                >Contact us</a
              >
            </span>
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div
            class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-black-dynamo-800"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <router-link to="/">
                <h2
                  class="block font-BebasExtraBold text-3xl font-semibold uppercase italic leading-none tracking-wide text-orange-500"
                >
                 Dopeheads NFT
                </h2>
        
            
              </router-link>

              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-orange-500 dark:text-white"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <popover-button class="text-left">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  class="block rounded-md px-3 py-2 font-Bebas text-2xl font-medium uppercase italic tracking-widest text-gray-700 hover:text-gray-900 dark:bg-black-dynamo-800 dark:text-gray-400 dark:hover:text-white"
                  >{{ item.name }}</router-link
                >
              </popover-button>
            </div>
            <a
              href="#"
              class="block w-full bg-black-dynamo-400 px-5 py-3 text-center font-Bebas text-2xl uppercase italic tracking-wider text-white shadow-sm hover:bg-orange-600"
              >Contact us</a
            >
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import BannerComp from "../ui/Banner.vue";
import DarkModeToggle from "../ui/DarkModeToggle.vue";

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, PhoneIcon, XIcon } from "@heroicons/vue/outline";
import { useNavigation } from "../stores/navigation";

const store = useNavigation();

const navigation = store.getNavigation;

// const { vibrate } = navigator;
</script>
