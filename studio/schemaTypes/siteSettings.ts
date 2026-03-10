import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'text',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA link',
      type: 'url',
    }),
  ],
})
