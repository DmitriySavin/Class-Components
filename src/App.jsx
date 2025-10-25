import React from 'react'
import Counter from './components/Counter/Counter'
import ColorPicker from './components/ColorPicker/ColorPicker'
import colorpickerdata from './colorpicker.json'

class Greeting extends React.Component {
  render() {
    return (
      <h1>  hello {this.props.name}</h1>
    )
  }
}

function App() {
  

  return (
    <>
      {/* <Greeting name='Anton!' /> */}
      {/* <Counter /> */}
      <ColorPicker data={colorpickerdata} />
    </>
  )
}

export default App
