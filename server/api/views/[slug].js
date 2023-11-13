const views = [
  {
    id: 0,
    slug: 'home',
    type: 'CUSTOM',
    params: {
      widgets: [
        {
          type: 'SUMMARY',
        },
        {
          type: 'YEARLY_EXPENSES_VS_REVENUES',
        },
      ]
    },
  },
  {
    id: 1,
    slug: 'expenses',
    type: 'TABLE',
    params: {
      columns: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'price',
          label: 'Price',
          type: 'price',
        },
        {
          name: 'date',
          label: 'Date',
          type: 'date',
          auto: 'now',
        },
      ],
      data: {
        type: 'FETCH',
        path: '/api/expenses',
      },
    },
  },
  {
    id: 2,
    slug: 'revenues',
    type: 'TABLE',
    params: {
      columns: [
        {
          name: 'category',
          label: 'Category',
          type: 'select',
          options: [
            {
              name: 'food',
              label: 'Food',
            },
            {
              name: 'chemistry',
              label: 'Chemistry',
            },
          ],
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'price',
          label: 'Price',
          type: 'price',
        },
        {
          name: 'date',
          label: 'Date',
          type: 'date',
          auto: 'now',
        },
      ],
      data: {
        type: 'FETCH',
        path: '/api/revenues',
      },
    },
  },
];

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const view = views.find(view => slug === view.slug);

  if (view) {
    return view;
  }

  throw createError({
    statusCode: 404,
  })
});
