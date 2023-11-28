import '@fortawesome/fontawesome-free/css/all.css';

const Popup = () => {
    return (
        <div className="bg-white rounded w-40 absolute text-center flex flex-col py-2 z-10 shadow-lg">
            <button className='bg-purple-700 w-full rounded-sm text-white p-1'>Sign in</button>
            <div className='bg-gray-300 w-full max-h-0.5 h-0.5 mt-1'></div>
          <button className=''><i className='fa fa-signup me-2 mt-2'></i>LogIn</button>
          <button className=''><i className='fa fa-user me-2 mt-2'></i>Sign Up</button>
        </div>
    );
  };

const TopNav = () => {
  return (
    <nav className="bg-black p-4 fixed w-full">
                <i className='fa fa-bars absolute md:hidden sm:block text-white'></i>

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><img src='/download.png' height={50} width={50} className=''/></div>

        <h3 className='text-white lg:font-medium lg:text-lg'>NKY Market</h3>
        
        <div className='flex space-x-1'>
            <input type="text" className='rounded-sm p-1'/>
            <button className='bg-[#0090ff] text-white p-2 rounded-sm hover:opacity-90'>Search</button>
        </div>

        <ul className="flex space-x-5">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Login</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopNav