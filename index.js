import React, { Component } from "react"

export default class extends Component {
  constructor() {
    super()
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  handleOutsideClick(e) {
    e.stopPropagation()
    e.preventDefault()

    if (this.container.contains(e.target)) return

    return this.props.onOutsideClick()
  }

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, true)
  }

  render() {
    return <div ref={c => (this.container = c)} {...this.props} />
  }
}
