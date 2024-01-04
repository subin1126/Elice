import { useState } from 'react';

const useFetch = (callback, url) => {

    const [loading] = useState(false);
    return loading;
  
  }

  export default useFetch;