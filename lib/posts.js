import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(),'public', 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName;

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName,'index.mdx');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      readTime: readingTime(fileContents).text
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}