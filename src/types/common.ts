import { user_role } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
/* eslint-disable @typescript-eslint/no-explicit-any */
export type IMeta = {
  page: number;
  limit: number;
  total: number;
};
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type GetResponse = {
  success: boolean;
  message: string;
  meta?: IMeta;
  data?: any;
};

export type USER_ROLE = keyof typeof user_role;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  child?: DrawerItem[];
}


export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  isDeleted: boolean;
  subCategory: Category[];
}



export enum ProductStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DISCONTINUED = "DISCONTINUED",
}

export type Product = {
  id: string;
  name: string;
  sku: string;
  description: string;
  productImages: string[];
  slug: string;
  price: number;
  stock: number;
  discount: number;
  status: ProductStatus;
  rating: number;
  averageRating: number;
  sellerId: string;
  subCategoryId: string;
  createdAt: Date;
  updatedAt: Date;
  subCategory: {
    name: string;
    slug: string;
  };
};


export type ProductPageProps = {
  searchParams: { page?: number; limit?: number };
};
