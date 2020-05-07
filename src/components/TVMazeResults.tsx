import React from 'react';
import css from '../App.module.css';
import { NoImage } from '../App';
import { Series } from '../model/series';

interface TVMazeResultProps {
  result: Series[];
  itemClick: (series: Series) => void;
}

export const TVMazeResult: React.FC<TVMazeResultProps> = ({ result, itemClick }) => {
  return (
    <>

      <div className={ css.results }>{result.length } results</div>

      <div className={ css.grid }>
        {
          result.map(series => {
            const { show: { id, image, name } } = series;

            return (
              <div className={ css.gridItem } key={ id } onClick={ () => itemClick(series) }>
                {
                  image ?
                    <img src={ image?.medium } className={ css.movie }/> : <NoImage/>

                }
                <div className={ css.movieText }>{ name }</div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};