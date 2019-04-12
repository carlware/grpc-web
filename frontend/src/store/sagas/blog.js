import { put } from "redux-saga/effects";

const actions = require("../redux/blog").Actions

const {
  CreateBlogRequest,
  Blog,
  ListBlogRequest,
  UpdateBlogRequest,
  ReadBlogRequest,
  DeleteBlogRequest } = require('../../services/blogpb/blog_pb.js')
const { BlogServiceClient } = require('../../services/blogpb/blog_grpc_web_pb.js')
let service = new BlogServiceClient('http://localhost:8080');

const getList = () => {
  return new Promise((resolve, reject) => {
    const posts = []
    service.listBlog(new ListBlogRequest(), {}, (err, resp) => {
      if(err !== null) reject(err)
      if(resp === null) return posts
      resp.getBlogsList().forEach((ele) => {
        posts.push({
          id: ele.getId(),
          title: ele.getTitle(),
          content: ele.getContent(),
          author: ele.getAuthorId(),
        })
      })
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
      if (err !== null) reject(err)
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

const updateBlog = (post) => {
  return new Promise((resolve, reject) => {
    let request = new UpdateBlogRequest()
    let blog = new Blog()
    blog.setTitle(post.title)
    blog.setAuthorId(post.author)
    blog.setContent(post.content)
    blog.setId(post.id)
    request.setBlog(blog)
    service.updateBlog(request, {}, (err, resp) => {
      if (err !== null) reject(err)
      resolve(post)
    })
  })
}

const readBlog = (postId) => {
  return new Promise((resolve, reject) => {
    let request = new ReadBlogRequest()
    request.setBlogId(postId)
    service.readBlog(request, {}, (err, resp) => {
      console.log(err)
      console.log(resp)
      if (err !== null) reject(err)
      const res = {
        id: resp.getBlog().getId(),
        author: resp.getBlog().getAuthorId(),
        title: resp.getBlog().getTitle(),
        content: resp.getBlog().getContent(),
      }
      resolve(res)
    })
  })
}

export function* fetchPostsSaga(action) {
  console.log(' ===== fetch post saga =====')
  console.log('action', action)
  console.log(' ===== fetch post saga =====')
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

export function* readPostSaga(action) {
  console.log(action)
  yield put(actions.readPostStart())
  try {
    const response = yield readBlog(action.postId)
    yield put(actions.readPostSuccess(response))
  } catch(err){
    console.log(err)
    yield put(actions.readPostFail(err))
  }
}

export function* updatePostSaga(action) {
  console.log(action)
  yield put(actions.updatePostStart())
  try {
    const response = yield updateBlog(action.post)
    yield put(actions.updatePostSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(actions.updatePostFail(err))
  }
}
