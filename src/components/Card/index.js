import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
  post,
  onClick
}) => (
  <section className="card">
    <div className="card__thumbnail" onClick={() => onClick(post.url)}>
      <img src={post.thumbnail}></img>
    </div>
    <div className="card__data">
      <span className="posted-by">Posted by <b>{post.author}</b></span>
      <span className="title">{post.title}</span>
      <div className="likes-comments">
        <span className="likes">Ups: {post.ups}</span>
        <span className="comments">Comments: {post.num_comments}</span>
      </div>
    </div>
  </section>
)

Card.propTypes = {
  post: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
}

export default Card
