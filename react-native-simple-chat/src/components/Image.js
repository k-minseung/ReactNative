import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  background-color: ${({ theme }) => theme.imageBackground};
  width: 150px;
  height: 150px;
`;

const Image = ({url,ImageStyle}) => {
    return(
        <Container>
            <StyledImage source={{uri:url}} style={ImageStyle} />
        </Container>
    )
}

Image.propTypes={
    uri: PropTypes.string, // uri에 들어오는 값은 string이여야한다는 뜻.
    ImageStyle: PropTypes.object,
}

export default Image;