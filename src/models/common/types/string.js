export default (options = {}) => {
  if (options.enum && options.null) {
    options.enum.push(null);
    options.enum.push('');
  }
  const defaults = {
    trim: true,
    type: String,
  };
  return Object.assign(defaults, options);
};
