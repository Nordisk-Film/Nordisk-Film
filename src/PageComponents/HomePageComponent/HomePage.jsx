import './HomePage.scss'
import { Main } from '../../Components/MainComponent/Main.jsx';
import { Header} from "../../Components/HeaderCommponent/Header.jsx"
import { GenreList } from '../../Components/GenreListComponent/GenreList.jsx';
import { PosterList } from '../../Components/PosterListComponent/PosterList.jsx';

export const HomePage = () => {
  
  

  return (
    <>
      <GenreList/>
      <PosterList/>
      {/* Add a cooming soon posters (nice to have) */}
    </>
  );
};
