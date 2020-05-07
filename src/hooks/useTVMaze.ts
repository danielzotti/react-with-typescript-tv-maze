import { useState } from 'react';
import { Series, Show } from '../model/series';
import Axios from 'axios';

export const useTVMaze = () => {

  const [result, setResult] = useState<Array<Series>>([]);
  const [details, setDetails] = useState<Show>();

  const searchHandler = (text: string) => {
    Axios.get<Array<Series>>(`http://api.tvmaze.com/search/shows?q=${ text }`).then(
      res => {
        console.log(res);
        setResult(res.data);
      }
    );
  }

  const itemClickHandler = (series: Series) => {
    // window.open(series.show.url);
    setDetails(series.show)
  };



  return {
    series: result,
    search: searchHandler,
    itemClick: itemClickHandler,
    details,
  }
}