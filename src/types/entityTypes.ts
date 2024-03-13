export interface AuthInput {
  email: { value: string; valid: boolean };
  password: { value: string; valid: boolean };
}
export interface ProductRowType {
  productId: number;
  productName: string;
  catagory: string;
  desc: string;
  productCondition: number;
}
export interface ProductColumnType {
  name: string;
  label: string;
  field: (row: ProductRowType) => any;
  align: "center" | "left" | "right";
}
