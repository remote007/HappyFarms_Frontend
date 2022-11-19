import  React, { Component } from  'react';
import  CityClass  from  './cities';

const  cityClass  =  new  CityClass();

class  CityList  extends  Component {

constructor(props) {
	super(props);
	this.state  = {
		cities: [],
		nextPageURL:  ''
	};
	this.nextPage  =  this.nextPage.bind(this);
	this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
	var  self  =  this;
	cityClass.getCities().then(function (result) {
		console.log(result);
		self.setState({ cities:  result.data, nextPageURL:  result.nextlink})
	});
}
handleDelete(e,pk){
	var  self  =  this;
	cityClass.deleteCity({pk :  pk}).then(()=>{
		var  newArr  =  self.state.cities.filter(function(obj) {
			return  obj.pk  !==  pk;
		});
		
		self.setState({cities:  newArr})
	});
}

nextPage(){
	var  self  =  this;
	console.log(this.state.nextPageURL);		
	cityClass.getCitiesByURL(this.state.nextPageURL).then((result) => {
		self.setState({ cities:  result.data, nextPageURL:  result.nextlink})
	});
}
render() {

	return (
		<div  className="cities--list">
			<table  className="table">
			<thead  key="thead">
			<tr>
				<th>#</th>
				<th>Name</th>
			</tr>
			</thead>
			<tbody>
			{this.state.cities.map( c  =>
				<tr  key={c.pk}>
				<td>{c.pk}  </td>
				<td>{c.name}</td>
				<td>
				<button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
				<a  href={"/cities/" + c.pk}> Update</a>
				</td>
			</tr>)}
			</tbody>
			</table>
			<button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
		</div>
		);
  }
}
export  default  CityList;