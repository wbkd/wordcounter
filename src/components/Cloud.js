import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const Cloud = ({ data }) => {
  if (!data || !data.length) {
    return null;
  }

  const words = data.map(d => ({ text: d[0], value: d[1] }));

  return (
    <div style={{ height: 500, width: '100%' }}>
      <ReactWordcloud
        options={{
          fontSizes: [12, 30]
        }}
        words={words}
      />
    </div>
  );
};

export default Cloud;
