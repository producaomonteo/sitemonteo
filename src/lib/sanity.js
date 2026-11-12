import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: '5ved96b8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlForImage = (source) => builder.image(source)

export const formatDatePtBr = (iso) => {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export const formatDateTimePtBr = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  const data = d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const hora = d.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo',
  }).replace(':', 'h')
  return `${data}, ${hora}`
}

export const CATEGORIA_LABELS = {
  mercado: 'Mercado e Economia',
  guias: 'Guias de Consórcio',
  monteo: 'Novidades Monteo',
}
