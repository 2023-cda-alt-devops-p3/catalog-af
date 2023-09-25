import type { Categories, Post } from '$lib/types'

type FetchFunction = (url: string) => Promise<Response>;
type LoadParams = {
	slug: string
};

/**
 * Loads posts from the API.
 * 
 * @param {Object} options - The options for loading the posts.
 * @param {Function} options.fetch - The fetch function used to make the API request.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the loaded posts.
 */
export async function load({ fetch, params }: { fetch: FetchFunction; params: LoadParams; }): Promise<object> {
	// Make the API request to fetch the posts
	const response = await fetch('../api/posts');
	// Parse the response as JSON
	const posts: Post[] = await response.json();
	// Return an object containing the loaded posts
    const postsFiltered = posts.filter((post) => post.categories.includes(params.slug as Categories));
	return { postsFiltered, category: params.slug };
  }