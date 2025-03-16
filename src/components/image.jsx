import { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          src={
            this.props.imgSrc ||
            "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
          }
          alt={this.props.imgAlt || "PlaceHolder images"}
          width="200"
        />
      </div>
    );
  }
}
