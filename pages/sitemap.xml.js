// import * as fs from "fs";
// import http from '../services/httpService'
import path from 'path';
// import { promises as fs } from 'fs';
import { getAllPages } from '../utils/test'; // Create a utility function to fetch all pages in your project

// import { globby } from 'globby';
// import prettier from 'prettier';
const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res, req }) => {
    const BASE_URL = process?.env?.NODE_ENV === 'development' ? 'http://localhost:5004' : 'https://test.lineupx.com';

    // const jsonDirectory = path.join(process.cwd(), '/');
    const hostname = req?.headers?.host; // http://gicenlineupxlineuply.localhost:5004


    const pages = await getAllPages();

    // let updatePage = pages?.map(el => )

    const currentHost =
        process.env.NODE_ENV === "production"
            ?
            hostname?.replace(`.lineuply.com`, "") // PUT YOUR DOMAIN HERE
            :
            hostname?.replace(`.localhost:5004`, "");


    const staticPaths =
        pages
            .filter((staticPage) => {
                return ![
                    "api",
                    "product",
                    "_app.js",
                    "_app.jsx",
                    "_document.js",
                    "404.js",
                    "sitemap.xml.js",
                    "_sites",
                    "index.js",
                ].includes(staticPage);
            })
            .map((staticPagePath) => {
                return `${BASE_URL}${staticPagePath}`;
            })
    // :

    // const BASE_DIR = process.env.NODE_ENV === "production" ? jsonDirectory : jsonDirectory;

    // const staticPaths =
    //     fs
    //         .readdirSync(BASE_DIR)
    //         .filter((staticPage) => {
    //             return ![
    //                 "api",
    //                 "product",
    //                 "_app.js",
    //                 "_app.jsx",
    //                 "_document.js",
    //                 "404.js",
    //                 "sitemap.xml.js",
    //                 "_sites",
    //                 "index.js",
    //             ].includes(staticPage);
    //         })
    //         .map((staticPagePath) => {
    //             return `${BASE_URL}/${staticPagePath}`;
    //         })
    // :
    // fs
    //     .readdirSync(`${BASE_DIR}/_sites/[site]`)
    //     .filter((staticPage) => {
    //         return ![
    //             "api",
    //             "product",
    //             "_app.js",
    //             "_app.jsx",
    //             "_document.js",
    //             "404.js",
    //             "sitemap.xml.js",
    //             "job",
    //             "detail",
    //             "index.js",
    //             "blog",
    //         ].includes(staticPage);
    //     })
    //     .map((staticPagePath) => {
    //         return `${hostname}/${staticPagePath}`;
    //     })


    // [`${hostname}/jobs`, `${hostname}/companies`, `${hostname}/blogs`, `${hostname}/pricing`]



    console.log('console.log', 'res', 'from local 2222', hostname, currentHost, process.env.NODE_ENV);


    let dynamic1 = [`${BASE_URL}/product/1`, `${BASE_URL}/product/2`];


    // const dynamicPaths = 


    // [...jobsDynamic, ...companiesDynamic, ...blogsDynamic]


    const allPaths = [...staticPaths, ...dynamic1];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
            .map((url) => {
                return `
                <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
                </url>
            `;
            })
            .join("")}
        </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;