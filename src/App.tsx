import { useEffect, useState } from 'react';
import axios from 'axios';
import LCUState from './lcuState';

function App() {
  const [post, setPost] = useState<any>(null);

  const baserowApi = LCUState.BaserowApi;
  const baserowQuery = LCUState.BaserowQuery;
  
  useEffect(() => {
    axios({
      url: `${baserowApi}${baserowQuery}`,
    }).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      {post.results.map((item: any) => (
        <div key={item.id}>
          NA?: {item["If North America"] ? "true" : "false"}<br />
          {item.Logo && item.Logo[0] && <img src={item.Logo[0].url} width="200px" />}<br />
          {item.Name}
          <br />
          {item.Description}
          <br />
          <a href={`http://${item.Website}`}>{item.Website}</a>
          <br />
          {item.Funnumbers}
        </div>
      ))}
    </>
  );
}

export default App;