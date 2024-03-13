<template>
  <q-header class="tw-shadow-md">
    <q-toolbar class="tw-bg-blue-100">
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
      <div class="tw-mr-16 tw-text-blue-900">
        <q-btn dense flat no-wrap>
          <div class="tw-font-semibold">Mohammad Zrar</div>

          <q-icon name="arrow_drop_down" class="tw-font-bold" size="20px" />

          <q-menu auto-close>
            <q-list dense>
              <q-item class="GL__menu-link-signed-in">
                <q-item-section>
                  <div>Signed in as <strong>Mohammad Zrar</strong></div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Your profile</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Help</q-item-section>
              </q-item>

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
