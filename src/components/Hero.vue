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
  <div>
    <h1>{{ hero.title }}</h1>
    <h2>{{ hero.description }}</h2>
    <a :href="hero.ctaLink">{{ hero.ctaText }}</a>
  </div>
</template>