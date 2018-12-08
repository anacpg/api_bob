import schema from './schema';
import middleware from './middleware';

export default (mongoose) => {
  middleware(schema);
  return mongoose.model('User', schema);
};
