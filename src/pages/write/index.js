import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends Component {
  render() {
    const {loginState} = this.props;
    if(loginState) {
      return(
        <div>可以开始写文章了!!!!!!!!</div>
      )
    } else {
      return <Redirect to="/login"/>
    }
    
  }
};

const mapStateToProps = (state)=> ({
  loginState : state.getIn(['login','login'])
});

export default connect(mapStateToProps,null)(Write);
