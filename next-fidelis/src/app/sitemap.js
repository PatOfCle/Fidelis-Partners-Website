// TODO--- include images in sitemap urls. Check out Die Matic's sitemap from Yoast SEO (in downloads as "XML Sitemap2.xml")


import { svModules } from './solutions/sv-erp/ERPModulesData';
import client from './blog/client';

export const dynamic = 'force-dynamic'
// export const revalidate = 0

const routesToHide = {
    "":"",
    "":"",
    
}

export default async function sitemap() {

    const routeList = [
        ['/', , , 1.0],
    ];
    const staticRoutes = require('./staticRouteList.json');
    var specificDate = staticRoutes[0][1];

    function addStaticPaths() {
        staticRoutes.forEach((route) => {
            routeList.push([route[0], route[1], 'monthly', 0.6]);
        });
    }

    function addModules() {
        svModules.forEach((mod) => {
            routeList.push(['/solutions/sv-erp/' + mod.moduleSlug, specificDate, 'monthly', 0.5]);
        });
    }

    const fetchBlogPosts = async () => {
        try {
            const response = await client.fetch(
                `*[_type == "post"] | order(_createdAt desc) {
                    title,
                    publishedAt,
                    _updatedAt,
                    slug
                }`
            );
            // console.log(response)
            response.forEach((post) => {
                routeList.push(['/blog/'+post.slug.current, post._updatedAt, 'monthly', 0.4])
            })
            // console.log(routeList)
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    const projectPath = './src/app';
    addStaticPaths();
    addModules();
    await fetchBlogPosts();


    function buildSitemap() {
        const sitemapObjects = []
        routeList.forEach((route) => {
            sitemapObjects.push(
                {
                    url: 'https://www.fidelis-partners.com'+route[0],
                    // lastModified: new Date(),
                    lastModified: route[1],
                    // changeFrequency: route[2],
                    // changeFrequency: 'weekly',
                    // priority: route[3]
                }
            )
        })

        return sitemapObjects
    }

    return buildSitemap()
}
