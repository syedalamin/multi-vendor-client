import { user_role } from "@/constant/role";
import { DrawerItem, USER_ROLE } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  AdminPanelSettingsIcon,
  ManageAccountsIcon,
  PersonAddAlt1Icon,
  AddBusinessIcon,
  CategoryIcon,
  InventoryIcon,
  StoreIcon,
} from "@/_Icons";
const drawerItems = (role: USER_ROLE): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case user_role.ADMIN:
      roleMenus.push(
        {
          title: "Admin Dashboard",
          path: `/dashboard/${role}`,
          icon: AdminPanelSettingsIcon,
        },
        {
          title: "Manage User",
          icon: ManageAccountsIcon,
          child: [
            {
              title: "Admin",
              path: `/dashboard/${role}/create-admin`,
              icon: PersonAddAlt1Icon,
            },
            {
              title: "Vendor",
              path: `/dashboard/${role}/vendor`,
              icon: AddBusinessIcon,
            },
          ],
        },
        {
          title: "Manage Category",
          icon: CategoryIcon,
          child: [
            {
              title: "Category",
              path: `/dashboard/${role}/category`,
              icon: CategoryIcon,
            },
            {
              title: "Sub Category",
              path: `/dashboard/${role}/sub-category`,
              icon: CategoryIcon,
            },
          ],
        },
        {
          title: "Manage Product",
          icon: StoreIcon,
          child: [
            {
              title: "Product",
              path: `/dashboard/${role}/product`,
              icon: InventoryIcon,
            },
          ],
        },
        // {
        //   title: "All Cart",
        //   path: `/dashboard/${role}/cart`,
        //   icon: AdminPanelSettingsIcon,
        // }
        {
          title: "Order Product",
          path: `/dashboard/${role}/order-product`,
          icon: AdminPanelSettingsIcon,
        }
      );
      break;
    case user_role.VENDOR:
      roleMenus.push(
        {
          title: "Vendor Dashboard",
          path: `/dashboard/${role}`,
          icon: AdminPanelSettingsIcon,
        },
        {
          title: "Manage Category",
          icon: CategoryIcon,
          child: [
            {
              title: "Category",
              path: `/dashboard/${role}/category`,
              icon: CategoryIcon,
            },
            {
              title: "Sub Category",
              path: `/dashboard/${role}/sub-category`,
              icon: CategoryIcon,
            },
          ],
        },
        {
          title: "Manage Product",
          icon: StoreIcon,
          child: [
            {
              title: "Product",
              path: `/dashboard/${role}/product`,
              icon: InventoryIcon,
            },
          ],
        },
        {
          title: "Order Product",
          path: `/dashboard/${role}/order-product`,
          icon: AdminPanelSettingsIcon,
        }
      );
      break;

    default:
      roleMenus.push({
        title: "Dashboard",
        path: `${role}`,
        icon: DashboardIcon,
      });
      break;
  }

  return [...roleMenus];
};

export default drawerItems;
