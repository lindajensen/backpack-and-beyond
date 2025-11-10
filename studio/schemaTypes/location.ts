import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      type: 'reference',
      to: [{type: 'city'}],
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'name', maxLength: 96},
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Attraction', value: 'attraction'},
          {title: 'Restaurant', value: 'restaurant'},
          {title: 'Café', value: 'cafe'},
          {title: 'Bar', value: 'bar'},
          {title: 'Museum', value: 'museum'},
          {title: 'Park', value: 'park'},
          {title: 'Hotel', value: 'hotel'},
          {title: 'Shopping', value: 'shopping'},
          {title: 'Beach', value: 'beach'},
          {title: 'Transport', value: 'transport'},
        ],
      },
    }),
    defineField({name: 'address', type: 'string', title: 'Address'}),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO',
        },
      ],
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
  ],
})
