import './App.css';
import getData from './GetMovies.js';
import React, { Component } from 'react';

class Movie_list extends Component {
  constructor(props){
      super(props);
      this.state = {
          data:{},
          page : 1,
          searchId : 'for'
      }
  }
  

  componentWillMount() {
      getData(this.state.searchId,this.state.page).then(response => this.setState({data:response}))
}

  onClickNext= () => {
      var pageNum = this.state.page + 1;
      this.setState({page:pageNum});
      getData(this.state.searchId,this.state.page).then(response => this.setState({data:response}));
  }

  onClickPrevious= () => {
      var pageNum = this.state.page - 1;
      this.setState({page:pageNum});
      getData(this.state.searchId,this.state.page).then(response => this.setState({data:response}));
  }




render() {

  return (
    <div className="App" >

      <div className="cover">
      <h1>List of movies</h1>
      </div>

      <div className="pandn">     
      <a href="#" className="Previous" onClick={this.onClickPrevious}>Previous</a>     
      <a href="#" className="Next" onClick={this.onClickNext}>Next</a>
      </div>
     
      <div className="Table">
      { this.state.data.Search !== undefined ? (this.state.data.Search.map(m => 
       <tr>
           <td className="result">
           <p> <img src={require('./img/movie-ico.png')} /> Title : {m.Title} &nbsp;&nbsp; | &nbsp;&nbsp; Year : {m.Year}</p>
           <p> <img src={require('./img/line.png')} /></p>  
                    
           </td>
       </tr>

       
      )): ('')     
      }    
      </div>
      <div className="pandn">     
      <a href="#" className="Previous" onClick={this.onClickPrevious}>Previous</a>     
      <a href="#" className="Next" onClick={this.onClickNext}>Next</a>
      </div>
   </div>
  );
}
}


export default Movie_list;
