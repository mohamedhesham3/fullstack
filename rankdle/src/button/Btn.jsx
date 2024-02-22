import React from 'react';
import '../global.css';
import { useNavigate } from 'react-router-dom';

const Btn = () => {


  const nav = useNavigate();

  return (
    <button onClick={() => nav('submit')} className='btn'>
      Submit
    </button>
  );
}

export default Btn;
