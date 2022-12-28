<script>
import { listStarships } from "@/api/startships";
import { RocketLaunchIcon } from "@heroicons/vue/24/outline";
import StarshipGridVue from "@/components/StarshipGrid.vue";
import AppBarVue from "@/components/AppBar.vue";

export default {
  data() {
    return {
      search: null,
      page: 1,
      starships: {
        data: [],
        count: 0,
        isFetching: true,
        hasNext: true,
      },
    };
  },
  methods: {
    onInputSearchChange(e) {
      this.search = e.target.value;
      this.starships.data = [];
      this.fetchStarship(this.search, 1);
    },
    onScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        if (this.hasNext) {
          this.fetchStarship(this.search, this.page);
        }
      }
    },
    handleReset() {
      this.starships.data = [];
      this.search = null;
      this.fetchStarship(null, 1);
    },
    async fetchStarship(search, page) {
      try {
        this.starships.isFetching = true;
        const result = await listStarships({ search, page: page });

        if (result.status === 200) {
          this.starships.isFetching = false;
          this.starships.data = [
            ...this.starships.data,
            ...result.data.results,
          ];

          this.starships.count = result.data.count;
          this.hasNext = result.data.next !== null;

          if (this.hasNext) this.page++;
        }
      } catch (error) {
        this.starships.isFetching = false;
      }
    },
  },
  mounted() {
    this.fetchStarship();

    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scroll);
  },
  components: {
    StarshipGridVue,
    AppBarVue,
    RocketLaunchIcon,
  },
};
</script>

<template>
  <main class="relative">
    <AppBarVue :onSearch="this.onInputSearchChange" />
    <div class="flex items-end bg-white py-2 px-4 flex-col">
      <span class="text-gray-400">
        Showing
        <span class="font-bold text-secondary">{{ starships.count }}</span>
        starships result
        <span v-if="search" class="text-secondary font-bold">
          for {{ search }}
        </span>
        .
      </span>
      <a
        v-if="search"
        class="ml-2 hover:underline cursor-pointer"
        @click="handleReset"
      >
        Reset
      </a>
    </div>
    <div class="relative px-4">
      <StarshipGridVue
        v-bind:data="starships.data"
        v-bind:searchValue="search"
        @scroll="onScroll"
      />
      <div
        v-if="starships.isFetching"
        class="flex items-center justify-center h-14"
      >
        <RocketLaunchIcon class="text-primary h-6 w-6 animate-ping" />
      </div>
      <div v-else class="py-4 flex justify-center">
        <span
          v-if="starships.data.length > 0"
          class="text-secondary font-bold text-md text-center"
        >
          Yeay!, You reach the bottom of page.
        </span>
        <span v-else class="text-secondary font-bold text-md text-center">
          Data not found.
        </span>
      </div>
    </div>
  </main>
</template>
