import React from "react";
import Notice from "./components/Notice";
import Output from "./components/Output";
import DataVerification from "./components/DataVerification";
import Particles from 'react-particles-js';
import ParticlesConfig from './static/witnet-particles.json';

const style_particle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};

class App extends React.Component {
  state = {
    DataSource: undefined,
    SmartContract: undefined,
    error: undefined
  }
  getData = async (e) => {
    e.preventDefault();
    const DataSource = e.target.elements.DataSource.value;
    const SmartContract = e.target.elements.SmartContract.value;

    if (DataSource && SmartContract) {
      this.setState({
        DataSource: undefined,
        SmartContract: undefined,
        msg: "Verification output will appear here (future...)"
      });
    } else {
      this.setState({
        DataSource: undefined,
        SmartContract: undefined,
        msg: "Please enter Data Source and Smart Contract values."
      });
    }
  }
  render() {
    return (
      <div>
       <Particles params={ParticlesConfig} style={style_particle} />
        <div className="box-wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 image-container">
                </div>
                <div className="col-xs-7 form-container">
                  <DataVerification getData={this.getData} />
                  <Output 
                    msg={this.state.msg}
                  />
                  <Notice />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;