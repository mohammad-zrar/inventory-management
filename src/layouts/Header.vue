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
      <div class="tw-mr-16">
        <q-btn dense flat no-wrap>
          Mohammad Zrar
          <q-icon name="arrow_drop_down" size="20px" />

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
