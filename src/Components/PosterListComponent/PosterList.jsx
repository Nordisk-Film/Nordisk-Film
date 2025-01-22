import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../Utils/Supabase/supabaseClient.js";
import "../PosterListComponent/PosterList.scss"

export const PosterList = () => {
  // State til at gemme genre data
  const [PosterData, setPosterData] = useState([]);

  // Funktion til at hente data fra Supabase
  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("posters")
        .select("id,name,image_url");
      if (error) {
        console.error("Error fetching posters", error);
      } else {
        setPosterData(data);
      }
    }
  };

  // useEffect til sideeffekter og styring af render
  useEffect(() => {
    getData();
  }, [setPosterData, supabase]);

  // Returnerer en liste af genrer
  return (
    <ul className="posterUl">
      {PosterData &&
        PosterData.map((Poster) => {
          return (
            <figure>
            <img src={Poster.image_url} alt="Poster image" />
            <figcaption key={Poster.id}> <p>{Poster.name}</p>
              <br /> <Link to="/Posters">Add To Cart</Link>
            </figcaption>
            </figure>
          );
        })
      }
    </ul>
  );
};