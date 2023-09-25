import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

/**
 * Retrieves and returns an array of published posts.
 *
 * @returns {Promise<Post[]>} The array of published posts.
 */
async function getPosts(): Promise<Post[]> {
	let posts: Post[] = []

	// Get all file paths matching '/src/posts/*.md'
	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	// Iterate through each file path
	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		// Check if the file is an object with metadata and slug
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>

			// Create a post object by merging metadata and slug
			const post: Post = { ...metadata, slug }

			// Check if the post is published and add it to the array
			if (post.published) {
				posts.push(post)
			}
		}
	}

	// Sort the posts array by date in descending order
	posts = posts.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}
/**
 * Retrieves posts using the getPosts function and returns them as JSON.
 * @returns {Promise<Response>} A promise that resolves to a JSON response.
 */
export async function GET(): Promise<Response> {
	const posts = await getPosts();
	return json(posts);
  }