export const prerender = true;

type LoadUrl = {
	url: { pathname: string };
};

/**
 * Load function takes a URL and returns the pathname.
 *
 * @param {string} url - The URL to extract the pathname from.
 * @returns {Object} - An object containing the extracted pathname.
 */
export async function load({ url }: LoadUrl): Promise<object> {
	return {
		url: url.pathname
	};
}
