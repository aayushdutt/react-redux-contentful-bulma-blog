import * as contentful from 'contentful'
import * as actions from './blog/actions'
const {space, accessToken} = require('./../config')
const client = contentful.createClient({
  space,
  accessToken
})
const error = err => console.log(err)
export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading())
    return client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error => {
        console.log(error)
        dispatch(actions.blogLoading(false))
      })
  }
}