import { Route, Routes } from "react-router-dom";

import { myRoutes } from "./allRoute";

const MyRoutes = () => {

  return (
    <Routes>
      {
        myRoutes.map(rute => (
          <Route key={rute.path} path={rute.path} element={<rute.element />} />
        ))
      }
      <Route path='*' element={<p className="h-screen flex justify-center items-center text-2xl text-white"> 404 No Found</p>} />
    </Routes>
  )
};

export default MyRoutes; 