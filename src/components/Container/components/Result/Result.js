import React from 'react';
  
const Result = (props) => {
  const { list } = props;
  return (
    <div className="record-list">
      <div className="record-title">Result</div>
      <div className="divider" />
      <div className="list">
        <ul>
          {
            list.map((tmp, index) => {
              let message = '';
              tmp.value.forEach((element, index) => {
                message += element;
                if (index !== tmp.value.length - 1) {
                  message += ', ';
                }
              });

              return (
                <li key={`result_${index}`}>{`${index + 1} - ${tmp.key} (${message})`}</li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Result;
  