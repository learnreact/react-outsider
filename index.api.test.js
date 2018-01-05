import React from "react"
import Outsider from "./"
import renderer from "react-test-renderer"

test("renders", () => {
  const subject = renderer.create(<Outsider />)
  expect(subject).toMatchSnapshot()
})

test("renders with children", () => {
  const subject = renderer.create(
    <Outsider>
      Hi, I'm <em>children</em>!
    </Outsider>
  )
  expect(subject).toMatchSnapshot()
})

test("renders with non-native api props removed", () => {
  const subject = renderer.create(
    <Outsider
      className="some-class"
      id="myId"
      style={null}
      onOutsideClick={() => {}}
      component="span"
    />
  )
  expect(subject).toMatchSnapshot()
})

test("renders as provided native 'component'", () => {
  const subject = renderer.create(<Outsider component="span" />)
  expect(subject.toJSON().type).toBe("span")
})

test("renders as provided custom 'component'", () => {
  const MyComponent = <section />
  const subject = renderer.create(<Outsider component="MyComponent" />)
  expect(subject.toJSON().type).toBe("MyComponent")
})
