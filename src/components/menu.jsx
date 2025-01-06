const Menu = ({ darkmode})=>{
    return(
        <>
        <div className='flex flex-col gap-1'>
              <div className={`${darkmode ? 'bg-black' : 'bg-white'}  h-1 w-7 rounded`}></div>
              <div className={`${darkmode ? 'bg-black' : 'bg-white'}  h-1 w-7 rounded`}></div>
              <div className={`${darkmode ? 'bg-black' : 'bg-white'}  h-1 w-7 rounded`}></div>
            </div>  
        </>
    )
}

export default Menu;