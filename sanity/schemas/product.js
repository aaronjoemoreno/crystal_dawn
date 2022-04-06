export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'snippet',
      title: 'Description Snippet',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
    {
      name: 'cost',
      title: 'Cost',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link to Buy Item',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'isSold',
      title: 'Item Sold',
      type: 'boolean'
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
