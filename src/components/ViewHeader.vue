<template>
  <div class="tw-bg-primary tw-text-slate-900 tw-p-4 tw-shadow-md">
    <h1 class="tw-text-2xl"><slot name="pageTitle">View Header</slot></h1>
    <p class="tw-text-lg tw-mt-2">
      <slot name="pageDesc"> Short description for the page... </slot>
    </p>
  </div>
</template>
