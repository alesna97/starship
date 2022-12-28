<script>
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  RocketLaunchIcon,
} from "@heroicons/vue/24/outline";

export default {
  props: {
    onSearch: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      showSearch: false,
    };
  },
  components: {
    MagnifyingGlassIcon,
    XMarkIcon,
    RocketLaunchIcon,
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    handleChange(e) {
      this.toggleSearch();

      if (this.$props.onSearch) this.$props.onSearch(e);
    },
  },
};
</script>

<template>
  <div
    class="sticky top-0 z-10 shadow-md bg-primary h-[64px] w-full px-4 flex items-center"
  >
    <span class="text-white font-bold text-2xl flex-1 flex items-center gap-4">
      <RocketLaunchIcon class="h-6 w-6 text-white" />
      Starship
    </span>
    <div class="flex-1 flex justify-end">
      <MagnifyingGlassIcon
        class="h-6 w-6 text-white cursor-pointer"
        @click="toggleSearch"
        v-if="!showSearch"
      />
      <XMarkIcon
        class="h-6 w-6 text-white cursor-pointer"
        @click="toggleSearch"
        v-else
      />
    </div>

    <div class="w-full absolute top-[70px] left-0 flex justify-center">
      <input
        type="text"
        class="w-11/12 outline-none rounded-md px-4 transition-all delay-75 shadow-md"
        v-bind:class="{
          'h-[56px]  border border-gray-200': showSearch,
          'py-0 border-0 h-0': !showSearch,
        }"
        @change="handleChange"
        placeholder="Search Starship..."
      />
    </div>
  </div>
</template>
