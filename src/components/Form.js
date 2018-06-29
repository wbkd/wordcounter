import styled from 'styled-components';

export default styled.form`
  display: block;
  margin-top: 3rem;
  position: relative;

  input {
    width: 100%;
  }

  label {
    color: #888;
    margin-bottom: .4rem;
  }

  label, textarea, select {
    display: block;
    width: 100%;
  }

  select {
    background: white;
    margin-bottom: 1rem;
    height: 32px;
    border: 1px solid #888;
  }

  textarea {
    border: 1px solid #888;
    border-radius: 3px;
    height: 300px;
    margin-bottom: 1em;
    resize: none;
    padding: 0.9rem;
    color: #4F267D;
    font-size: 0.9rem;
  }
`;
