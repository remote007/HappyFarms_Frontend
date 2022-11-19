
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        theme: {
          palette: 'palette2' 
        }
      },
      series: [
        
      ],
      type : ""
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              palette={this.state.palette}
              options={this.props.option}
              series={this.props.series}
              type={this.props.type}
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartSection;