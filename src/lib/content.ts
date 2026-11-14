import type { ContentEntry } from '../types';

export function titleForEntry(entry: ContentEntry) {
  return entry.data.title ?? humanize(entry.id.split('/').at(-1) ?? entry.id);
}

function humanize(value: string) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export type ContentTreeNode =
  | { kind: 'folder'; name: string; path: string; children: ContentTreeNode[] }
  | { kind: 'file'; name: string; path: string; entry: ContentEntry };

export function buildContentTree(entries: ContentEntry[]): ContentTreeNode[] {
  const roots: ContentTreeNode[] = [];

  for (const entry of entries) {
    const parts = entry.id.split('/');
    let current = roots;
    let path = '';

    parts.forEach((part, index) => {
      path = path ? `${path}/${part}` : part;
      const isFile = index === parts.length - 1;
      const existing = current.find((node) => node.path === path);

      if (isFile) {
        current.push({
          kind: 'file',
          name: titleForEntry(entry),
          path,
          entry
        });
      } else if (existing?.kind === 'folder') {
        current = existing.children;
      } else {
        const folder = { kind: 'folder' as const, name: part, path, children: [] };
        current.push(folder);
        current = folder.children;
      }
    });
  }

  return sortTree(roots);
}

function sortTree(nodes: ContentTreeNode[]): ContentTreeNode[] {
  return nodes
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((node) => (node.kind === 'folder' ? { ...node, children: sortTree(node.children) } : node));
}
