export const navbarData = [
  {
    routeLink: "dashboard",
    icon: "fal, fa-home",
    label: "Dashboard",
    children:[]
  },
  {
    routeLink: "products",
    icon: "fal, fa-home",
    label: "Products",
    children: [
      {
        routeLink: "productone",
        label: "Product 1"
      },
      {
        routeLink: "producttwo",
        label: "Product 2"
      }
    ],
  },

  {
    routeLink: "settings",
    icon: "fal, fa-home",
    label: "Settings",
    children:[]
  },
];
