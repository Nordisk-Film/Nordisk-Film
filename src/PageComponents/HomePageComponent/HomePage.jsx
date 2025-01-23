import './HomePage.scss'
import { Main } from '../../Components/MainComponent/Main.jsx';
import { Header} from "../../Components/HeaderCommponent/Header.jsx"
import { GenreList } from '../../Components/GenreListComponent/GenreList.jsx';
import { PosterList } from '../../Components/PosterListComponent/PosterList.jsx';
import { ThreeRandom } from '../../Components/ThreeRandomComponent/ThreeRandom.jsx';

export const HomePage = () => {
  
  

  return (
    <>
  <Header/>
    <Main>
      <ThreeRandom/>
      <GenreList/>
      <PosterList/>
      {/* Add a cooming soon posters (nice to have) */}
    </>
  );
};
