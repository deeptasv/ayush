import * as React from 'react';

import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import Next from './components/Next';
import  Home  from'./components/Home' ;
import Completion from './components/completion';
import Homenav from './components/Homenav';
import Madd from './components/Madd';
import ExpertList from './components/ExpertList';
import RegistrationStatusPage from './components/RegistrationStatusPage';
function App() {
  return (
    <>
    <Routes>
    <Route 
          path="/" 
          element={
            <>
              <Homenav /> 
              <Home />
            </>
          } 
        />

      <Route path='/reg' element={<Registration />}/>
      <Route path='/next' element={<Next/>}/>
      <Route path='/complete' element={<Completion/>}/>
      <Route path='/madd' element={<Madd />}/>
      <Route path='/ExpertList' element={<ExpertList/>}/>
      <Route path='/statreg' element={<RegistrationStatusPage/>}/>
      </Routes>
    </>
  );
}

export default App;
