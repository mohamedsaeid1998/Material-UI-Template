import NotFound from './components/NotFound/NotFound';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import {Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} >
      <Route index element={<Home/>} />
      <Route path='create' element={<Create/>} />
      <Route path="*" element={<NotFound/>} />

    </Route>

  )
);
function App() {
  return <>
  <RouterProvider router={router} />
  </>
}

export default App;
