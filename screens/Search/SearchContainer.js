import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    tvs: [],
    moviesError: null,
    tvsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, moviesError] = await movieApi.search(keyword);
    const [tvs, tvsError] = await tvApi.search(keyword);
    setResults({
      movies,
      tvs,
      moviesError,
      tvsError,
    });
  };
  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};
