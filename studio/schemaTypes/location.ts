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
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
  ],
})
