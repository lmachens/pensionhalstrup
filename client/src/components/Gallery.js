import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SliderStyled = styled(Slider)``;
const ImgContainer = styled.div`
  height: 500px;
  background: beige;
`;

const Img = styled.img`
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
`;

function Gallery({ images }) {
  return (
    <SliderStyled {...settings}>
      {images.map(image => (
        <ImgContainer key={image.src}>
          <Img src={image.src} alt={image.alt} />
        </ImgContainer>
      ))}
    </SliderStyled>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
