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
      <div className="Table">
  {   //<tr>
        //<th className="title">Title</th>
        //<th className="year">Year</th>
      //</tr>
  } 
      { this.state.data.Search !== undefined ? (this.state.data.Search.map(m => 
       <tr>
           <td className="result">
           <p>Year : {m.Year}</p>
           <p>Title : {m.Title}</p>
           <p>____________________</p>           
           </td>

       </tr>
      )): ('')     
      }    
      </div>
      <p>
      <br></br>
      <a href="#" className = "Previous" onClick={this.onClickPrevious}>Previous</a>      
      <a href="#" className = "Next" onClick={this.onClickNext}>Next</a>
      <br></br>
      <br></br>
      </p>
   </div>
  );
}
}


export default Movie_list;
