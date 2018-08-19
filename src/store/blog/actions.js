/**
* Blog Actions
*/
import * as types from './types'

export function loadBlogSuccess(post) {
  const action =  { type: types.LOAD_BLOG_SUCCESS, post};
  return action;
}