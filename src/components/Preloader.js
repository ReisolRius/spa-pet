import React from 'react'
import './preloader.css'
import { useEffect } from 'react';
import { preLoaderAnim } from '../animation';

export const Preloader = () => {

    useEffect(()=> {
        preLoaderAnim()
    }, []);

  return (
    <div className='preloader'>
    <div className='texts-container'>
        <span>Rius</span>
        <span>Recept</span>
        <span>Yamy.</span>
    </div>
</div>
  )
}

export default Preloader