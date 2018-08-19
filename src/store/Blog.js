import * as contentful from 'contentful'
import * as actions from './blog/actions'
const client = contentful.createClient({
  space: '9ksehkkm45mk',
  accessToken: '64b68a652631cbec8a7cc361ff42f31b26c5eeaeebba739e88dc58e94e6f2ce0'
})
const error = err => console.log(err)
export function loadBlog() {
  return dispatch =>
    client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error)
}