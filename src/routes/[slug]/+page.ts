import { error } from '@sveltejs/kit'

type LoadParams = {
	params: { slug: string }
};

/**
 * Load the content and metadata of a post based on the provided slug.
 * @param {Object} params - The parameters object containing the slug.
 * @returns {Object} - An object containing the post content and metadata.
 * @throws {Error} - If the post with the provided slug is not found.
 */
export async function load({ params }: LoadParams): Promise<object> {
	try {
		// Dynamically import the post file based on the provided slug
		const post = await import(`../../posts/${params.slug}.md`)

		// Return the post content and metadata
		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		// Throw an error if the post is not found
		throw error(404, `Could not find ${params.slug}`)
	}
}
