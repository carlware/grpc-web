import React from 'react'

class Layout extends React.Component {

  render() {
    return (
      <div className="layout">
      <h1>Testing WEB GRPC</h1>
        <main>
        {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout
