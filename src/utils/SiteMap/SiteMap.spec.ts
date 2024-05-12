import { getSiteMap, getSiteMapItem } from "./SiteMapUtils"

describe("SiteMapUtils", () => {
  describe("getSiteMap", () => {
    it("should return the site map", () => {
      expect(getSiteMap()).toBeDefined()
    })
  })

  describe("getSiteMapItem", () => {
    it("should return the site map item for '/'", () => {
      const item = getSiteMapItem("/")
      expect(item?.title).toBe("NimBase")
    })

    it('should return the dashboard site map item for "/u/dashboard"', () => {
      const item = getSiteMapItem("/u/dashboard")
      expect(item?.title).toBe("Dashboard")
    })
  })
})
