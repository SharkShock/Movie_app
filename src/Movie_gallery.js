import './App.css';
import getData from './GetMovies.js';
import React, { Component } from 'react';


class Movie_gallery extends Component {
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
    pageNum = pageNum >= 15625 ? this.state.page : this.state.page + 1;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClickPrevious = () => {
    var pageNum = this.state.page - 1;
    pageNum = pageNum <= 0 ? this.state.page : this.state.page - 1; 
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClickfirst = () => {
    var pageNum = this.setState.page = 1;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClickLast = () => {
    var pageNum = this.setState.page = 15625;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClick1 = () => {
    var pageNum = this.setState.page = this.state.page + 1;
    pageNum = pageNum > 15625 ? this.state.page : this.state.page + 1; 
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClick2 = () => {
    var pageNum = this.setState.page = this.state.page + 2;
    pageNum = pageNum > 15625 ? this.state.page : this.state.page + 2;
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClickminus1 = () => {

    var pageNum = this.setState.page = this.state.page-1;
    pageNum = pageNum <= 0 ? this.state.page : this.state.page - 1; 
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  onClickminus2 = () => {
    var pageNum = this.setState.page = this.state.page-2;
    pageNum = pageNum <= 0 ? this.state.page : this.state.page - 2; 
    this.setState({ page: pageNum });
    getData(this.state.searchId, this.state.page).then(response => this.setState({ data: response }));
  }

  render() {


    return (
      
      <div>
        <div className="cover">
          <h1> <img alt="" src={require('./img/cover.png')} /> Movies Gallery </h1>
        </div>
        <div>
          <table>
            {this.state.data.Search !== undefined ? (this.state.data.Search.map(m =>
              <tr>
                <td className="result">
                  <div className="item">
                    <img alt="" src={m.Poster} />
                    <p >Title : {m.Title}</p>
                    <p>Year : {m.Year}</p>
                  </div>
                </td>
              </tr>

            )) : ('')
            }
          </table>
          <div className="pandn">
          <input type="button" value="Previous" className="Previous" onClick={this.onClickPrevious} />
          <input type="button" value="First page" className="pagBtn" onClick={ this.onClickfirst} />
          {this.state.page - 2 > 0 ?  <input type="button" value={ this.state.page -2} className="pagBtn" onClick={ this.onClickminus2} />: ""}
          {this.state.page - 1 > 0 ? <input type="button" value={ this.state.page - 1} className="pagBtn" onClick={ this.onClickminus1} /> : ""}
          <input type="button" value={ this.state.page} className="CurpagBtn" onClick={ this.state.page} />
          {this.state.page + 1 <= 15625 ? <input type="button" value={ this.state.page + 1} className="pagBtn" onClick={ this.onClick1} /> : ""}
          {this.state.page + 2 <= 15625 ? <input type="button" value={ this.state.page + 2} className="pagBtn" onClick={ this.onClick1} /> : ""}
          <input type="button" value="Last page" className="pagBtn" onClick={ this.onClickLast} />
          <input type="button" value="Next" className="Next" onClick={this.onClickNext} />
        </div>   
        </div>
      </div>
    );
  }
}


export default Movie_gallery;