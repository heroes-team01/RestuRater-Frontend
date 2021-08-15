import Dropdown from "react-bootstrap/Dropdown";
import CategoryCreate from "./createCategory";
import axios from "axios";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import restuData from "./resturater.json";

export class category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      heartNumber: 0,
      recipysData: [],
      restuData: restuData,
      sortedData: [],
      showSort: false,
      userSearch: "breakfast",
    };
  }

  searchChange = (e) => {
    e.preventDefault();
    this.setState({
      userSearch: e.target.value,
    });
    console.log(this.state.userSearch);
  };

  searchFunction = async () => {
    await axios
      .get(restuData)
      .then((response) => {
        console.log(response);
        this.setState({
          recipysData: response.data.results,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  functionl = async (value) => {
    await axios
      .get(restuData)
      .then((response) => {
        console.log(response);
        console.log(this.state.sortedData);
        console.log(this.state.showSort);
        this.setState({
          sortedData: response.data.results,
        });
        console.log(this.state.showSort);
      })
      .catch((error) => {
        alert(error.message);
      });
    this.state.sortedData.splice(8, this.state.sortedData.length);
    this.setState({
      showSort: true,
    });
    console.log(this.state.sortedData);
  };
  heartRate = () => {
    this.setState({
      heartNumber: this.state.heartNumber + 1,
    });
  };

  componentDidMount = async () => {
    await axios
      .get(restuData)
      .then((response) => {
        console.log(response);
        this.setState({
          recipysData: response.data.results,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <div id="category">
        <div>
          <div class="row">
            <h1 id="h1Category">CATEGORY</h1>
            <hr id="hr-photograph"></hr>

            <div class="input-group" id="searchInput">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={this.searchChange}
              />
              <button
                id="searchButton"
                type="button"
                class="btn btn-outline-primary"
                onClick={this.searchFunction}
              >
                Search
              </button>
            </div>
          </div>

          {/* <Row id="DropdownButton">
            <DropdownButton id="dropdown-basic-button" name="Favorite types">
              <Dropdown.Item
                href="#/action-1"
                value="popularity"
                id="BreakfastId"
                onClick={() =>
                  this.functionl(
                    document.getElementById("BreakfastId").getAttribute("value")
                  )
                }
              >
                {" "}
                Popularity
              </Dropdown.Item>

              <Dropdown.Item
                href="#/action-1"
                value="time"
                id="BreakfastId2"
                onClick={() =>
                  this.functionl(
                    document
                      .getElementById("BreakfastId2")
                      .getAttribute("value")
                  )
                }
              >
                Time
              </Dropdown.Item>

              <Dropdown.Item
                href="#/action-1"
                value="calories"
                id="BreakfastId3"
                onClick={() =>
                  this.functionl(
                    document
                      .getElementById("BreakfastId3")
                      .getAttribute("value")
                  )
                }
              >
                Calories
              </Dropdown.Item>
            </DropdownButton>
            <div id="DropDownList">
              {this.state.showSort &&
                this.state.sortedData.map((element) => {
                  console.log(element);
                  return (
                    <CategoryCreate
                      showBySort={true}
                      name={element.name}
                      photograph={element.photograph}
                      address={element.address}
                      object={element.likes}
                    />
                  );
                })}
            </div>
          </Row>*/}
        </div> 
        <Row id="cardCategory">
          {this.state.show &&
            this.state.recipysData.map((element) => {
              return (
                // <CategoryCreate
                <div>
                  showRecipies={true}
                  name={element.name}
                  photograph={element.photograph}
                  address={element.address}
                  object={element.likes}
                  
                  </div>
                // />
              );
            })}
        </Row>
      </div>
    );
  }
}

export default category;
