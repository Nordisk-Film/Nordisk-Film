import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import supabase from '../../Utils/Supabase/supabaseClient.js';
import './PosterDetail.scss';

export const PosterDetail = () => {
  const { id } = useParams();
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const fetchPoster = async () => {
      const { data, error } = await supabase
        .from('posters')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching poster details', error);
      } else {
        setPoster(data);
      }
    };

    fetchPoster();
  }, [id]);

  if (!poster) {
    return <div>Loading...</div>;
  }

  return (
    <figure className="detailFigure">
      <img src={poster.image_url} alt={poster.name} />
      <figcaption >
        <h1>{poster.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: poster.description }} />
        <p>Price: {poster.price}kr</p>
        <p>Posters in stock: {poster.stock}</p>
        <p>
          Poster dimensions: <br /> 
          Height {poster.height} cm <br /> 
          Width {poster.width} cm
        </p>
        <Link id="a" to="/cart">
          Add To Cart
        </Link>
      </figcaption>
    </figure>
  );
};