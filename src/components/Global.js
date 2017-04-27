import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }

  search(){
    const url = 'https://www.googleapis.com/books/v1/volumes?q=HarryPotter';

    fetch(`${url}`,{method: 'GET'})//буква йо x_X
      .then(res => res.json())
      .then(json => console.log(json/*.body*/))
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Book Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a Book" //по умолчанию поле равно значению placeholder состояние пустое
              onChange={event => this.setState({query: event.target.value})}//когда значение placeholder изменено устанавливаем новое состояние для query
              onKeyPress={event => {
                if (event.key == "Enter") {
                  this.search()
                }
              }}
            />
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default Global;