import React, { Component } from 'react';
import CityClass  from  './cities';


const cityClass = new CityClass();

class CityCreateUpdate extends Component {
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          cityClass.getCity(params.pk).then((c)=>{
            this.refs.Name.value = c.name;
          })
        }
      }

      handleCreate(){
        cityClass.createCity(
          {
            "name": this.refs.Name.value,
        }          
        ).then((result)=>{
          alert("City created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        cityClass.updateCity(
          {
            "pk": pk,
            "name": this.refs.Name.value,
        }          
        ).then((result)=>{
          console.log(result);
          alert("City updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              First Name:</label>
              <input className="form-control" type="text" ref='Name' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }  
}

export default CityCreateUpdate;