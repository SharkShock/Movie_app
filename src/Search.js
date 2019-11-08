import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
    this.cancel = '';
  }
  render() {
    return (
      <div>
        <label>
          <input
            type="text"
            value=""
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
        </label>
      </div>
    )
  }
}
export default Search;


