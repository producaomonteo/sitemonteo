import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

const slugifyPtBr = (input: string): string =>
  input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 96)

export const noticia = defineType({
  name: 'noticia',
  title: 'Notícia',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'conteudo', title: 'Conteúdo', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      group: 'conteudo',
      validation: (rule) =>
        rule
          .required()
          .max(70)
          .warning('Títulos acima de 70 caracteres podem ser cortados no Google'),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      group: 'conteudo',
      description: 'Clique em Generate. Não altere depois de publicado.',
      options: {
        source: 'titulo',
        maxLength: 96,
        slugify: slugifyPtBr,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      group: 'conteudo',
      description: 'Aparece na listagem e no Google',
      validation: (rule) =>
        rule
          .required()
          .max(160)
          .warning('Resumos acima de 160 caracteres podem ser cortados no Google'),
    }),
    defineField({
      name: 'capa',
      title: 'Capa',
      type: 'image',
      group: 'conteudo',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Descreva a imagem para leitores de tela e SEO',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'legenda',
          title: 'Legenda da capa',
          type: 'string',
          description: 'Opcional. Aparece abaixo da imagem na matéria.',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      group: 'conteudo',
      options: {
        list: [
          {title: 'Mercado e Economia', value: 'mercado'},
          {title: 'Guias de Consórcio', value: 'guias'},
          {title: 'Novidades Monteo', value: 'monteo'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicadoEm',
      title: 'Publicado em',
      type: 'datetime',
      group: 'conteudo',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destaque',
      title: 'Destacar na home',
      type: 'boolean',
      group: 'conteudo',
      description: 'Aparece em primeiro lugar na home. Marque apenas uma notícia por vez.',
      initialValue: false,
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'reference',
      to: [{type: 'autor'}],
      group: 'conteudo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'corpo',
      title: 'Corpo',
      type: 'array',
      group: 'conteudo',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Parágrafo', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Citação', value: 'blockquote'},
          ],
          lists: [
            {title: 'Lista', value: 'bullet'},
            {title: 'Numerada', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'strong'},
              {title: 'Itálico', value: 'em'},
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'legenda',
              title: 'Legenda',
              type: 'string',
            }),
          ],
        }),
        defineArrayMember({
          name: 'caixaDestaque',
          type: 'object',
          title: 'Caixa de destaque',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Título',
              type: 'string',
              description: 'Opcional. Ex.: "Em resumo"',
            }),
            defineField({
              name: 'itens',
              title: 'Itens',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
              description: 'Um item por linha. Ideal entre 3 e 5.',
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              titulo: 'titulo',
              itens: 'itens',
            },
            prepare({titulo, itens}) {
              const count = Array.isArray(itens) ? itens.length : 0
              return {
                title: titulo || 'Caixa de destaque',
                subtitle: `${count} ${count === 1 ? 'item' : 'itens'}`,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Se vazio, usa o título',
      validation: (rule) =>
        rule
          .max(70)
          .warning('Meta titles acima de 70 caracteres podem ser cortados no Google'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Se vazio, usa o resumo',
      validation: (rule) =>
        rule
          .max(160)
          .warning('Meta descriptions acima de 160 caracteres podem ser cortadas no Google'),
    }),
  ],
  orderings: [
    {
      title: 'Mais recentes primeiro',
      name: 'publicadoEmDesc',
      by: [{field: 'publicadoEm', direction: 'desc'}],
    },
    {
      title: 'Mais antigas primeiro',
      name: 'publicadoEmAsc',
      by: [{field: 'publicadoEm', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      publicadoEm: 'publicadoEm',
      media: 'capa',
    },
    prepare({title, publicadoEm, media}) {
      const data = publicadoEm
        ? new Date(publicadoEm).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : 'Sem data'
      return {
        title: title ?? 'Sem título',
        subtitle: data,
        media,
      }
    },
  },
})
