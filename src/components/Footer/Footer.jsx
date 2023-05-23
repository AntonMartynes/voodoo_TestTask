/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from 'lodash';
import footerLogo from '../../assets/footer_logo.png'

const firstColumnInfo = [
    {
      id: _.uniqueId('footer-'),
        label: 'faq',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'returns',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'contact',
    },
];

const secondColumnInfo = [
    {
      id: _.uniqueId('footer-'),
        label: 'TERMS & CONDITIONS',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'PRIVACY POLICY',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'COOKIE POLICY',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'COOKIE SETTINGS',
    },
];

const thirdColumnInfo = [
    {
      id: _.uniqueId('footer-'),
        label: 'ABOUT VOODOO',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'CAREER',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'FACEBOOK',
    },
    {
      id: _.uniqueId('footer-'),
        label: 'INSTAGRAM',
    },
];

export const Footer = () => {
   return (
       <footer className="w-full p-12 border-t border-black bg-white md:flex flex-row-reverse justify-around">
           <div className='flex flex-col md:w-2/3 md:flex-row justify-around'>
               <ul className='mb-12 md:mb-0'>
                   {firstColumnInfo.map(item => {
                      return (
                        <li className='mb-4 last:mb-0' key={item.id}>
                            <a href='#' className='uppercase hover:underline underline-offset-4'>{item.label}</a>
                        </li>
                      )
                    })}
               </ul>

               <ul className='mb-12 md:mb-0'>
                   {secondColumnInfo.map(item => {
                      return (
                        <li className='mb-4 last:mb-0' key={item.id}>
                          <a href='#' className='uppercase hover:underline underline-offset-4'>{item.label}</a>
                        </li>
                      )
                    })}
               </ul>

               <ul className='mb-12 md:mb-0'>
                   {thirdColumnInfo.map(item => {
                      return (
                        <li className='mb-4 last:mb-0' key={item.id}>
                          <a href='#' className='uppercase hover:underline underline-offset-4'>{item.label}</a>
                        </li>
                      )
                    })}
               </ul>          
           </div>
           
           <div className='flex justify-center items-center md:items-start'><img src={footerLogo} alt="footerLogo"/></div>
       </footer>
   )
}