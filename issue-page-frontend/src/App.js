import React from 'react';
import './App.css';
import IssuePage from './issuePage/issuePage'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
function App() {

  // library.add(fab, faCheckSquare)

  return (
    <div className="App ">
      <IssuePage />
    </div>
  );
}

export default App;
