import React, { Component } from 'react';
import { BrowserRouter ,Route, Switch,Link } from 'react-router-dom'

//component
import Header from '../components/header'
import Footer from '../components/footer'


//container
import Home from '../containers/home'
import News from '../containers/news'

import Foreign from '../containers/foreign'
import ForeignNews from '../containers/foreign-news'

import League from '../containers/league'

import HighLight from '../containers/highlight'

import GalleryItem from '../containers/gallery-item'

import World from '../containers/world'

class App extends Component {

  render() {
    return (
     <BrowserRouter>
        <div>
          
             <Header />
         
          <Switch>
            <Route path="/news/:id" component={News} />
            <Route path="/foreign-news/:id" component={ForeignNews} />
        
            <Route exact path="/" component={Home} />
            <Route exact path="/foreign" component={Foreign} />

            <Route path="/league" component={League} />

            <Route exact path="/kpnews" component={World} />

            <Route path="/highlight" component={HighLight} />
            
          </Switch> 
          <Footer />
        </div>
     </BrowserRouter>
    );
  }
}


export default App;