import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const informationDirectory = path.join(process.cwd(), 'information');

export const getInformationData = () => {
    // Get file names under /information
    const fileNames = fs.readdirSync(informationDirectory);
    return fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(informationDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the information metadata section
        const matterResult = matter(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
}