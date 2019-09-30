import React, {
  useState,
  useEffect,
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
  };

  /**
   * handleRemove
   * 
   * @param {*} group 
   * @param {*} index 
   */
  const handleRemove = (group, index) => {
    let array = null;
    let arrayFunc = null;

    switch (group) {
      case 'A':
        array = arrayA;
        arrayFunc = setArrayA;
        break;
      case 'B':
        array = arrayB;
        arrayFunc = setArrayB;
        break;
      case 'C':
        array = arrayC;
        arrayFunc = setArrayC;
        break;
      case 'D':
        array = arrayD;
        arrayFunc = setArrayD;
        break;
      default:
    }

    let tmpArray = array.filter(tmp => tmp.index !== index);
    // console.log('tmpArray', tmpArray);

    // 重新排序
    tmpArray.forEach((tmp, index) => {
      tmpArray[index] = {
        ...tmpArray[index],
        index: index + 1,
      }
    });

    arrayFunc(tmpArray);
  };

  return (
    <div className="container">
      <Record
        title="A"
        list={arrayA}
        onEnter={handleEnter}
        onRemove={handleRemove}
      />
      <Record
        title="B"
        list={arrayB}
        onEnter={handleEnter}
        onRemove={handleRemove}
      />
      <Record
        title="C"
        list={arrayC}
        onEnter={handleEnter}
        onRemove={handleRemove}
      />
      <Record
        title="D"
        list={arrayD}
        onEnter={handleEnter}
        onRemove={handleRemove}
      />
      <Result
        list={arrayResult}
      />
    </div>
  );
};

export default Container;
