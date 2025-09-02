import { user_role } from "@/constant/role";
import { DrawerItem, USER_ROLE } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  AdminPanelSettingsIcon,
  ManageAccountsIcon,
  PersonAddAlt1Icon,
  AddBusinessIcon,
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
              title: "Create Admin",
              path: `/dashboard/${role}/create-admin`,
              icon: PersonAddAlt1Icon,
            },
            {
              title: "Create Vendor",
              path: `/dashboard/${role}/create-vendor`,
              icon: AddBusinessIcon,
            },
          ],
        }
      );
      break;
    case user_role.VENDOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Vendor",
          path: `${role}`,
          icon: DashboardIcon,
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
