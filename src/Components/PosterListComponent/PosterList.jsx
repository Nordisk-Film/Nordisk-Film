import { useEffect, useState } from "react";
import supabase from "../../Utils/Supabase/supabaseClient.js";

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
    <ul>
      {PosterData &&
        PosterData.map((Poster) => {
          return (
            <>
            <img src={Poster.image_url} alt="" />
            <li key={Poster.id}>{Poster.name}</li>
            </>
          );
        })
      }
    </ul>
  );
};