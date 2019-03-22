#!/bin/bash

protoc \
				--proto_path=${GOPATH}/src \
				--proto_path=${GOPATH}/src/github.com/google/protobuf/src \
				--proto_path=. \
				--go_out=plugins=grpc:. \
				--govalidators_out=. \
				-I/usr/local/include -I. \
				-I$GOPATH/src \
				-I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
				--js_out=import_style=commonjs:./output \
				--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:./output \
				blog/blogpb/blog.proto

