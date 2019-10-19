import React, { Component } from 'react';
import { FaThumbsUp, FaRegHeart, FaExclamationTriangle } from "react-icons/fa";
import {connect} from 'react-redux';

class Footer extends Component {
  render() {
    return(
      <div>
         <FaThumbsUp
          style={{marginRight:30, color:'#9494ff', cursor:'pointer'}}
          onClick={ this.props.onIncreaseLikes }
         />
         <FaRegHeart
          style={{marginRight:30,color:'#ff647f', cursor:'pointer'}}
          onClick={ this.props.onIncreaseHearts }

         />
         <FaExclamationTriangle 
          style={{marginRight:30,color:'orange', cursor:'pointer'}}
          onClick={ this.props.onIncreaseAlerts }
         />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseLikes: function() { 
        dispatch( {type: 'increaselikes'} ) 
    },
    onIncreaseHearts: function() { 
        dispatch( {type: 'increasehearts'} ) 
    },
    onIncreaseAlerts: function() { 
        dispatch( {type: 'increasealerts'} ) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(Footer);