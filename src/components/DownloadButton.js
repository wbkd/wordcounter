import { h } from 'preact';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  color: #4F267D;
  cursor: pointer;
  line-height: 1;
  margin-top: 2rem;
  border: 1px solid #4F267D;
  padding: .5rem 1rem;
  border-radius: 20px;
  width: 175px;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;
function download(data) {
  return () => {
    const csvData = ['word,count'].concat(data.map(d => d.toString())).join('\n');
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(csvData)}`);
    element.setAttribute('download', 'wordcounter.csv');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
}

const DownloadButton = props => (
  props.data.length ? (
    <Button onClick={download(props.data)}>
      <span role="img" aria-label="nice">👇</span> Download CSV
    </Button>
  ) : null
);

DownloadButton.defaultProps = {
  data: []
};

export default DownloadButton;
