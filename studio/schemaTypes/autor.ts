import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons/User'
import CircularPhotoPreview from '../components/CircularPhotoPreview'

export const autor = defineType({
  name: 'autor',
  title: 'Autor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      description:
        'Após subir a imagem, clique nela e use a opção de recorte/hotspot para centralizar o rosto. A foto aparece em formato redondo na matéria.',
      options: {hotspot: true},
      components: {
        field: CircularPhotoPreview,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Descreva a foto para leitores de tela e SEO',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      description: 'Opcional. Ex.: "Consultor de Consórcio"',
    }),
    defineField({
      name: 'bio',
      title: 'Bio curta',
      type: 'text',
      rows: 3,
      description: 'Opcional. Breve descrição do autor.',
    }),
  ],
  preview: {
    select: {
      title: 'nome',
      subtitle: 'cargo',
      media: 'foto',
    },
  },
})
