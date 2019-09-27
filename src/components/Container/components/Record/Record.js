import React, {
  useState,
} from 'react';
  
const Record = (props) => {
  const [value, setValue] = useState('');

  const {
    title,
    list,
    onEnter,
    onRemove,
  } = props;

  /**
   * handleChange
   * 
   * @param {*} e 
   */
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  /**
   * handleKeyDown
   * @param {*} e 
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (value !== '') {
        onEnter(title, value);
        setValue('');
      }  
    }
  }

  return (
    <div className="record-list">
      <div className="record-title">{props.title}</div>
      <div className="divider" />
      <div className="list">
        <ul>
          {
            list.map((tmp, index) => (
              <li key={`${title}_record_${index}`}>
                <div className="li-container">
                  <div className="li-content">
                    {
                      `${tmp.index} - ${tmp.value}`
                    }
                  </div>
                  <div className="li-content li-button">
                    <button onClick={() => {onRemove(title, tmp.index)}} >X</button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
    </div>
  );
};

export default Record;
  