export const buildQueryString = (obj: Record<string, unknown> | undefined) => {
  if (!obj || Object.keys(obj).length === 0) {
    return '';
  }

  const queryString = Object.keys(obj)
    .filter((key) => obj[key] !== '' && obj[key] !== undefined && obj[key] !== null)
    .map((key: string) => {
      const value = obj[key];
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
      return '';
    })
    .filter((part) => {
      return part;
    })
    .join('&');

  return queryString;
};
