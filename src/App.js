import axios from 'axios';
import React, { Component } from 'react';
import CardSection from './components/CardSection';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city : "Paris",
      option1 : {theme:{palette: 'palette2' }},
      option2 : {theme:{palette: 'palette7' }},
      option3 : {theme:{palette: 'palette8' }},
      series1_bar : [{data:[]}],
      series2_line : [{data:[]}],
      series3_pie : [{data:[]}]
    };
  }

fetchData = async () => {
        axios.get('http://127.0.0.1:8000/api/city_no/'+this.state.city+'/').then(res => {
        var data = res.data;
        console.log(data.so2_list);
        this.setState({series1_bar: [{ data:data.co_list }]} );
        this.setState({series2_line: [{ data:data.no_list }]} );
        this.setState({series3_pie: [{ data:data.so2_list }]} )
    })
  }

  handleSubmit = async (event)=>{
    console.log(event.target.value)
    if (event.target.value==="new"){
      window.open("http://127.0.0.1:8000/", "_blank")
    }
    else{
      await this.setState({city: event.target.value, option1 : this.state.option1,
        option2 : this.state.option2,
        option3 : this.state.option3,
        series1_bar : this.state.series1_bar,
        series2_line : this.state.series2_line,
        series3_pie : this.state.series3_pie})
      this.fetchData()
    }
  }

componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
        <>
          <Header handle_submit={this.handleSubmit}/>
          <CardSection 
               option1 = {this.state.option1}
               option2 = {this.state.option2}
               option3 = {this.state.option3}
               series1_bar = {this.state.series1_bar}
               series2_line = {this.state.series2_line}
               series3_pie = {this.state.series3_pie}
          />             
        </>
    )
}
}

