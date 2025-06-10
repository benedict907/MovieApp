import brandA from './brandA';
import brandB from './brandB';

const brands = {brandA, brandB};

// Determine the active brand based on an environment variable
const activeBrand = (process.env.REACT_APP_BRAND ||
  'brandA') as keyof typeof brands;

export default brands[activeBrand];
