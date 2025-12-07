'use server'

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function addArticle(prevState: unknown, formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const date = formData.get('date') as string;
        const category = formData.get('category') as string;
        const excerpt = formData.get('excerpt') as string;
        const content = formData.get('content') as string;

        if (!title || !date || !category || !excerpt || !content) {
            return { message: 'All fields are required', success: false };
        }

        // Define path to the JSON file
        const filePath = path.join(process.cwd(), 'src', 'data', 'articles.json');

        // Read existing data
        const fileData = await fs.readFile(filePath, 'utf8');
        const articles = JSON.parse(fileData);

        // Create new article object
        const newArticle = {
            id: (articles.length + 1).toString(),
            title,
            excerpt,
            date, // In a real app, you might want to format this date
            category,
            content
        };

        // Add to array
        articles.push(newArticle);

        // Write back to file
        await fs.writeFile(filePath, JSON.stringify(articles, null, 4));

        // Revalidate the news page so the new article shows up immediately
        revalidatePath('/news');

        return { message: 'Article published successfully!', success: true };
    } catch (error) {
        console.error('Failed to add article:', error);
        return { message: 'Failed to publish article. Check server logs.', success: false };
    }
}
