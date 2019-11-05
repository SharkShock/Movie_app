import React, { Component } from 'react';
import './App.css';
import getData from './GetMovies.js';

class Movies extends Component {
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
           <tr>
               <th className="title">Title</th>
               <th className="year">Year</th>
           </tr>
        { this.state.data.Search !== undefined ? (this.state.data.Search.map(m => 
         <tr className="result">
             <td className="title_result">
             {m.Title}
             </td>
             <td className="year_result">
             {m.Year}
             </td>
         </tr>
        )): ('')     
        }    
        </div>
        <br></br>
        <a href="#" className = "Previous" onClick={this.onClickPrevious}>Previous</a>      
        <a href="#" className = "Next" onClick={this.onClickNext}>Next</a>

     </div>
    );
  }
}

export default Movies;
