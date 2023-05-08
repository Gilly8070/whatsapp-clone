import { getAllPages } from '../utils/test';
const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res, req }) => {
    const BASE_URL = process?.env?.NODE_ENV === 'development' ? 'http://localhost:5004' : 'https://test.lineupx.com';


    const pages = await getAllPages();

    let remove = [
        "api",
        "product",
        "/_app.js",
        "_app.jsx",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
        "/_sites",
        "/index.js",
        "/",
        "/["
    ];
    const staticPaths =
        pages
            .filter((staticPage) =>
                !remove.includes(staticPage)
            )

    let removedStatic = staticPaths.filter((staticPage) => !staticPage.includes('.') && !staticPage.includes('/[') && !staticPage.includes('/_') && !staticPage.includes('/api') && !staticPage.includes('/index') && !staticPage.includes('.js') && !staticPage.includes('.jsx'))

    let static2 =
        removedStatic.map((staticPagePath) => {
            return `${BASE_URL}${staticPagePath}`;
        })

    console.log(staticPaths, 'console.log', 'pages');


    let dynamic1 = [`${BASE_URL}/product/1`, `${BASE_URL}/product/2`];



    const allPaths = [...static2, ...dynamic1];

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