import { Link } from "react-router-dom";

const Bottom = ()=>{
    return(
        <>   
      

         <div className="sm:flex md:flex md:flex-col space-y-5 md:space-y-1.5 mb-10 "> 
            
            <p className="text-xl font-sans">I keep my <span className="px-2 text-decoration-line: underline"><Link target="_blank" to="https://x.com/0xkartikk">twitter </Link> </span> updated with all my active projects. Besides coding I like tinkering </p>
            
            <p className="text-xl font-sans flex">around with tech, playing sports and travelling.</p>
            
           
            <p className="text-xl font-sans ">You can also reach me at <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmHZfCXJWsJrJvGhNNWjnmqpNPwjdlVCXBfZVfpmktdKdCqTCrqQRcdZvxxzZDFtnScdDlG"></Link>  <span className="cursor-pointer text-blue-400 px-2 ext-decoration-line: underline">dodakartik26@gmail.com</span></p>
           
        </div>
              

              
        </>
    )
}

export default Bottom;