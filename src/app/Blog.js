import React from 'react'
import * as contentful from 'contentful'

import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: '9ksehkkm45mk',
    accessToken: '64b68a652631cbec8a7cc361ff42f31b26c5eeaeebba739e88dc58e94e6f2ce0'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

    render() {
        return (
            <PageContent>
              <PageHeader color="is-info" title="Code Blog">
                  Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
              </PageHeader>
              <br/>
              { this.state.posts.map(({fields}, i) =>
                  <BlogItem key={i} {...fields} />
              )}
            </PageContent>
        )
    }
}
export default Blog