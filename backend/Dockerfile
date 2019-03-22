FROM golang:alpine AS builder

RUN export GO111MODULE=on
RUN apk update && apk add --no-cache git
RUN mkdir -p /app

RUN adduser -D -g '' appuser
WORKDIR /app
COPY . .

RUN go mod download
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/server blog/blog_server/server.go

FROM scratch
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder $GOPATH/go/bin/server $GOPATH/go/bin/server

USER appuser
ENTRYPOINT ["/go/bin/server"]
