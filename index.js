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
    const { component: C = "div", ...props } = { ...this.props }
    delete props.onOutsideClick

    return <C ref={c => (this.container = c)} {...props} />
  }
}
