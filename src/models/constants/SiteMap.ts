export const SITE_MAP = {
  home: {
    path: "/",
    title: "NimBase",
    description: "NimBase landing page",
    subPages: {},
  },
  u: {
    path: "/u",
    title: "User",
    description: "Secure user page",
    subPages: {
      dashboard: {
        path: "/u/dashboard",
        title: "Dashboard",
        description: "User dashboard",
        subPages: {},
      },
      invoices: {
        path: "/u/invoices",
        title: "Invoices",
        description: "Group invoices",
        subPages: {},
      },
      customers: {
        path: "/u/customers",
        title: "Customers",
        description: "Group customers",
        subPages: {},
      },
    },
  },
}
