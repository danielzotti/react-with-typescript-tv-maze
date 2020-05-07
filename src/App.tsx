import React from 'react';
import './App.module.css'; // import globale!
import css from './App.module.css'; // import locale
import { TVMazeResult } from './components/TVMazeResults';
import { TVMazeSearch } from './components/TVMazeSearch';
import { useTVMaze } from './hooks/useTVMaze';

function App() {

  const { series, search, itemClick, details } = useTVMaze();

  return (
    <div>
      <TVMazeSearch search={ search }/>
      <TVMazeResult result={ series } itemClick={ itemClick }/>
      {
        details &&
        <div>
          <h1>{ details?.name }</h1>
          <ul>
            {
              details?.genres.map(g => <li key={ g }>{ g }</li>)
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default App;


export const NoImage = () => {
  return <div className={ css.noImage }>NO IMAGE</div>;
};