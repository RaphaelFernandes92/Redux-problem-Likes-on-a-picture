import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer'
import { FaThumbsUp, FaRegHeart, FaExclamationTriangle } from "react-icons/fa";

// Imports Redux :
import increaselikes from './reducers/increaselikes.reducer';
import increasehearts from './reducers/increasehearts.reducer';
import increasealerts from './reducers/increasealerts.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({increaselikes, increasehearts, increasealerts}));


export default class App extends Component {
  render() {
    return(

      // Redux store
      <Provider store={store}>

          <div style={{color:'white' }}>
            <header style={{paddingLeft:30}}>
              <h1>Problem React - Redux</h1>
              <p>Using redux, increase the counters when clicking on the icons under the image. <br/>
                <FaThumbsUp style={{color:"#9494ff"}}/> must increase likes,<br/>
                <FaRegHeart style={{color:"#ff647f"}}/> must increase cruches,<br/>
                and <FaExclamationTriangle style={{color:"orange"}}/> must increase alerts.</p>
            </header>
            <br/>


            <div style={{backgroundColor:'#515f6c', color:'black', paddingLeft:30, paddingTop:10, paddingBottom:40}}>

              
              {/* Component Header : */}
              <Header />

              
              <img src='https://cdn.pixabay.com/photo/2016/02/05/14/00/aurora-borealis-1181004_1280.jpg' style={{width:800}} alt="flowers tulip fields"></img> 

              {/* Component footer : */}
              <Footer />


            </div>

          </div>

      </Provider>
    )
  }
}



