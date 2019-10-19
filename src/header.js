import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {

      // Correct spelling for likes
      let like = 'like';
      if (this.props.likesToDisplay <= 1){
          like = 'like'
      }else {
          like = 'likes'
      }

      // Correct spelling for crushes
      let crush = 'crush';
      if (this.props.heartsToDisplay <= 1){
          crush = 'crush'
      }else {
          crush = 'crushes'
      }
      
      
      // Correct spelling for alerts
      let alert = 'alert';
      if (this.props.alertsToDisplay <= 1){
          alert = 'alert'
      }else {
          alert = 'alerts :('
      }

    return(
        <p>{this.props.likesToDisplay} {like} • {this.props.heartsToDisplay} {crush} • {this.props.alertsToDisplay} {alert}</p>
    )
  }
}


function mapStateToProps(state) {
  return { likesToDisplay: state.increaselikes, heartsToDisplay: state.increasehearts, alertsToDisplay: state.increasealerts }
}
  
export default connect(
  mapStateToProps, 
  null
)(Header);