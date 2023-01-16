import React, { useState } from 'react';
import useCustomFetch from './hooks/useCustomFetch';

function CustomFetch() {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);
  const getGitGET = (e) => {
    if (e.key === 'Enter') {
      setUrl('https://api.github.com/users/' + e.target.value);
      //   setUrl(e.target.value);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <input onKeyPress={getGitGET} />
        {!loading && error && (
          <div>
            <h1>They wuz be an err error</h1>
          </div>
        )}

        {loading && url && <div>Loading...</div>}

        {!loading && !error && data && data.responseData && (
          <div>
            <h2>Git Id: {data.responseData.login}</h2>
            <h3>Name: {data.responseData.name}</h3>
            <h3>Followers: {data.responseData.followers}</h3>
            <h3>Number of Repositories: {data.responseData.public_repos}</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default CustomFetch;
