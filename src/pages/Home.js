import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main className="main">
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
