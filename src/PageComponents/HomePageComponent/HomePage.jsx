import './HomePage.scss'
import { useState } from 'react';
import { PosterList } from '../../Components/PosterListComponent/PosterList.jsx';
import { ThreeRandom } from '../../Components/ThreeRandomComponent/ThreeRandom.jsx';
import { GenreDropDown } from '../../Components/GenreDropDownComponent/GenreDropDown.jsx';
import { CommingSoon } from '../../Components/CommingSoonComponent/CommingSoon.jsx';

export const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState(""); // Define setSelectedGenre

  return (
    <>
      <ThreeRandom/>
      <GenreDropDown setSelectedGenre={setSelectedGenre} /> {/* Passes/sends setSelectedGenre to GenreDropDown */}
      <PosterList selectedGenre={selectedGenre} /> {/* Passes/sends selectedGenre to PosterList */}
      <CommingSoon/>
      {/* Add a cooming soon posters (nice to have) */}
    </>
  );
};
