import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ movies, tvs, keyword, onChange, onSubmit }) => (
  <ScrollContainer refreshFn={onSubmit} loading={false}>
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />

    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie Results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            votes={movie.vote_average}
            title={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {tvs.length !== 0 && (
      <HorizontalSlider title={"TV Results"}>
        {tvs.map((tv) => (
          <Vertical
            key={tv.id}
            id={tv.id}
            votes={tv.vote_average}
            title={tv.name}
            poster={tv.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
