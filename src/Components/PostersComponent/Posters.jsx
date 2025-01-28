import { useEffect, useState } from "react";
import supabase from "../../Utils/Supabase/supabaseClient.js";

export const Posters = ({ comingSoonIds }) => {
  const [PosterData, setPosterData] = useState([]);

  const getData = async () => {
    let query = supabase
      .from("posters")
      .select("id,name,image_url");

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching posters", error);
    } else {
      const filteredData = data.filter(poster => !comingSoonIds.includes(poster.id));
      setPosterData(filteredData);
    }
  };

  useEffect(() => {
    getData();
  }, [comingSoonIds]);

  return (
    <div>
      <h3>Posters</h3>
      <ul className="PostersUl">
        {PosterData.map((Poster) => (
          <figure key={Poster.id}>
            <img src={Poster.image_url} alt="Poster image" />
            <figcaption>
              <p>{Poster.name}</p>
            </figcaption>
          </figure>
        ))}
      </ul>
    </div>
  );
};