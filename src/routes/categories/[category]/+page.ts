import type { Categories, Post } from '$lib/types';

type FetchFunction = (url: string) => Promise<Response>;
type LoadParams = {
	category: string;
};

/**
 * Loads posts from the API.
 *
 * @param {Object} options - The options for loading the posts.
 * @param {Function} options.fetch - The fetch function used to make the API request.
 * @param {Object} options.params - The parameters for filtering the posts.
 * @param {string} options.params.slug - The slug of the category to filter the posts.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the loaded posts and the category slug.
 */
export async function load({
	fetch,
	params
}: {
	fetch: FetchFunction;
	params: LoadParams;
}): Promise<object> {
	// Make the API request to fetch the posts
	const response = await fetch('../api/posts');
	// Parse the response as JSON
	const posts: Post[] = await response.json();
	// Filter the posts based on the category slug
	const postsFiltered = posts.filter((post) => post.categories.includes(params.category as Categories));
	// Return an object containing the loaded posts and the category slug
	return { postsFiltered, category: params.category };
}
