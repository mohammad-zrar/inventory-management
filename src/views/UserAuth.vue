<template>
  <div class="container">
    <base-card>
      <div class="tw-grid tw-gap-4">
        <div class="header">
          <h1 class="tw-text-3xl tw-font-bold tw-text-neutral-700">Login</h1>
        </div>
        <div class="body tw-grid tw-gap-4">
          <q-input
            dense
            outlined
            v-model="formInput.email.value"
            label="Email address"
            stack-label
            @keyup="validateEmail"
            :color="emailInputColor"
          />
          <q-input
            dense
            outlined
            v-model="formInput.password.value"
            label="Password"
            stack-label
            :type="isPwd ? 'password' : 'text'"
            @keyup="validatePassword"
            :color="passwordInputColor"
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
            @click="submit"
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
import { ref, computed } from "vue";
import { useAuthStore } from "../store/AuthStore.ts";
import { AuthInput } from "../types/entityTypes.ts";
import BaseCard from "../components/BaseCard.vue";

const authStore = useAuthStore();
console.log(authStore.test);

const isPwd = ref<boolean>(true);
const formInput = ref<AuthInput>({
  email: { value: "", valid: true },
  password: { value: "", valid: true },
});

/* ---- Patterns for validate form inputs ---- */
const patterns = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //             yourname @ domain   .  com          ( .uk )
  password: /^.{8,}$/i,
};

/* ---- Changing color while it's validate or not ---- */
const emailInputColor = computed(() => {
  return patterns.email.test(formInput.value.email.value)
    ? "primary"
    : "red-12";
});
const passwordInputColor = computed(() => {
  return patterns.password.test(formInput.value.password.value)
    ? "primary"
    : "red-12";
});
/* ---- ---- ---- */

/* ---- Validation for form inputs ---- */
function validateEmail(): void {
  formInput.value.email.valid = patterns.email.test(
    formInput.value.email.value
  );
}
function validatePassword(): void {
  formInput.value.password.valid = patterns.password.test(
    formInput.value.password.value
  );
}
/* ---- END of validation for form inputs ---- */
function submit(): void {
  console.log("Authenticate");
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Optional: Set the container to full height of the viewport */
}
</style>
