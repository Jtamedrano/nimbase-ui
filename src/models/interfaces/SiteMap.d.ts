export type SiteMap = Record<string, SiteMapItem>

export interface SiteMapItem {
  title: string
  path: string
  description: string
  subPages?: SiteMap
}
