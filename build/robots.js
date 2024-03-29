const fs = require('fs')

module.exports = (folder) => {
  const robotsFile = 
  `user-agent: *
  
sitemap: https://nerconer.com/Sitemap.xml`

  fs.writeFileSync(`${folder}/robots.txt`, robotsFile)

  const siteMap =
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nerconer.com</loc>
    <lastmod>${new Date().toISOString}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
<urlset>
  `

  fs.writeFileSync(`${folder}/SiteMap.xml`, siteMap)
}