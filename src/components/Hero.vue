<script setup>
import Contentful from "../contentful";

const res = await Contentful.getEntries({ content_type: "hero" });
const item = res.items[0];

const hero = {
  title: item.fields.title,
  description: item.fields.description,
  ctaLink: item.fields.ctaLink,
  ctaText: item.fields.ctaText,
};
</script>

<template>
  <div
    class="
      min-h-screen min-w-full
      bg-gray-100
      flex flex-col
      justify-center
      p-10
    "
  >
    <div
      class="
        relative
        w-full
        max-w-full
        lg:max-w-6xl
        xl:max-w-screen-2xl
        mx-auto
      "
    >
      <div
        class="
          absolute
          inset-0
          -mr-3.5
          bg-gradient-to-r
          from-red-100
          to-purple-500
          shadow-lg
          transform
          -skew-y-6
          sm:skew-y-0
          sm:rotate-3
          sm:rounded-3xl
        "
      ></div>
      <div class="relative bg-white shadow-lg sm:rounded-3xl">
        <div class="flex items-center justify-start pt-6 pl-6">
          <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        </div>

        <div class="px-20 py-6">
          <!-- hero section -->
          <div class="lg:2/6 xl:w-2/4 text-left">
            <div class="text-6xl font-semibold text-gray-900 leading-none">
              {{ hero.title }}
            </div>
            <div
              class="my-12 text-xl font-light text-true-gray-500 antialiased"
            >
              {{ hero.description }}
            </div>
            <a
              class="
                mt-6
                px-8
                py-4
                rounded-full
                font-normal
                tracking-wide
                bg-gradient-to-b
                from-blue-600
                to-blue-700
                text-white
                outline-none
                focus:outline-none
                hover:shadow-lg
                hover:from-blue-700
                transition
                duration-200
                ease-in-out
              "
              :href="hero.ctaLink"
            >
              {{ hero.ctaText }}
            </a>
          </div>

          <!-- /hero section -->
        </div>
      </div>
    </div>
  </div>
</template>