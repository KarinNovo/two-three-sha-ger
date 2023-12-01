import React from 'react';

const HashtagList = ({ onHashtagSelected, hashtags }) => {
  return (
    <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>
      {hashtags.map((hashtag, index) => (
        <div key={index} onClick={() => onHashtagSelected(hashtag)} style={{ cursor: 'pointer', padding: '5px' }}>
          #{hashtag}
        </div>
      ))}
    </div>
  );
};

export default HashtagList;
