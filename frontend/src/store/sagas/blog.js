import { put } from "redux-saga/effects";

const actions = require("../actions/index")

const { CreateBlogRequest, Blog, ListBlogRequest } = require('../../services/blogpb/blog_pb.js')
const { BlogServiceClient } = require('../../services/blogpb/blog_grpc_web_pb.js')
let service = new BlogServiceClient('http://localhost:8080');

const getList = () => {
  return new Promise((resolve, reject) => {
    const stream = service.listBlog(new ListBlogRequest(), {})

    const posts = []
    stream.on('data', (resp, err) => {
      if(err !== undefined) reject(err)
      posts.push({
        id: resp.getBlog().getId(),
        title: resp.getBlog().getTitle(),
        content: resp.getBlog().getContent(),
      })
    })
    stream.on('end', () => {
      resolve(posts)
    })
  })
}

export function* fetchPostsSaga(action) {
  yield put(actions.fetchPostsStart());
  try {
    // let request = new CreateBlogRequest()
    // let blog = new Blog()
    // blog.setTitle("web grpc")
    // request.setBlog(blog)
    // service.createBlog(request, {}, (err, resp) => {
    //   console.log("error", err)
    //   window.RESP = resp
    //   console.log("response", resp.getBlog().getTitle())
    // })
    const response = yield getList()
    const fetchedPosts = [];
    response.forEach((item) => {
      fetchedPosts.push({
        ...item
      })
    })
    yield put(actions.fetchPostsSuccess(fetchedPosts));
  } catch (error) {
    console.log(error)
    yield put(actions.fetchPostsFail(error));
  }
}
