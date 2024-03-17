<template>
  <!-- **** View heading **** -->
  <view-header>
    <template #pageTitle>
      <span>Employees Page</span>
    </template>
    <template #pageDescription>
      <span>See and manipulate all your Employees data </span>
    </template>
  </view-header>
  <div class="q-pa-md">
    <!-- **** Actions **** -->
    <div class="tw-flex tw-justify-end tw-mb-4 tw-mt-4">
      <!-- Search Input -->
      <q-input
        v-model="searchTerm"
        outlined
        placeholder="Search"
        dense
        class="tw-mr-2"
      />

      <!-- Filter Select -->
      <q-select
        :label="'Filter by product name'"
        transition-show="jump-up"
        transition-hide="jump-up"
        filled
        v-model="model"
        :options="['Product name', 'employees', 'catagory']"
        style="width: 250px"
        dense
      />

      <!-- Add Product Button -->
      <q-btn
        class="tw-ml-2 tw-whitespace-nowrap"
        color="primary"
        icon="add"
        label="Add Product"
      />
    </div>
    <!-- **** END ACTIONS **** -->
    <q-table
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      color="blue-1"
      no-data-label="I didn't find anything for you"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            class="tw-mx-2"
            color="secondary"
            icon="mode_edit"
            @click="onEdit(props.row)"
          >
            <q-tooltip class="!tw-bg-blue-400">
              Edit Inventory
            </q-tooltip></q-btn
          >
          <q-btn
            dense
            color="negative"
            icon="delete"
            @click="onDelete(props.row)"
            ><q-tooltip class="!tw-bg-red-400">
              Delete Inventory
            </q-tooltip></q-btn
          >
        </q-td>
      </template></q-table
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ProductColumnType } from "../types/entityTypes.ts";
import { ProductRowType } from "../types/entityTypes.ts";
import ViewHeader from "../components/ViewHeader.vue";

const searchTerm = ref<string>("");
const model = ref<string>("");
function onEdit(props: number) {
  console.log(props);
}
function onDelete(props: number) {
  console.log(props);
}
const columns: ProductColumnType[] = [
  {
    name: "productId",
    label: "Product ID",
    field: (row) => row.productId,
    align: "center",
  },
  {
    name: "productName",
    label: "Product Name",
    field: (row) => row.productName,
    align: "center",
  },
  {
    name: "catagory",
    label: "Catagory",
    field: (row) => row.catagory,
    align: "left",
  },
  {
    name: "desc",
    label: "Description",
    field: (row) => row.desc,
    align: "left",
  },
  {
    name: "productCondition",
    label: "Product Condition",
    field: (row) => row.productCondition,
    align: "center",
  },
  {
    name: "actions",
    label: "Actions",
    field: (row) => row,
    align: "center",
  },
];

const rows: ProductRowType[] = [
  {
    productId: 1,
    productName: "Moniter",
    catagory: "Electronics",
    desc: "bla bla bla bla bla bla ..etc",
    productCondition: 5,
  },
  {
    productId: 2,
    productName: "Moniter",
    catagory: "Electronics",
    desc: "bla bla bla bla bla bla ..etc",
    productCondition: 4,
  },
  {
    productId: 3,
    productName: "Moniter",
    catagory: "Electronics",
    desc: "bla bla bla bla bla bla ..etc",
    productCondition: 3,
  },
  {
    productId: 4,
    productName: "Moniter",
    catagory: "Electronics",
    desc: "bla bla bla bla bla bla ..etc",
    productCondition: 2,
  },
  {
    productId: 5,
    productName: "Moniter",
    catagory: "Electronics",
    desc: "bla bla bla bla bla bla ..etc",
    productCondition: 3,
  },
];
</script>
