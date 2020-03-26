import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './store';

import {
  DetailWrapper,
  Header,
  Content,
} from './style';



class Detail extends Component {

  componentDidMount() {
    this.props.getDetail();
  }
  render() {
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}} />

      </DetailWrapper>
    )
  }
};

const mapStateToProps = (state)=> ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
});

const mapDispatchProps = (dispatch)=> ({
  getDetail() {
    dispatch(actionCreators.getDetailAction());
  }
})

export default connect(mapStateToProps,mapDispatchProps)(Detail);
