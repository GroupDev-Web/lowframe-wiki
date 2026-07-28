import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // Put pages above folders
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? 1 : -1
    }

    // Sort pages alphabetically and folders alphabetically
    return (a.displayName ?? "").localeCompare(b.displayName ?? "", undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()
