<template>
  <q-drawer
    v-model="drawer"
    class="tw-border-2 tw-bg-gray-100"
    show-if-above
    :width="200"
    :breakpoint="500"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <router-link :to="{ name: 'products' }">
          <q-item :active="isActive('/products')" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="store" />
            </q-item-section>

            <q-item-section> Products </q-item-section>
          </q-item>
        </router-link>

        <router-link :to="{ name: 'employees' }">
          <q-item :active="isActive('/employees')" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Employees </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useDrawerStore } from "../store/DrawerStore.ts";
import { useRoute, RouterLink } from "vue-router";

const drawerStore = useDrawerStore();
const drawer = ref<boolean>(drawerStore.isDrawerOpen);
const route = useRoute();

watchEffect(() => {
  drawer.value = drawerStore.isDrawerOpen;
});

const isActive = (routePath: string) => {
  return route.path === routePath;
};
</script>
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
