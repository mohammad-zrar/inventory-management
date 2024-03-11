<template>
  <div class="container">
    <base-card>
      <div class="tw-grid tw-gap-4">
        <div class="header">
          <h1 class="tw-text-3xl tw-font-bold tw-text-neutral-700">Login</h1>
        </div>
        <div class="body tw-grid tw-gap-4">
          <q-input
            :debounce="5000"
            dense
            outlined
            v-model="formInput.email"
            label="Email address"
            stack-label
            color="red-12"
          />
          <q-input
            dense
            outlined
            v-model="formInput.password"
            label="Password"
            stack-label
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="actions tw-w-full">
          <q-btn
            class="!tw-w-full"
            unelevated
            rounded
            color="primary"
            label="Sign in"
          />
        </div>
      </div>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/AuthStore.ts";
import { AuthInput } from "../types/entityTypes.ts";
import BaseCard from "../components/BaseCard.vue";

const authStore = useAuthStore();
console.log(authStore.test);
const isPwd = ref<boolean>(true);
const formInput = ref<AuthInput>({
  email: "",
  password: "",
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Optional: Set the container to full height of the viewport */
}
</style>
../components/Card.vue/index.ts
