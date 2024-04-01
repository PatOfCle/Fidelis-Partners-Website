

const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const readdirAsync = promisify(fs.readdir);
const statAsync = promisify(fs.stat);

async function scanDirectory(directoryPath, existingRoutes) {
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
                        // existingRoutes.push([filePath.substring(7), new Date(), 'monthly', 0.6]);
                        existingRoutes.push([filePath.substring(7), new Date(), 'monthly', 0.6]);
                    }
                    await scanDirectory(filePath, existingRoutes);
                }
            } else {
                
            }
        }
    } catch (err) {
        console.error(err);
    }
}

function exportRouteList(routeList) {
    const outputFilePath = path.join(__dirname, 'staticRouteList.json');

    try {
        fs.unlinkSync(outputFilePath);
        console.log('File deleted successfully or does not exist');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.log("Error occurred during file deletion:", error);
        }
    }

    // Proceed to write the new content
    try {
        fs.writeFileSync(outputFilePath, JSON.stringify(routeList, null, 2), { flag: 'w' });
        console.log('Route list has been written to', outputFilePath);
    } catch (err) {
        console.error('Error writing new route list file:', err);
    }
}

async function main() {
    const routeList = [];
    const projectPath = './src/app';

    try {
        await scanDirectory(projectPath, routeList);
        await exportRouteList(routeList);
        console.log('Route list has been populated and exported.');
    } catch (err) {
        console.error('Error:', err);
    }
}


main();
