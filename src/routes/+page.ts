import type { Post } from '$lib/types'
import { lazy } from '$lib/lazy.js'

type FetchFunction = (url: string) => Promise<Post[]>;

/**
 * Loads posts from the API.
 * 
 * @param {Object} options - The options for loading the posts.
 * @param {Function} options.fetch - The fetch function used to make the API request.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the loaded posts.
 */
export async function load({ fetch }: { fetch: FetchFunction; }): Promise<object> {
	// Make the API request to fetch the posts
	// const response = await fetch('api/posts');
	// Parse the response as JSON
	// const posts: Post[] = await response.json();
	const postsResponse = await lazy<Post[]>(fetch('api/posts'), { awaitInitial: true });
	const response = await postsResponse.promise;
	const posts: Post[] = await response.json();
	// Return an object containing the loaded posts
	return { posts };
  }