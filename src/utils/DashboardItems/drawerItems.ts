import { user_role } from "@/constant/role";
import { DrawerItem, USER_ROLE } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";
const drawerItems = (role: USER_ROLE): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case user_role.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Admin",
          path: `${role}`,
          icon: DashboardIcon,
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
