import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookingList from './components/BookingList/BookingList/BookingList';
import MyRent from './components/MyRent/MyRent/MyRent';
import AddRentHouse from './components/AddRentHouse/AddRentHouse/AddRentHouse';
import Login from './components/Login/Login';

function App() {
  // const [file, setFile] = useState(null);

  //   const handleFileChange = e => {
  //       const newFile = e.target.files[0];
  //       setFile(newFile)
  //   };

  //   const handleSubmit = (e) => {
  //       const formData = new FormData()
  //       formData.append('file', file);
  //       formData.append('title', e.target.title.value);
  //       formData.append('price', e.target.price.value);

  //       fetch('http://localhost:4000/addApartment', {
  //           method: 'POST',
  //           body: formData
  //       })
  //       .then(res => res.json())
  //       .then(success => {
  //           if(success){
  //               alert('One service successfully added')
  //           }
  //       })
  //       e.preventDefault()
  //   }

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/bookingList">
          <BookingList/>
        </Route>
        <Route path="/myRent">
          <MyRent/>
        </Route>
        <Route path="/addRentHouse">
          <AddRentHouse/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
