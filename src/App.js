import { Component } from "react";
import Button from "./components/button";
import ListItem from "./components/list";
import Image from "./components/image";
import "./styles.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      FullName: "",
      imgSrc: "",
      imgAlt: "",
    };
  }
  async getData(value) {
    try {
      console.log(`https://reqres.in/api/users/${value}`);
      let response = await axios.get(`https://reqres.in/api/users/${value}`);
      if (response.status !== 200) {
        alert("Failed to fetch data");
      } else {
        this.setState({
          email: response.data.data.email,
          FullName: `${response.data.data.first_name} ${response.data.data.last_name}`,
          imgSrc: response.data.data.avatar,
          imgAlt: `${response.data.data.first_name} ${response.data.data.last_name}-avatar`,
        });
        return response;
      }
    } catch (err) {
      console.log(err.message);
      alert("Failed to fetch data");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="button-group">
          <Button
            id={1}
            value={1}
            onClick={(event) => {
              this.getData(event.target.value);
            }}
          />
          <Button
            id={2}
            value={2}
            onClick={(event) => {
              this.getData(event.target.value);
            }}
          />
          <Button
            id={3}
            value={3}
            onClick={(event) => {
              this.getData(event.target.value);
            }}
          />
          <Button
            id={100}
            value={100}
            onClick={(event) => {
              this.getData(event.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <ListItem name={"Email"} value={this.state.email} />
          <ListItem name={"Name"} value={this.state.FullName} />
        </div>
        <div className="image-container">
          <Image imgSrc={this.state.imgSrc} alt={this.state.imgAlt} />
        </div>
      </div>
    );
  }
}
