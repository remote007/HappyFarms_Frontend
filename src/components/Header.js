import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#D3F308"}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCity'
                             style={{ width: "fit-content" }} onChange={this.props.handle_submit}>
                            <option value="city" disabled={true}>Select City</option>
                            <option value="Paris">Paris </option>
                            <option value="Tokyo">Tokyo </option>
                            <option value="London">London </option>
                            <option value="new">Add New City</option>
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md' , color: '#080900' }} href="/">HappyFarms Dashboard</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header