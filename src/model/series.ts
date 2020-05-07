export interface Series {
  show: Show;
}

export interface Show {
  id: number;
  name: string;
  url: string;
  image: {
    medium: string;
  };
  genres: Array<string>;
}
