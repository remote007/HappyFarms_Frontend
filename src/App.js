import axios from 'axios';
import React, { Component } from 'react';
import CardSection from './CardSection';
import ChartSection from './ChartSection';
import Header from './Header';

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
          <Header/>

            {this.state.Data.map(d => (<li key={d.id}><CardSection Date={d.date} CO={d.co} SO2={d.so2} NO={d.no}/></li>))} 

           
         
        </>
    )
}
}

