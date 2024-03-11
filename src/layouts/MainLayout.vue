<template>
  <div>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <Header />
      <Drawer />
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue";
import Drawer from "./Drawer.vue";
</script>
