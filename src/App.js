import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Schedule from './components/Schedule'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/schedul" component={Schedule} />
          <Route exact path="/contact" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
