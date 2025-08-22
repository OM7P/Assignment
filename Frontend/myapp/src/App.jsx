
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import UserFormPage from './components/UserFormPage'
// import DisplayPage from './components/DisplayPage'

// function App() {

//   return (
//    <div>
//      <Routes>
//             <Route path="/" element={<UserFormPage />} />
//             <Route path="/display-page" element={<DisplayPage />} />
//             {/* Add more routes as needed */}
//           </Routes>
//    </div>
//   )
// }

// export default App


import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserFormPage from './components/userformpage'
import DisplayPage from './components/DisplayPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserFormPage />} />
        <Route path="/display-page" element={<DisplayPage />} /> 
        {/* Add more routes as needed */}
      </Routes>
      {/* // <UserFormPage/> */}
    
    </div>
  )
}

export default App
