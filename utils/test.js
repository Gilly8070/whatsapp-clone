import fs from 'fs';
import path from 'path';

export function getAllPages() {
    const pagesDirectory = path.join(process.cwd(), 'pages/_sites/[site]');
    const pageFiles = getAllFiles(pagesDirectory, '.js');
    const pages = pageFiles.map((file) => {
        const relativePath = path?.relative(pagesDirectory, file);
        const pagePath = `/${path.join(path.dirname(relativePath), path.basename(relativePath, '.js'))}`;
        return pagePath === '/index' ? '/' : pagePath;
    });
    return pages;
}

// Utility function to get all files recursively in a directory
function getAllFiles(dirPath, ext) {
    const files = fs?.readdirSync(dirPath);
    let allFiles = [];

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stat = fs?.statSync(filePath);

        if (stat.isDirectory()) {
            const nestedFiles = getAllFiles(filePath, ext);
            allFiles = allFiles.concat(nestedFiles);
        } else if (path.extname(file) === ext) {
            allFiles.push(filePath);
        }
    });

    return allFiles;
}
