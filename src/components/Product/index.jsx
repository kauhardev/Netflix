import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Product = () => {
  const [films, setFilms] = useState([]);

  const getFilm = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=1`
    ).then((res) => setFilms(res.data.results)).catch((res) => console.log(res.message)
    )
  };

  useEffect(() => {
    getFilm();
  }, []);

  console.log(films,'fil');
  
  return (
    <div className="">
      <div className="conteiner">
      <Link to={'/'} className="text-2xl"><FaChevronLeft />  </Link>

        <div className="flex items-center flex-wrap  2xl:gap-[26px] xl:gap-[8px]  max-lg:gap-[30px] py-[50px]">
{
  films.map((el) => <ProductCard el={el} key={el.id} />)
}
        </div>
      </div>
    </div>
  );
};

export default Product;
