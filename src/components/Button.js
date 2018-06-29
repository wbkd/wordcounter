import styled from 'styled-components';

export default styled.button`
  margin-left: auto;
  background: ${props => props.bg || '#555'};
  color: ${props => props.color || 'white'};
  text-align: center;
  border-radius: 20px;
  padding: .5rem 2.5rem;
  cursor: pointer;
  border: none;
  line-height: 1;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;
