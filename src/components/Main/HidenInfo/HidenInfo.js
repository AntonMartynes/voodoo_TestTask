/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import _ from 'lodash';

import alertLogo from '../../../assets/alert-circle.png'

const listOfInfo = [
  {
    id: _.uniqueId('info-'),
    label: 'custom HTML element for a black disclosure above the products',
  },
  {
    id: _.uniqueId('info-'),
    label: 'custom HTML element for a black disclosure above the products',
  },
  {
    id: _.uniqueId('info-'),
    label: 'custom HTML element for a black disclosure above the products',
},
  {
    id: _.uniqueId('info-'),
    label: 'custom HTML element for a black disclosure above the products',
  },
  {
    id: _.uniqueId('info-'),
    label: 'custom HTML element for a black disclosure above the products',
  },
];

export const HidenInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${isOpen ? "mb-1" : "mb-14"}  p-6 mx-6 rounded text-white bg-black transition-all duration-300 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex justify-between items-center w-full'>
          <div className='flex justify-center items-center'>
            <img src={alertLogo} alt="alert Logo" />
            <span className='ml-2 uppercase'>alpha</span>
          </div>

          <span className='text-center'>
            Important info
            <span className='max-[650px]:hidden'> regarding our service</span>
          </span>

          <span className={`${isOpen ? 'rotate-[-135deg]' : 'rotate-45'} w-2 p-1 border-solid border-r-2 border-b-2 border-white transition-all duration-1000 hover:cursor-pointer`}></span>
        </div>
      </div>
          
      {isOpen ?
        <ul className='w-auto p-6 mb-14 mx-6 rounded text-white bg-black'>
          {listOfInfo.map(info => {
            console.log(info.id)
            return (
              <li className='flex justify-center w-full mb-4 last:mb-0' key={info.id}>
              <a href="#" className='text-white hover:underline underline-offset-4 '>{info.label}</a>
              </li>
            )
          })}
        </ul>
        :
        null}
    </>
  )
}