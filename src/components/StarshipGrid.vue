<script>
import StarshipCardVue from "@/components/StarshipCard.vue";
export default {
  components: {
    StarshipCardVue,
  },
  props: {
    data: {
      type: [],
      default: [],
    },
  },
};
</script>

<template>
  <div class="flex w-full flex-wrap">
    <div v-for="(item, index) in data" :key="index" class="w-1/2 p-2">
      <StarshipCardVue
        v-bind:url="item.url"
        v-bind:name="item.name"
        v-bind:model="item.model"
        v-bind:passenger="item.passengers"
        v-bind:rating="item.hyperdrive_rating"
      />
    </div>
  </div>
</template>
