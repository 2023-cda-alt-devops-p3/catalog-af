import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// we set the theme in `app.html` to prevent flashing
const userTheme = browser && localStorage.getItem('color-scheme');

// create the store
export const theme = writable(userTheme ?? 'dark');

/**
 * Toggles the theme between 'dark' and 'light'.
 * Updates the HTML color scheme attribute and saves the theme to local storage.
 * @returns The new theme after toggling.
 */
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		// Update the HTML color scheme attribute
		document.documentElement.setAttribute('color-scheme', newTheme);

		// Save the theme to local storage
		localStorage.setItem('color-scheme', newTheme);

		return newTheme;
	});
}

/**
 * Set the theme.
 * @param newTheme - The new theme to set.
 */
export function setTheme(newTheme: Theme) {
	// Update the theme.
	theme.set(newTheme);
}
