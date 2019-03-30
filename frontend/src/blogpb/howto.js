componentDidMount() {
  console.log("redered")
  let request = new CreateBlogRequest()
  let blog = new Blog()
  blog.setTitle("web grpc")
  request.setBlog(blog)
  service.createBlog(request, {}, (err, resp) => {
    console.log("error", err)
    window.RESP = resp
    console.log("response", resp.getBlog().getTitle())
  })
}
