function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const parseSearchQuery = (query) => capitalize(query.toLowerCase());

export {
  parseSearchQuery,
  capitalize,
};
