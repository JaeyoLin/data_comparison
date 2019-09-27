import React from 'react';
  
const Result = (props) => {
  const { list } = props;
  return (
    <div className="record-list result">
      <div className="record-title red">Result</div>
      <div className="divider width_250" />
      <div className="list red bold">
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
  