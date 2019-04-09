import { put } from "redux-saga/effects";

const actions = require("../actions/index")

const { CreateBlogRequest, Blog, ListBlogRequest, DeleteBlogRequest } = require('../../services/blogpb/blog_pb.js')
const { BlogServiceClient } = require('../../services/blogpb/blog_grpc_web_pb.js')
let service = new BlogServiceClient('http://localhost:8080');

const getList = () => {
  return new Promise((resolve, reject) => {
    const posts = []
    service.listBlog(new ListBlogRequest(), {}, (err, resp) => {

      if(err !== null && err !== undefined) reject(err)
      resp.getBlogsList().forEach((ele) => {
        posts.push({
          id: ele.getId(),
          title: ele.getTitle(),
          content: ele.getContent(),
          author: ele.getAuthorId(),
        })
      })
      console.log(posts)
      resolve(posts)
    })
  })
}

const createBlog = (post) => {
  return new Promise((resolve, reject) => {
    let request = new CreateBlogRequest()
    let blog = new Blog()
    blog.setTitle(post.title)
    blog.setAuthorId(post.author)
    blog.setContent(post.content)
    request.setBlog(blog)
    service.createBlog(request, {}, (err, resp) => {
      if (err !== null || err !== undefined) reject(err)
      post.id = resp.getBlog().getId()
      resolve(post)
    })
  })
}

const deleteBlog = (postId) => {
  return new Promise((resolve, reject) => {
    let request = new DeleteBlogRequest()
    request.setBlogId(postId)
    service.deleteBlog(request, {}, (err, resp) => {
      console.log(err)
      console.log(resp)
      if (err !== null) reject(err)
      const res = resp.getBlogId()
      resolve(res)
    })
  })
}

export function* fetchPostsSaga(action) {
  yield put(actions.fetchPostsStart())
  try {
    const response = yield getList()
    yield put(actions.fetchPostsSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(actions.fetchPostsFail(error))
  }
}

export function* createPostSaga(action) {
  console.log(action)
  yield put(actions.createPostStart())
  try {
    const response = yield createBlog(action.post)
    yield put(actions.createPostSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(actions.createPostFail(err))
  }
}

export function* deletePostSaga(action) {
  console.log(action)
  yield put(actions.deletePostStart())
  try {
    const response = yield deleteBlog(action.postId)
    yield put(actions.fetchPosts())
    yield put(actions.deletePostSuccess(response))
  } catch(err){
    console.log(err)
    yield put(actions.deletePostFail(err))
  }
}
