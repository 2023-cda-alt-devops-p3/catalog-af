import { browser } from '$app/environment';

let initial = true;

/**
 * Initialize the lazy loading feature.
 * 
 * This function should be called in the root layout of the application.
 * It sets the initial value to false to indicate that the client has finished loading.
 */
export function initLazy() {
    initial = false;
}

/**
 * Lazily evaluates a promise either on the server or when certain criteria are met.
 * @param promise A promise that will be awaited on the server or when the criteria are met.
 * @param options.awaitInitial Await the promise on the client before hydrating. Defaults to true.
 * @returns A promise object that contains the evaluated value of the given promise.
 */
export async function lazy<T>(
	promise: Promise<T>,
	options: {
		awaitInitial?: boolean;
	} = {}
): Promise<{ promise: T | Promise<T> }> {
	const { awaitInitial } = options;

	// If awaitInitial is not explicitly set to false and initial is true,
	// wait for the promise to resolve before continuing.
	if (awaitInitial !== false && initial) {
		await promise;
	}

	// Return a promise object that contains the evaluated value of the given promise.
	return {
		promise: !browser ? await promise : promise
	};
}