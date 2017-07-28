import React from "react"
import Outsider from "./"
import renderer from "react-test-renderer"

test("tests work", () => {
  const component = renderer.create(<Outsider />)

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
