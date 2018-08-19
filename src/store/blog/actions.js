/**
* Blog Actions
*/
import * as types from './types'

export function loadBlogSuccess(posts) {
  const action =  { type: types.LOAD_BLOG_SUCCESS, posts};
  return action;
}