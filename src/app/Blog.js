import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'

class Blog extends React.Component {

  render() {
    console.log(this.props.blog)
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        </PageHeader>
        <PageContent>
          {/* { this.props.blog.posts.map(({fields}, i) =>
            <BlogItem key={i} {...fields} />
          )} */}
        </PageContent>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.blog)
  return {
    blog: state.blog
  }
}


export default connect(mapStateToProps)(Blog)