

const SideBar = () => {
  return (
         <div className="min-h-screen w-44 bg-[#161b3b]">
            <div className=" text-center w-44 justify-center items-center align-middle">
                <ul className="">Dashboard</ul>
                <ul className="mt-1">Users</ul>
                <ul className="mt-1">Products</ul>
                <ul className="mt-1">Settings</ul>
            </div>
            <i className="fa fa-arrow-right-from-bracket">Logout</i>
         </div>
  )
}

export default SideBar