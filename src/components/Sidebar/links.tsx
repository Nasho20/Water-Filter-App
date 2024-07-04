import {
  // DashboardIcon,
  DashboardIconNew,
  WarehouseIcon,
  ProductsIcon,
  OrderIconNew,
  ClientsIcon,
  AnalyticsIcon,
  FinanceIcon,
} from "../../assets";

// import { i18n } from "@lingui/core";

export type Link = {
  path: string;
  icon: React.ReactNode;
  name: string;
  type: "select" | "link";
};

export const adminLinks: Link[] = [
  {
    path: "/admin/dashboard",
    icon: <DashboardIconNew />,
    name: "Dashboard",
    type: "link",
  },
  {
    path: "/admin/warehouse",
    icon: <WarehouseIcon />,
    name: "Warehouse",
    type: "link",
  },
  {
    path: "/admin/products",
    icon: <ProductsIcon />,
    name: "Products",
    type: "link",
  },
  {
    path: "/admin/orders",
    icon: <OrderIconNew color="#fff" />,
    name: "Orders",
    type: "link",
  },
  {
    path: "/admin/clients",
    icon: <ClientsIcon />,
    name: "Clients",
    type: "link",
  },
  {
    path: "/admin/analytics",
    icon: <AnalyticsIcon />,
    name: "Analytics",
    type: "link",
  },
  {
    path: "/admin/finance",
    icon: <FinanceIcon />,
    name: "Finance",
    type: "link",
  },
];
