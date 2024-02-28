import type {SidebarItem} from "./sidebar";

import {Chip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import TeamAvatar from "./team-avatar";

export const items: SidebarItem[] = [
  {
    key: "home",
    href: "/home",
    icon: "solar:home-2-linear",
    title: "Home",
  },
  {
    key: "projects",
    href: "/projects",
    icon: "solar:widget-2-outline",
    title: "Projects",
    endContent: (
      <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    ),
  },
  {
    key: "tasks",
    href: "/tasks",
    icon: "solar:checklist-minimalistic-outline",
    title: "Tasks",
    endContent: (
      <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    ),
  },
  {
    key: "team",
    href: "/team",
    icon: "solar:users-group-two-rounded-outline",
    title: "Team",
  },
  {
    key: "tracker",
    href: "/tracker",
    icon: "solar:sort-by-time-linear",
    title: "Tracker",
    endContent: (
      <Chip size="sm" variant="flat">
        New
      </Chip>
    ),
  },
  {
    key: "analytics",
    href: "/analytics",
    icon: "solar:chart-outline",
    title: "Analytics",
  },
  {
    key: "perks",
    href: "/perks",
    icon: "solar:gift-linear",
    title: "Perks",
    endContent: (
      <Chip size="sm" variant="flat">
        3
      </Chip>
    ),
  },
  {
    key: "expenses",
    href: "/expenses",
    icon: "solar:bill-list-outline",
    title: "Expenses",
  },
  {
    key: "settings",
    href: "/settings",
    icon: "solar:settings-outline",
    title: "Settings",
  },
];

export const sectionItems: SidebarItem[] = [
  {
    key: "overview",
    title: "Overview",
    items: [
      {
        key: "home",
        href: "/home",
        icon: "solar:home-2-linear",
        title: "Home",
      },
      {
        key: "projects",
        href: "/projects",
        icon: "solar:widget-2-outline",
        title: "Projects",
        endContent: (
          <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
        ),
      },
      {
        key: "tasks",
        href: "/tasks",
        icon: "solar:checklist-minimalistic-outline",
        title: "Tasks",
        endContent: (
          <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
        ),
      },
      {
        key: "team",
        href: "/team",
        icon: "solar:users-group-two-rounded-outline",
        title: "Team",
      },
      {
        key: "tracker",
        href: "/tracker",
        icon: "solar:sort-by-time-linear",
        title: "Tracker",
        endContent: (
          <Chip size="sm" variant="flat">
            New
          </Chip>
        ),
      },
    ],
  },
  {
    key: "organization",
    title: "Organization",
    items: [
      {
        key: "cap_table",
        href: "/cap_table",
        title: "Cap Table",
        icon: "solar:pie-chart-2-outline",
        items: [
          {
            key: "shareholders",
            href: "/cap_table=shareholders",
            title: "Shareholders",
          },
          {
            key: "note_holders",
            href: "/cap_table=note_holders",
            title: "Note Holders",
          },
          {
            key: "transactions_log",
            href: "/cap_table=transactions_log",
            title: "Transactions Log",
          },
        ],
      },
      {
        key: "analytics",
        href: "/analytics",
        icon: "solar:chart-outline",
        title: "Analytics",
      },
      {
        key: "perks",
        href: "/perks",
        icon: "solar:gift-linear",
        title: "Perks",
        endContent: (
          <Chip size="sm" variant="flat">
            3
          </Chip>
        ),
      },
      {
        key: "expenses",
        href: "/expenses",
        icon: "solar:bill-list-outline",
        title: "Expenses",
      },
      {
        key: "settings",
        href: "/settings",
        icon: "solar:settings-outline",
        title: "Settings",
      },
    ],
  },
];

export const sectionItemsWithTeams: SidebarItem[] = [
  ...sectionItems,
  {
    key: "your-teams",
    title: "Your Teams",
    items: [
      {
        key: "nextui",
        href: "/nextui",
        title: "NextUI",
        startContent: <TeamAvatar name="Next UI" />,
      },
      {
        key: "tailwind-variants",
        href: "/tailwind-variants",
        title: "Tailwind Variants",
        startContent: <TeamAvatar name="Tailwind Variants" />,
      },
      {
        key: "nextui-pro",
        href: "/nextui-pro",
        title: "NextUI Pro",
        startContent: <TeamAvatar name="NextUI Pro" />,
      },
    ],
  },
];

export const brandItems: SidebarItem[] = [
  {
    key: "overview",
    title: "Overview",
    items: [
      {
        key: "home",
        href: "/home",
        icon: "solar:home-2-linear",
        title: "Home",
      },
      {
        key: "projects",
        href: "/projects",
        icon: "solar:widget-2-outline",
        title: "Projects",
        endContent: (
          <Icon
            className="text-primary-foreground/60"
            icon="solar:add-circle-line-duotone"
            width={24}
          />
        ),
      },
      {
        key: "tasks",
        href: "/tasks",
        icon: "solar:checklist-minimalistic-outline",
        title: "Tasks",
        endContent: (
          <Icon
            className="text-primary-foreground/60"
            icon="solar:add-circle-line-duotone"
            width={24}
          />
        ),
      },
      {
        key: "team",
        href: "/team",
        icon: "solar:users-group-two-rounded-outline",
        title: "Team",
      },
      {
        key: "tracker",
        href: "/tracker",
        icon: "solar:sort-by-time-linear",
        title: "Tracker",
        endContent: (
          <Chip className="bg-primary-foreground font-medium text-primary" size="sm" variant="flat">
            New
          </Chip>
        ),
      },
    ],
  },
  {
    key: "your-teams",
    title: "Your Teams",
    items: [
      {
        key: "nextui",
        href: "/nextui",
        title: "NextUI",
        startContent: (
          <TeamAvatar
            classNames={{
              base: "border-1 border-primary-foreground/20",
              name: "text-primary-foreground/80",
            }}
            name="Next UI"
          />
        ),
      },
      {
        key: "tailwind-variants",
        href: "/tailwind-variants",
        title: "Tailwind Variants",
        startContent: (
          <TeamAvatar
            classNames={{
              base: "border-1 border-primary-foreground/20",
              name: "text-primary-foreground/80",
            }}
            name="Tailwind Variants"
          />
        ),
      },
      {
        key: "nextui-pro",
        href: "/nextui-pro",
        title: "NextUI Pro",
        startContent: (
          <TeamAvatar
            classNames={{
              base: "border-1 border-primary-foreground/20",
              name: "text-primary-foreground/80",
            }}
            name="NextUI Pro"
          />
        ),
      },
    ],
  },
];

export const sectionLongList: SidebarItem[] = [
  ...sectionItems,
  {
    key: "payments",
    title: "Payments",
    items: [
      {
        key: "payroll",
        href: "/payroll",
        title: "Payroll",
        icon: "solar:dollar-minimalistic-linear",
      },
      {
        key: "invoices",
        href: "/invoices",
        title: "Invoices",
        icon: "solar:file-text-linear",
      },
      {
        key: "billing",
        href: "/billing",
        title: "Billing",
        icon: "solar:card-outline",
      },
      {
        key: "payment-methods",
        href: "/payment-methods",
        title: "Payment Methods",
        icon: "solar:wallet-money-outline",
      },
      {
        key: "payouts",
        href: "/payouts",
        title: "Payouts",
        icon: "solar:card-transfer-outline",
      },
    ],
  },
  {
    key: "your-teams",
    title: "Your Teams",
    items: [
      {
        key: "nextui",
        href: "/nextui",
        title: "NextUI",
        startContent: <TeamAvatar name="Next UI" />,
      },
      {
        key: "tailwind-variants",
        href: "/tailwind-variants",
        title: "Tailwind Variants",
        startContent: <TeamAvatar name="Tailwind Variants" />,
      },
      {
        key: "nextui-pro",
        href: "/nextui-pro",
        title: "NextUI Pro",
        startContent: <TeamAvatar name="NextUI Pro" />,
      },
    ],
  },
];
