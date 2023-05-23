
import logo from '../../assets/header_logo.png'

export const Header = () => {
  return(
    <header className="w-full p-6 border-b border-black">
      <div className="flex justify-between items-center">
        <img className="w-32" src={logo} alt="voodoo_logo" />   
            
        <nav className="flex items-center ">
          <a href="/" className="mr-4 font-semibold hover:underline underline-offset-4">About us</a>
          <button
            className='bg-black w-20 h-8 rounded font-bol hover:bg-slate-800'
            type='submit'
            onClick={(e) => e.preventDefault()}
          >
            Sign-Up
          </button>
        </nav>           
      </div>
    </header>
  )
}