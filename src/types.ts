import type { CollectionEntry } from 'astro:content';

export type CollectionName = 'docs' | 'misc';
export type ContentData = {
  title?: string;
  description?: string;
  date?: Date;
  tags: string[];
};
export type ContentEntry = (CollectionEntry<'docs'> | CollectionEntry<'misc'>) & {
  data: ContentData;
};

export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
};
