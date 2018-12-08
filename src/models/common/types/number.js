export default (options = {}) => {
  const defaults = { type: Number };
  return Object.assign(defaults, options);
};
