import './App.css';
import getData from './GetMovies.js';
import React, { Component } from 'react';


class Movie_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      page: 1,
      searchId: 'for'
    }
  }


  componentWillMount() {
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }))
  }

  onClickNext = () => {
    var pageNum = this.state.page + 1;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClickPrevious = () => {
    var pageNum = this.state.page - 1;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }



  onClick1 = () => {
    var pageNum = this.setState.page = 1;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClick2 = () => {
    var pageNum = this.setState.page = 2;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClick3 = () => {
    var pageNum = this.setState.page = 3;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClick4 = () => {
    var pageNum = this.setState.page = 4;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClick5 = () => {
    var pageNum = this.setState.page = 5;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }


  render() {

    return (
      <div>
        <div className="cover">
          <h1> <img alt="" src={require('./img/cover.png')} /> List of movies </h1>
        </div>
        <table>
          {this.state.data.Search !== undefined ? (this.state.data.Search.map(m =>
            <tr className="movielist">
              <td className="result">
                <p className> <img alt="" src={require('./img/movie-ico.png')} /> Title : {m.Title} &nbsp;&nbsp; | &nbsp;&nbsp; Year : {m.Year}</p>
              </td>
            </tr>


          )) : ('')
          }
        </table>
        <div className="pandn">
          <input type="button" value="Previous" className="Previous" onClick={this.onClickPrevious} />
          <input type="button" value="1" className="pagBtn" onClick={this.onClick1} />
          <input type="button" value="2" className="pagBtn" onClick={this.onClick2} />
          <input type="button" value="3" className="pagBtn" onClick={this.onClick3} />
          <input type="button" value="4" className="pagBtn" onClick={this.onClick4} />
          <input type="button" value="5" className="pagBtn" onClick={this.onClick5} />
          <input type="button" value="Next" className="Next" onClick={this.onClickNext} />
        </div>
      </div>
    );
  }
}


export default Movie_list;
