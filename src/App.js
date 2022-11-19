import axios from 'axios';
import React, { Component } from 'react';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      linegraphData: [],
      linegraphNO: [],
      linegraphDate: []
    }
  }
  linegraphDef = async () => {
    axios.get('http://127.0.0.1:8000/api/city_no/Tokyo/').then(res => {
        var data = res.data
        console.log(data.l);
        this.setState({linegraphNO :data.l})
        this.setState({linegraphDate :data.m})
    })
  }




  componentDidMount() {
    this.linegraphDef()
    // this.linegraphsetData()
  }

  render() {
    return (
        <>
          <Header/>

            {this.state.linegraphNO.map((d,index) => (<li key={index}>{d} </li>))}
            <CardSection data = {this.state.linegraphData}/>
           
         
        </>
    )
}
}

