import React from 'react'
import * as contentful from 'contentful'
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
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        )}
      </div>
    )
  }
}
export default Blog