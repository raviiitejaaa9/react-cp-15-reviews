// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
    reqCount: 0,
  }

  filteredReviews = reviewsList => {
    const {count} = this.state
    console.log(count)
    // console.log(reviewsList)
    const reqReview = reviewsList[count]
    console.log(reqReview)
    return reqReview
  }

  onClickLeft = () => {
    console.log('left-arrow triggered')
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRight = () => {
    console.log('right-arrow triggered')
    const {count} = this.state

    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    // console.log(count)
    // console.log(reviewsList)

    const reqReview = this.filteredReviews(reviewsList)

    // console.log(reqReview)

    const {imgUrl, username, companyName, description} = reqReview

    // console.log(imgUrl)

    return (
      <div className="app-container">
        <h1 className="head"> Reviews </h1>
        <div className="profile-container">
          <button
            type="button"
            onClick={this.onClickLeft}
            className="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="reviewContainer">
            <img src={imgUrl} className="image" alt={username} />
            <p className="username"> {username} </p>
            <p className="company-name"> {companyName} </p>
            <p className="description"> {description} </p>
          </div>

          <button
            type="button"
            onClick={this.onClickRight}
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
