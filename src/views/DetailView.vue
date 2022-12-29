<script>
import { showStarship } from "@/api/startships";
import {
  ArrowLeftIcon,
  UserGroupIcon,
  StarIcon,
} from "@heroicons/vue/24/solid";
import { RocketLaunchIcon } from "@heroicons/vue/24/outline";
import SpecificationCard from "@/components/SpecificationCard.vue";

export default {
  components: {
    ArrowLeftIcon,
    RocketLaunchIcon,
    UserGroupIcon,
    StarIcon,
    SpecificationCard,
  },
  data() {
    return {
      starship: {
        isFetching: true,
        data: {},
      },
    };
  },
  methods: {
    onClickBack() {
      this.$router.back();
    },
    async fetchDetail(id) {
      try {
        this.starship.isFetching = true;
        const result = await showStarship(id);

        if (result.status === 200) {
          this.starship.data = result.data;
          this.starship.isFetching = false;
        }
      } catch (error) {
        this.starship.isFetching = false;
      }
    },
  },
  mounted() {
    this.fetchDetail(this.$route.params.id);
  },
};
</script>

<template>
  <div
    v-if="starship.isFetching"
    class="flex h-screen w-full justify-center items-center"
  >
    <RocketLaunchIcon class="text-primary h-6 w-6 animate-ping" />
  </div>
  <div class="flex flex-col h-full w-full min-h-screen" v-else>
    <div class="flex items-center h-16 bg-primary w-full px-4 shadow-lg">
      <ArrowLeftIcon
        class="h-6 w-6 text-white cursor-pointer"
        @click="onClickBack"
      />
      <h1 class="ml-4 text-lg text-white font-bold">
        {{ starship.data?.model }}
      </h1>
    </div>

    <div
      class="flex flex-col justify-evenly items-center h-60 w-full bg-primary"
    >
      <div class="flex bg-white justify-center items-center p-8 rounded-full">
        <img src="@/assets/spaceship.png" height="64" width="64" />
      </div>
      <div class="flex flex-col items-center mt-2">
        <span class="text-gray-100">{{ starship.data.starship_class }}</span>
        <span class="text-white font-bold text-xl">
          {{ starship.data.name }}
        </span>
      </div>

      <div class="flex h-full gap-4 items-center">
        <div class="flex gap-1">
          <StarIcon class="h-6 w-6 text-yellow" />
          <span class="text-white text-lg">
            {{ starship.data.hyperdrive_rating }}
          </span>
        </div>
        <div class="flex gap-1">
          <UserGroupIcon class="h-6 w-6 text-pink" />
          <span class="text-white text-lg">{{ starship.data.passengers }}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full p-4 gap-2">
      <div class="flex flex-col">
        <span class="text-gray-500 text-sm">Manufacturer</span>
        <span class="text-secondary font-bold">
          {{ starship.data.manufacturer }}
        </span>
      </div>

      <hr class="my-4" />

      <span class="text-gray-500 text-sm">Specification</span>

      <div class="flex justify-between gap-2">
        <SpecificationCard
          v-bind:title="'Consumables'"
          v-bind:value="starship.data.consumables"
        />
        <SpecificationCard
          v-bind:title="'Crew'"
          v-bind:value="starship.data.crew"
        />
        <SpecificationCard
          v-bind:title="'Length'"
          v-bind:value="starship.data.length"
        />
      </div>

      <SpecificationCard
        v-bind:title="'Max Atmosphering Speed'"
        v-bind:value="starship.data.max_atmosphering_speed"
      />

      <div class="flex justify-between gap-2">
        <SpecificationCard
          v-bind:title="'Cost in Credits'"
          v-bind:value="starship.data.cost_in_credits"
        />
        <SpecificationCard
          v-bind:title="'Cargo Capacity'"
          v-bind:value="starship.data.cargo_capacity"
        />
      </div>
    </div>
  </div>
</template>
