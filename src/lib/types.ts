import type { ComponentType } from 'svelte';

export type Categories = 'uml' | 'merise';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type PostData = {
	content: ComponentType;
	meta: Post;
};
