

export default defineEventHandler((event) => {
  return {
    sidebarMenu: [
      {
        to: '/',
        icon: 'HOME',
        label: 'Home',
      },
      {
        to: '/reports',
        icon: 'TRENDING_UP',
        label: 'Reports',
        premium: true,
        // subMenu: [
        //   {
        //     to: '/reports/monthly',
        //     label: 'Monthly',
        //   }
        // ]
      },
      {
        to: '/revenues',
        icon: 'ACCOUNT_BALANCE',
        label: 'Revenues',
      },
      {
        to: '/expenses',
        icon: 'PAYMENTS',
        label: 'Expenses',
      },
      {
        to: '/savings',
        icon: 'SAVINGS',
        label: 'Savings',
      },
    ],
    premiumExpiryNotification: 604800,
  };
});
