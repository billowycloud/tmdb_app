import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer loading={loading}>
    <SliderContainer>
      {thisWeek.map((tv) => (
        <Slide
          key={tv.id}
          id={tv.id}
          title={tv.name}
          overview={tv.overview}
          votes={tv.vote_average}
          backgroundImage={tv.backdrop_path}
          poster={tv.poster_path}
        />
      ))}
    </SliderContainer>
    <Container>
      <HorizontalSlider title="인기있는 콘텐츠">
        {popular.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="평점높은 콘텐츠">
        {topRated.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="오늘 방영될 TV 프로그램">
        {today.map((tv) => (
          <Horizontal
            key={tv.id}
            id={tv.id}
            title={tv.name}
            poster={tv.poster_path}
            overview={tv.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
