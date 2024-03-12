<template>
  <q-header elevated>
    <q-toolbar class="glossy">
      <q-btn
        @click="toggleDrawer"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
      />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>

      <q-toolbar-title>Quasar Framework</q-toolbar-title>
      <div class="tw-mr-16"><q-btn flat round dense icon="whatshot" /></div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { useDrawerStore } from "../store/DrawerStore";

const drawerStore = useDrawerStore();
function toggleDrawer() {
  drawerStore.toggleDrawer();
}
</script>
