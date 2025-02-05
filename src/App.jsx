import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./app/Landing";


const App  =  ()=>{
  const routes = [
    {
      path : "/",
      element : <Landing />
    },
    {
      path : "/main",
      element : <Landing />
    }
  ];
  return(
    <>
         <BrowserRouter>
            <Routes>
              {
                routes.map((route, index)=>(
                  <Route path={route.path} key={index} element={route.element} />
                ))
              }
            </Routes>
         </BrowserRouter>
    </>
  )
}

export default App;

