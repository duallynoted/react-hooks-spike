import { useEffect, useState } from 'react';
function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function customFetch() {
    try {
      let response = await fetch(url);
      let responseData = await response.json();
      setData({ responseData });
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (url) {
        customFetch(url);
      }
    }, 3000);
  }, [url]);
  return [data, loading, error];
}

export default useCustomFetch;
