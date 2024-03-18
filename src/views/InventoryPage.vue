<template>
  <!-- **** View heading **** -->
  <view-header>
    <template #pageTitle>
      <span>Inventory Page</span>
    </template>
    <template #pageDesc>
      <span>See and manipulate all inventories </span>
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
        color="primary"
        dense
        v-model="model"
        :options="['Product name', 'employees', 'catagory']"
        label="Filter by"
        class="tw-mr-1 tw-w-40"
      >
        <template v-if="model" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop.prevent="model = ''"
            class="cursor-pointer"
          />
        </template>
      </q-select>

      <!-- Add Product Button -->
      <q-btn
        v-if="shouldShowIcon"
        class="tw-ml-2 tw-whitespace-nowrap"
        color="primary"
        icon="add"
        label="Add Inventory"
      />
      <q-btn
        v-else
        class="tw-ml-2 tw-whitespace-nowrap"
        color="primary"
        label="Add Inventory"
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
          <div class="tw-flex tw-gap-1">
            <q-btn
              size="sm"
              dense
              color="positive"
              icon="visibility"
              @click="onDelete(props.row)"
              ><q-tooltip class="!tw-bg-green-400">
                See Detail
              </q-tooltip></q-btn
            >
            <q-btn
              size="sm"
              dense
              color="secondary"
              icon="mode_edit"
              @click="onEdit(props.row)"
            >
              <q-tooltip class="!tw-bg-blue-400">
                Edit Inventory
              </q-tooltip></q-btn
            >
            <q-btn
              size="sm"
              dense
              color="negative"
              icon="delete"
              @click="confirm = true"
              ><q-tooltip class="!tw-bg-red-400">
                Delete Inventory
              </q-tooltip></q-btn
            >
          </div>
        </q-td>
      </template></q-table
    >
  </div>
  <!-- **** Dialog For Delete **** -->
  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-toolbar class="q-pa-md">
        <q-avatar>
          <!-- Icon representing delete action -->
          <q-icon name="delete" color="negative" size="40px" />
        </q-avatar>

        <q-toolbar-title class="q-ml-sm">
          <span class="text-weight-bold">Delete Inventory</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >Are you sure you want to delete this inventory?</span
        >
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Delete" color="red-12" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!-- **** END Dialog For Delete **** -->
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { TableColumn } from "../types/entityTypes.ts";
import { InventoryType } from "../types/entityTypes.ts";
import ViewHeader from "../components/ViewHeader.vue";

const $q = useQuasar();
const confirm = ref<boolean>(false);
const searchTerm = ref<string>("");
const model = ref<string>("");
const shouldShowIcon = computed((): boolean => {
  return !($q.screen.xs || $q.screen.sm);
});
function onEdit(props: number) {
  console.log(props);
}
function onDelete(props: number) {
  console.log(props);
}
const columns: TableColumn<InventoryType>[] = [
  {
    name: "inventoryId",
    label: "Inventory ID",
    field: (row) => row.inventoryId,
    align: "center",
  },
  {
    name: "employeename",
    label: "Employee Name",
    field: (row) => row.employeeName,
    align: "center",
  },
  {
    name: "department",
    label: "Department",
    field: (row) => row.department,
    align: "center",
  },
  {
    name: "productName",
    label: "Product Name",
    field: (row) => row.productName,
    align: "center",
  },
  {
    name: "quantity",
    label: "Quantity",
    field: (row) => row.quantity,
    align: "center",
  },
  {
    name: "dateAdded",
    label: "Date Added",
    field: (row) => row.dateAdded,
    align: "center",
  },
  {
    name: "actions",
    label: "Actions",
    field: (row) => row,
    align: "left",
  },
];

const rows: InventoryType[] = [
  {
    inventoryId: 1,
    employeeName: "Mohammad Zrar",
    department: "IT",
    productName: "Moniter",
    quantity: 1,
    dateAdded: "3/3/2024",
  },
  {
    inventoryId: 1,
    employeeName: "Mohammad Zrar",
    department: "IT",
    productName: "Moniter",
    quantity: 1,
    dateAdded: "3/3/2024",
  },
  {
    inventoryId: 1,
    employeeName: "Mohammad Zrar",
    department: "IT",
    productName: "Moniter",
    quantity: 1,
    dateAdded: "3/3/2024",
  },
  {
    inventoryId: 1,
    employeeName: "Mohammad Zrar",
    department: "IT",
    productName: "Moniter",
    quantity: 1,
    dateAdded: "3/3/2024",
  },
];
</script>
