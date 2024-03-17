export interface AuthInput {
  email: { value: string; valid: boolean };
  password: { value: string; valid: boolean };
}
export interface ProductType {
  productId: number;
  productName: string;
  catagory: string;
  desc: string;
  productCondition: number;
}
export interface InventoryType {
  inventoryId: number;
  employeeName: string;
  department: string;
  productName: string;

  quantity: number;
  dateAdded: string;
}
export interface TableColumn<T> {
  name: string;
  label: string;
  field: (row: T) => any;
  align: "center" | "left" | "right";
}
