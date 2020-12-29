import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import Card from './components/Card';
import axios from 'axios';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';

const BASE_API_URL = `https://test.spaceflightnewsapi.net/api/v2/articles`

function useFilter(initFilter = {search: '', limit: 5, skip: 0}) {
   const [filter, setFilter] = useState(initFilter);

   function changeFilter (key, value) {
     setFilter({...filter, skip: 0, [key]: value})
   }

  return [filter, changeFilter]
}
function App() {
  const [{limit, search, skip}, setFilter] = useFilter();
  const [isLoading, setLoading] = useState(false)
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios.get(BASE_API_URL, {
      params: {
        title_contains: search,
        _limit: limit,
        _start: skip
      }
    }).then(response => {
      setCards(response.data);
      setLoading(false)
    })
  }, [limit, search, skip]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Filter search={search} limit={limit} setFilter={setFilter}  />
        <div className="row">
          { isLoading ? <Spinner /> : cards.map(card =>  (
          <Card  
          key={card.id}
          title={card.title} 
          summary={card.summary}
          url={card.url}
          imageUrl={card.imageUrl}
           />
            ))}
            <Pagination 
            skip={skip}
            limit={limit}
            setFilter={setFilter}
             />
         
        </div>
      </div>
    </div>
  );
}

export default App;
