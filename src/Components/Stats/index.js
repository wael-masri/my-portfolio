import React from 'react'
import { stats } from '../../data';
import parser from "html-react-parser";
const Stats = () => {
  return (
    <>
    {stats.map(({no,title},index) => {
        return(
        <div className='stats__box' key={index}>
         <h3 className='stats__no'>{no}</h3>
         <p className='stats__title'>{parser(title)}</p>
        </div>

        )
    })}
    </>
  )
}

export default Stats