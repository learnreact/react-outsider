import React from "react"
import ReactDOM from "react-dom"
import Outsider from "./"
import renderer from "react-test-renderer"

test("add 'click' listener when mounted", () => {
  document.body.innerHTML = "<div id='root'></div>"

  const mockFn = jest.fn()
  ReactDOM.render(
    <Outsider onOutsideClick={mockFn} component="MyComponent" />,
    document.getElementById("root")
  )

  console.log(document.getElementById("root"))
  // jquery(document).click()
  // expect(mockFn.mock.calls.length).toBe(1)
})
