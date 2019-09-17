import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  text-align: left;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  color: #222;
  margin-top: 1rem;

  thead tr th {
    border-bottom: 1px solid #ddd;
    border-collapse:separate;
    border-spacing:5px 5px;
  }
  tbody {
    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`;

const TableHeadline = styled.div`
  padding: .5rem;
`;

const TableCell = styled.div`
  padding: .5rem;
`;

const Row = props => (
  <tr>
    <td><TableCell>{props.data[0]}</TableCell></td>
    <td><TableCell>{props.data[1]}</TableCell></td>
  </tr>
);

const WordCountTable = props => (
  props.data.length ?
    <Table>
      <thead>
        <tr>
          <th><TableHeadline>Word</TableHeadline></th>
          <th><TableHeadline>Count</TableHeadline></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(d => <Row data={d} />)}
      </tbody>
    </Table> :
    null
);


WordCountTable.defaultProps = {
  data: []
};

export default WordCountTable;
