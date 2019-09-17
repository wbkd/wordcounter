import React from 'react';
import styled from 'styled-components';
import { ScaleLoader } from 'react-spinners';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  background: rgba(255,255,255,.75);
`;

export default props => (
  props.visible ? (
    <LoaderWrapper>
      <ScaleLoader color={props.color} />
    </LoaderWrapper>
  ) : null
);
