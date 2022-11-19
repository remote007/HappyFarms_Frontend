// import  React, { Component } from  'react';
// import { BrowserRouter } from  'react-router-dom'
// import { Routes, Route, Link } from  'react-router-dom'
// import  CityList  from  './CitiesList'
// import  CityCreateUpdate  from  './CityCreateUpdate'
// import './App.css';

// const BaseLayout = () => (
//   <div className="container-fluid">
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Django React Demo</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a className="nav-item nav-link" href="/">CITY</a>
//       <a className="nav-item nav-link" href="/city">CREATE CITY</a>
      
//     </div>
//   </div>
// </nav>  

//     <div className="content">
//       <Routes>
//       <Route path="/" exact element={<CityList/>} ></Route>
//       <Route path="/city/:pk" exact  element={<CityCreateUpdate/>} ></Route>
//       <Route path="/city/" exact element={<CityCreateUpdate/>} ></Route>
//       </Routes>
//     </div>

//   </div>
// )

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <BaseLayout/>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
import axios from 'axios';
import React, { Component } from 'react';
// import CardSection from './components/CardSection';
// import ChartSection from './components/ChartSection';
// import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: []
    }
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData = async () => {
    axios.get('http://127.0.0.1:8000/api/components/').then(res => {
        var data = res.data
        console.log(data.data[0]);
        this.setState({Data : data.data})
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
        <>
         <ul>
            {this.state.Data.map(d => (<li key={d.id}>{d.city} , {d.co}</li>))} 
            </ul>
        </>
    )
}
}

