import React, {
  useState,
} from 'react';

import Record from './components/Record/Record';
import Result from './components/Result/Result';

const Container = () => {
  const [arrayA, setArrayA] = useState([]); // 群組 A
  const [arrayB, setArrayB] = useState([]); // 群組 B
  const [arrayC, setArrayC] = useState([]); // 群組 C
  const [arrayD, setArrayD] = useState([]); // 群組 D

  const [arrayResult, setArrayResult] = useState([]); // 比對結果

  /**
   * handleEnter
   * 
   * @param {string} group 
   * @param {string} value 
   */
  const handleEnter = (group, value) => {
    const tmpResult = [];
    const tmpA = arrayA.filter(tmp => tmp.value === value);
    const tmpB = arrayB.filter(tmp => tmp.value === value);
    const tmpC = arrayC.filter(tmp => tmp.value === value);
    const tmpD = arrayD.filter(tmp => tmp.value === value);

    // console.log('tmpA', tmpA);
    // console.log('tmpB', tmpB);
    // console.log('tmpC', tmpC);
    // console.log('tmpD', tmpD);

    tmpA.forEach(tmp => {
      tmpResult.push(`A${tmp.index}`);
    });

    tmpB.forEach(tmp => {
      tmpResult.push(`B${tmp.index}`);
    });

    tmpC.forEach(tmp => {
      tmpResult.push(`C${tmp.index}`);
    });

    tmpD.forEach(tmp => {
      tmpResult.push(`D${tmp.index}`);
    });

    // console.log('tmpResult', tmpResult);
    if (tmpResult.length > 0) {
      alert('紀錄已重複');
      setArrayResult([
        ...arrayResult,
        {
          key: value,
          value: tmpResult,
        }
      ]);
    } 

    switch (group) {
      case 'A':
        setArrayA([
          ...arrayA,
          {
            index: arrayA.length + 1,
            value,
          }
        ]);
        break;
      case 'B':
        setArrayB([
          ...arrayB,
          {
            index: arrayB.length + 1,
            value,
          }
        ]);
        break;
      case 'C':
        setArrayC([
          ...arrayC,
          {
            index: arrayC.length + 1,
            value,
          }
        ]);
        break;
      case 'D':
        setArrayD([
          ...arrayD,
          {
            index: arrayD.length + 1,
            value,
          }
        ]);
        break;
      default:
    }
  }

  return (
    <div className="container">
      <Record
        title="A"
        list={arrayA}
        onEnter={handleEnter}
        tabindex="1"
      />
      <Record
        title="B"
        list={arrayB}
        onEnter={handleEnter}
        tabindex="2"
      />
      <Record
        title="C"
        list={arrayC}
        onEnter={handleEnter}
        tabindex="3"
      />
      <Record
        title="D"
        list={arrayD}
        onEnter={handleEnter}
        tabindex="4"
      />
      <Result
        list={arrayResult}
      />
    </div>
  );
};

export default Container;
