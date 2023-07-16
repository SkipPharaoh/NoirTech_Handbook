const PropData = [
  {
    name: "prop1",
    type: "string",
    defaultValue: "default1",
    description: "This is the first property.",
  },
  {
    name: "prop2",
    type: "number",
    defaultValue: "0",
    description: "This is the second property.",
  },
  {
    name: "prop3",
    type: "boolean",
    defaultValue: "false",
    description: "This is the third property.",
  },
];

const CardData = [
  {
    title: "Caching Tasks",
    cta: "Read More",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    backGroundColor: "white",
    titleColor: "secondary",
  },
  {
    title: "Running Tasks",
    cta: "Read More",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    backGroundColor: "zinc",
    titleColor: "white",
  },
  {
    title: "Configuration Options",
    cta: "Read More",
    href: "https://turbo.build/repo/docs/reference/configuration",
    backGroundColor: "secondary",
    titleColor: "primary",
  },
];

const TableData = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

export { PropData, CardData, TableData };
