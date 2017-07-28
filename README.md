# react-outsider
A component for observing clicks outside an element

## WIP

## Usage
```js
import Outsider from "react-outsider";

export default class extends React.Component {
  constructor() {
    super();
    this.state = { contentShown: false }
  }

  render() {
    return this.state.contentShown ? (
      <Outsider
        onOutsideClick={
          this.setState(({ contentShown }) => ({
            contentShown: !contentShown
          }))
        }
      >
        Some content
      </Outsider>
    ) : (
      <div />
    )
  }
}
```

## License
MIT, Michael Chan
