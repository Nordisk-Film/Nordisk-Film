import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../Utils/Supabase/supabaseClient.js";
import "../PosterListComponent/PosterList.scss";

export const PosterList = () => {
  const [PosterData, setPosterData] = useState([]); 
  const [limit, setLimit] = useState(40); 

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("posters")
        .select("id,name,image_url")
        .limit(limit); 

      if (error) {
        console.error("Error fetching posters", error);
      } else {
        setPosterData(data);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [limit]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 40); 
  };

  return (
    <div>
      <ul className="posterUl">
        {PosterData &&
          PosterData.map((Poster) => (
            <figure key={Poster.id}>
              <Link to="/Posters">
                <img src={Poster.image_url} alt="Poster image" />
              </Link>
              <figcaption>
                <p>{Poster.name}</p>
                <br />
                <Link id="a" to="/Posters">
                  Add To Cart
                </Link>
              </figcaption>
            </figure>
          ))}
      </ul>
      
      <button onClick={loadMore} className="load-more">
        Load More
      </button>
    </div>
  );
};
