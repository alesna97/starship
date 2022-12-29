<script>
import { RocketLaunchIcon } from "@heroicons/vue/24/outline";
import { UserGroupIcon, StarIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    RocketLaunchIcon,
    UserGroupIcon,
    StarIcon,
  },
  props: {
    url: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    starshipClass: {
      type: String,
      default: "",
    },
    passenger: {
      type: String,
      default: "",
    },
    rating: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClickDetail() {
      this.$router.push(`/${this.$props.url.split("/")[5]}`);
    },
  },
};
</script>

<template>
  <div
    class="relative first-letter:flex w-full h-72 rounded-md shadow-md bg-white flex-col items-center p-2 justify-evenly"
  >
    <div class="absolute top-2 right-2 flex flex-col h-full gap-4">
      <div class="flex gap-1">
        <StarIcon class="h-5 w-5 text-yellow" />
        <span class="text-gray-400">{{ rating }}</span>
      </div>
    </div>
    <div class="absolute top-2 left-2 flex flex-col h-full gap-4">
      <div class="flex gap-1">
        <UserGroupIcon class="h-5 w-5 text-blue" />
        <span class="text-gray-400">{{ passenger }}</span>
      </div>
    </div>
    <div class="w-full h-[150px] flex justify-center items-center mt-2">
      <div class="flex-1 flex justify-center">
        <img
          src="@/assets/spaceship.png"
          height="96"
          width="96"
          alt="spaceship"
        />
      </div>
    </div>
    <span
      class="text-center text-xs text-gray-400 flex justify-center line-clamp-1"
    >
      {{ starshipClass }}
    </span>
    <span
      class="text-secondary font-bold text-center h-[56px] flex justify-center text-base"
    >
      {{ name }}
    </span>
    <button
      type="button"
      class="bg-primary rounded-md shadow-md outline-none border-none text-white w-full p-2 hover:bg-gray-300 hover:text-white flex items-center justify-center font-bold"
      @click="onClickDetail"
    >
      <RocketLaunchIcon class="text-white mr-2 h-5 w-5" /> View
    </button>
  </div>
</template>
