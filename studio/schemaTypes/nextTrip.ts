import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nextTrip',
  title: 'Next Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'departureDate',
      title: 'Departure Date',
      type: 'datetime',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
    }),
    defineField({
      name: 'carouselSlides',
      title: 'Carousel Slides',
      type: 'array',
      of: [{type: 'slide'}],
    }),
  ],
})
