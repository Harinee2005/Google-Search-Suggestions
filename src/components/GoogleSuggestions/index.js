import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchedValue: ''}

  getInput = event => {
    this.setState({searchedValue: event.target.value})
  }

  onClickArrow = suggestion => {
    this.setState({searchedValue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchedValue} = this.state

    const filteredList = suggestionsList.filter(eachValue =>
      eachValue.suggestion.toLowerCase().includes(searchedValue.toLowerCase()),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="container">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-tag"
              onChange={this.getInput}
              value={searchedValue}
            />
          </div>
          <ul>
            {filteredList.map(eachSearch => (
              <SuggestionItem
                searchDetails={eachSearch}
                key={eachSearch.id}
                onArrow={this.onClickArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
