/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(undefined);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const readMe = async () => {
      setIsLoading(true)
      const data = await readItems();
      setItems(data);
      setIsLoading(false);
    }
    if (isLoading) {
      readMe().catch((err) => {
      setError(err);
      setIsLoading(false)
      })
    }
    if (isLoading === undefined) {
      setIsLoading(() => !isLoading)
    }
  }, [error, isLoading])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
