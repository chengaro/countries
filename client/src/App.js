import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Countries from './components/Countries'
import Country from './components/Country'

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Countries} />
          <Route exact path="/country/:alpha3Code" component={Country} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
