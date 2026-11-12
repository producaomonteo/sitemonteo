import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5ved96b8',
    dataset: 'production'
  },
  studioHost: 'monteo',
  deployment: {
    appId: 'pcgve1gty1m3khuq08gye04v',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
