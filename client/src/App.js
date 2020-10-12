import React, { Component } from 'react';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          sysDescr: '',
          ip: ''
      };
  };

  handleChange = event=> {
    this.setState({ip: event.target.value});
  }  
  
  get = ()=> {
    axios.get(`https://palisz2nl8.execute-api.us-east-1.amazonaws.com/dev/snmp/get/${this.state.ip}`)
      .then(res => {
        console.log(res);
        this.setState({sysDescr: res.data.sysDescr})
      })      
  }
  
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <div>
          <div>
            <form style={{ width: "50%" }}>
              <h1>SNMP</h1>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="address">IP Address</InputLabel>
                <Input id="address" type="text" value={this.state.ip} onChange={this.handleChange} />
              </FormControl>

              <Button variant="contained" color="primary" size="medium" onClick={this.get}>
                Send
              </Button>
            </form>
          </div>
          <div><p>{this.state.sysDescr}</p></div>
        </div>
      </div>
    );  
  }
}

export default App;