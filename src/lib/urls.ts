export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const route = path.replace(/^\/+/, '');

  if (!route) {
    return base || '/';
  }

  return `${base}/${route}`;
}
