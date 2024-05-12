import { SITE_MAP } from "@models/constants"
import type { SiteMap, SiteMapItem } from "@models/interfaces/SiteMap"

export const getSiteMap = (): SiteMap => SITE_MAP

const traverseSiteMap = (
  siteMap: SiteMap | undefined,
  keys: string[],
  fullPath?: string,
): SiteMapItem | undefined => {
  const _fullPath = fullPath ?? keys.join("/")
  const key = keys.shift()
  if (key === undefined) return undefined
  const directory = siteMap?.[key]
  if (directory === undefined) return undefined
  if (directory.path === _fullPath) return directory
  return traverseSiteMap(directory.subPages, keys, _fullPath)
}

export const getSiteMapItem = (pathname: string) => {
  const keys = pathname.split("/").filter(key => key.length > 0)
  const siteMap = getSiteMap()
  return traverseSiteMap(siteMap, keys.length ? keys : ["home"], pathname)
}
