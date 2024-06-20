import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../pages/home';
import Main from '../layouts/Main';
import Video from '../pages/video';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />}/>
          <Route path='/video' element={<Video />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
