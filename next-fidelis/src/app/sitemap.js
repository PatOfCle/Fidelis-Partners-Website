// TODO--- include images in sitemap urls. Check out Die Matic's sitemap from Yoast SEO (in downloads as "XML Sitemap2.xml")


import { svModules } from './solutions/sv-erp/ERPModulesData';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import client from './blog/client';

const readdirAsync = promisify(fs.readdir);
const statAsync = promisify(fs.stat);

export default async function sitemap() {
    const routeList = [
        ['/', , , 1.0],
    ];

    var specificDate = new Date(2023, 11, 21);

    async function scanDirectory(directoryPath) {

        try {
            const files = await readdirAsync(directoryPath);

            for (const file of files) {
                const filePath = path.join(directoryPath, file);
                const stats = await statAsync(filePath);

                if (stats.isDirectory()) {
                    if (filePath.endsWith(']')) {
                        continue; // Skip directories ending with ']'
                    } else {
                        const subFiles = await readdirAsync(filePath);
                        if (subFiles.includes('page.js')) {
                            routeList.push( [filePath.substring(7), new Date(specificDate), 'monthly', 0.6] );
                            // console.log(routeList);
                        }
                        await scanDirectory(filePath);
                    }
                } else {
                    // Perform actions on individual files here
                }
            }
        } catch (err) {
            console.error(err);
        }
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
                    slug
                }`
            );
            // console.log(response)
            response.forEach((post) => {
                routeList.push(['/blog/'+post.slug.current, post.publishedAt, 'monthly', 0.4])
            })
            // console.log(routeList)
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    const projectPath = './src/app';
    await scanDirectory(projectPath);
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

    // console.log(buildSitemap())
    return buildSitemap()
}
