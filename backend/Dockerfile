FROM golang:alpine AS builder

RUN export GO111MODULE=on
RUN apk update && apk add --no-cache git
RUN mkdir -p /app/bin
RUN mkdir -p /app/s

RUN adduser -D -g '' appuser
WORKDIR /app
COPY . .

RUN go mod download
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /app/bin/server blog/blog_server/server.go

FROM golang:alpine
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /app/bin/server /usr/local/bin/server

USER appuser
CMD ["/usr/local/bin/server"]
