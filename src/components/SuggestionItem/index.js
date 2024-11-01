import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  arrowFun = () => {
    const {searchDetails, onArrow} = this.props
    const {suggestion} = searchDetails
    onArrow(suggestion)
  }

  render() {
    const {searchDetails} = this.props
    const {suggestion} = searchDetails

    return (
      <li>
        <div className="search-item">
          <p className="searched">{suggestion}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
            onClick={this.arrowFun}
          />
        </div>
      </li>
    )
  }
}

export default SuggestionItem
