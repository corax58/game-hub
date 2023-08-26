import React from "react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenres();

  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
