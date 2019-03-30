import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import Loader from 'react-loader-spinner'

import Card from 'Components/Card'
import Chips from 'Components/Chips'

import {subreddits} from './constants'

class HomeComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedChip: subreddits[0].id,
      modalOpen: false,
      selectedImg: ''
    }
  }

  componentDidMount() {
    const {selectedChip} = this.state
    this.props.fetchList(selectedChip)
  }

  onSelectSubreddit = (id) => {
    this.props.fetchList(id)
    this.setState({selectedChip: id})
  }

  onThumbnailClick = (url) => {
    this.setState({
      modalOpen: true,
      selectedImg: url
    })
  }

  onCloseModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    const {selectedChip, modalOpen, selectedImg} = this.state
    const posts = this.props.data && this.props.data.children || []
    const numPosts = posts.length

    return (
      <div>
        <div className="chip-collection">
          {
            subreddits.map(subreddit => (
              <Chips
                key={subreddit.id}
                name={subreddit.name}
                action={() => this.onSelectSubreddit(subreddit.id)}
                active={selectedChip === subreddit.id}
              />
            ))
          }
        </div>
        {!this.props.loading ? <div>
          {
            numPosts ? <div className="card-collection">
              {
                posts.map((post, index) => post.data.thumbnail === 'self' ? null : <Card
                  key={index}
                  post={post.data}
                  onClick={this.onThumbnailClick}
                />)
              }
            </div> : <div className="empty-message">No posts found</div>
          }
        </div> : <div className="loader">
          <Loader
            type="Oval"
            color="#00BFFF"
            height="50"
            width="50"
          />
        </div>}

        <Modal open={modalOpen} onClose={this.onCloseModal} center>
          <h2>Image</h2>
          <img src={selectedImg} />
        </Modal>
      </div>
    )
  }

}

HomeComponent.propTypes = {
  fetchList: PropTypes.func.isRequired,
  data: PropTypes.shape({
    children: PropTypes.array
  }),
  loading: PropTypes.bool
}

export default HomeComponent
