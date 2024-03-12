<template>
  <q-header elevated>
    <q-toolbar class="tw-bg-blue-400">
      <q-btn
        @click="toggleDrawer"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
      />

      <q-toolbar-title>
        <q-img src="../assets/myrtle-logo.png" class="!tw-w-20" alt="Logo" />
      </q-toolbar-title>
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
