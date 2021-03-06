import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: red;
  font-weight: 700;
`;

export default props => (
  props.text ? (
    <Error>
      <span role="img" aria-label="sick">🤒</span> Sorry, Server error!
    </Error>
  ) : null
);
