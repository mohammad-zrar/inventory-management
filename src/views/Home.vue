<template>
  <h1>Home</h1>
  <button @click="toggleDrawer">Toggle Drawer</button>
</template>

<script lang="ts" setup>
function toggleDrawer(): void {
  console.log("Toggle");
}
</script>
