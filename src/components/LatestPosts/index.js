import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"
import YouTube from "../../components/YouTube"
import VideoBox from "../../components/VideoBox"

const defaultNumberOfPosts = 6

const LatestPosts = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2 className={ styles.latestPosts }>
        { "Latest News and Events" }
      </h2>
        <VideoBox />
      {/*<YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />*/}
      <PagesList pages={ latestPosts } />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
