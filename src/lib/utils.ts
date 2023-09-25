type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

/**
 * Format a given date string using the specified date style and locales.
 * @param {string} date - The date string to format.
 * @param {DateStyle} dateStyle - The style of the formatted date.
 * @param {string} locales - The locales to use for formatting.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales: string = 'fr'): string {
	// Replace dashes with slashes to support Safari
	const dateToFormat = new Date(date.replaceAll('-', '/'));

	// Format the date using the specified style and locales
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}
