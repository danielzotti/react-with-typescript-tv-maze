import React, { useState } from 'react';
import Axios from 'axios';

interface TVMazeSearchProps {
  search: (text:string) => void;
}
export const TVMazeSearch: React.FC<TVMazeSearchProps> = (props) => {

  const [text, setText] = useState<string>('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.search(text);
  };

  return (
    <form onSubmit={ searchHandler }>
      <input
        type="text"
        placeholder="search"
        value={ text }
        onChange={ onChangeHandler }
      />
    </form>
  );
};