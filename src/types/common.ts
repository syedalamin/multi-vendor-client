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