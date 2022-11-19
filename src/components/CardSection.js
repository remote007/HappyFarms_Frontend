import React, { Component } from 'react'
import ChartSection from './ChartSection'

export class CardSection extends Component {

    render() {
        return (
            <div>

                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important' }}>
                    Amount of Environment Componets
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "38rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Nitrogen Oxide</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                            <ChartSection type="bar" series = {this.props.series1_bar} option={this.props.option1} />
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "38rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Carbon Monoxide</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                            <ChartSection type="line" series = {this.props.series2_line} option={this.props.option2}/>
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "38rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Sulphur Dioxide</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                            <ChartSection type="area" series={this.props.series3_area} option={this.props.option3}   />
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "38rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}></h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }} >
                            <ChartSection type="area" series = {this.props.series4_line} option={this.props.option4}/> 
                            </p>
                        </div>
                    </div>

                </section>

            </div>
        )
    }
}

export default CardSection