export const Card = ({ ...props }) => {
  return (
    <li className='relative flex flex-col justify-between w-auto  mb-12'>
        <img src={props.images[0].src} alt="" className='h-auto max-w-[300px] border border-solid border-black rounded sm:p26'/>
        <div className='my-3'>
            <div className='flex justify-between items-center mb-2'>
                <span className='font-bold'>{props.title}</span>
                <span className='font-medium'>Condition</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='font-bold'>{props.variants[0].price} KR. </span>
                <span >Slightly used</span>
            </div>
            <div className='absolute top-4 left-4 flex justify-center items-center bg-black w-20 h-8 rounded font-bol uppercase text-white'>Used</div>
        </div>

        <button
            className='w-full py-4 rounded font-bol bg-black uppercase hover:bg-slate-800 '
            onClick={(e) => e.preventDefault()}
        >
            pick-up in 
            <u> 2200</u>
        </button>
    </li>
  )
}