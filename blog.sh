#!/bin/bash

mkdir .webgrpc-output
protoc \
				--js_out=import_style=commonjs:.webgrpc-output \
				--grpc-web_out=import_style=commonjs,mode=grpcweb:.webgrpc-output \
				backend/blog/blogpb/blog.proto

rm -rf frontend/src/services/blogpb
cp -R .webgrpc-output/backend/blog/blogpb frontend/src/services
rm -rf .webgrpc-output
