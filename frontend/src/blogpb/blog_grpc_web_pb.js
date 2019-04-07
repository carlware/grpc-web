/**
 * @fileoverview gRPC-Web generated client stub for blog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.blog = require('./blog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.blog.BlogServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.blog.BlogServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.CreateBlogRequest,
 *   !proto.blog.CreateBlogResponse>}
 */
const methodInfo_BlogService_CreateBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.CreateBlogResponse,
  /** @param {!proto.blog.CreateBlogRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.CreateBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.CreateBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.CreateBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.CreateBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.createBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/CreateBlog',
      request,
      metadata,
      methodInfo_BlogService_CreateBlog,
      callback);
};


/**
 * @param {!proto.blog.CreateBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.CreateBlogResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.createBlog =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createBlog(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.ReadBlogRequest,
 *   !proto.blog.ReadBlogResponse>}
 */
const methodInfo_BlogService_ReadBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.ReadBlogResponse,
  /** @param {!proto.blog.ReadBlogRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.ReadBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.ReadBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.ReadBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.ReadBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.readBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/ReadBlog',
      request,
      metadata,
      methodInfo_BlogService_ReadBlog,
      callback);
};


/**
 * @param {!proto.blog.ReadBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.ReadBlogResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.readBlog =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.readBlog(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.UpdateBlogRequest,
 *   !proto.blog.UpdateBlogResponse>}
 */
const methodInfo_BlogService_UpdateBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.UpdateBlogResponse,
  /** @param {!proto.blog.UpdateBlogRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.UpdateBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.UpdateBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.UpdateBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.UpdateBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.updateBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/UpdateBlog',
      request,
      metadata,
      methodInfo_BlogService_UpdateBlog,
      callback);
};


/**
 * @param {!proto.blog.UpdateBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.UpdateBlogResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.updateBlog =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateBlog(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.DeleteBlogRequest,
 *   !proto.blog.DeleteBlogResponse>}
 */
const methodInfo_BlogService_DeleteBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.DeleteBlogResponse,
  /** @param {!proto.blog.DeleteBlogRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.DeleteBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.DeleteBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.DeleteBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.DeleteBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.deleteBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/DeleteBlog',
      request,
      metadata,
      methodInfo_BlogService_DeleteBlog,
      callback);
};


/**
 * @param {!proto.blog.DeleteBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.DeleteBlogResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.deleteBlog =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteBlog(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.ListBlogRequest,
 *   !proto.blog.ListBlogResponse>}
 */
const methodInfo_BlogService_ListBlog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.ListBlogResponse,
  /** @param {!proto.blog.ListBlogRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.ListBlogResponse.deserializeBinary
);


/**
 * @param {!proto.blog.ListBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.blog.ListBlogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.ListBlogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.listBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/ListBlog',
      request,
      metadata,
      methodInfo_BlogService_ListBlog,
      callback);
};


/**
 * @param {!proto.blog.ListBlogRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.ListBlogResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.listBlog =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listBlog(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.blog.GetEventRequest,
 *   !proto.blog.GetEventResponse>}
 */
const methodInfo_BlogService_GetEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.blog.GetEventResponse,
  /** @param {!proto.blog.GetEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.GetEventResponse.deserializeBinary
);


/**
 * @param {!proto.blog.GetEventRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.blog.GetEventResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.getEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/blog.BlogService/GetEvent',
      request,
      metadata,
      methodInfo_BlogService_GetEvent);
};


/**
 * @param {!proto.blog.GetEventRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.blog.GetEventResponse>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.getEvent =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/blog.BlogService/GetEvent',
      request,
      metadata,
      methodInfo_BlogService_GetEvent);
};


module.exports = proto.blog;

