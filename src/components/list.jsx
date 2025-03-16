import { Component } from "react";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.name} :{" "}
            <span id={this.props.name}> {this.props.value} </span>
          </li>
        </ul>
      </div>
    );
  }
}
