import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location name',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Place Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'onGoogleMaps',
      title: 'Google Maps Link',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),

  ],
})
