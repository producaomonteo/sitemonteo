import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {ptBRLocale} from '@sanity/locale-pt-br'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'blog Monteo',

  projectId: '5ved96b8',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), ptBRLocale()],

  schema: {
    types: schemaTypes,
  },
})
