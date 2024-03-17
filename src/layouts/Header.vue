<template>
  <q-header class="tw-shadow-md">
    <q-toolbar class="tw-bg-blue-50">
      <q-btn
        @click="toggleDrawer"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm !tw-text-blue-900"
      />

      <q-toolbar-title>
        <q-img src="../assets/myrtle-logo.png" class="!tw-w-24" alt="Logo" />
      </q-toolbar-title>
      <!-- **** PROFILE MENU **** -->
      <div class="q-gutter-sm row items-center no-wrap tw-text-blue-950">
        <q-btn class="!hover:tw-bg-transparent" dense flat no-wrap>
          <div class="tw-flex tw-justify-center tw-align-middle">
            <div class="tw-m-auto tw-mr-1">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
              </q-avatar>
            </div>

            <div clas="tw-grid ">
              <div class="tw-text-sm tw-normal-case">Mohammad Zrar</div>
              <div class="tw-text-xs tw-text-blue-900 tw-normal-case">
                Front End Developer
              </div>
            </div>

            <div class="tw-m-auto"><q-icon name="arrow_drop_down" /></div>
          </div>

          <q-menu auto-close>
            <q-list dense>
              <q-item class="GL__menu-link-signed-in">
                <q-item-section>
                  <div>Signed in as <strong>Mohammad Zrar</strong></div>
                </q-item-section>
              </q-item>
              <q-separator />

              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Your profile</q-item-section>
              </q-item>
              <q-separator />

              <q-item clickable class="GL__menu-link">
                <q-item-section>Sign out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <!-- **** END OF POFILE MENU **** -->
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

<style scoped></style>
