import React, { useEffect, useState } from 'react';
import supabase from "../../Utils/Supabase/supabaseClient.js";
import './GenreDropDown.scss';

const GenreDropDown = () => {
    // State til at gemme genre data
    const [genreData, setGenreData] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    // Funktion til at hente data fra Supabase
    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("genres")
                .select("id,title");
            if (error) {
                console.error("Error fetching genres", error);
            } else {
                setGenreData(data);
            }
        }
    };

    // useEffect til sideeffekter og styring af render
    useEffect(() => {
        getData();
    }, [setGenreData, supabase]);

    // Håndterer ændring af valgt genre
    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    // Returnerer en liste af genrer
    return (
        <select className="genre-dropdown" value={selectedGenre} onChange={handleChange}>
            <option value="">Select Genre</option>
            {genreData &&
                genreData.map((genre) => {
                    console.log(genre.id);
                    return (
                        <option key={genre.id} value={genre.id}>{genre.title}</option>
                    );
                })
            }
        </select>
    );
};

export default GenreDropDown;