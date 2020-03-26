import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { actionCreators } from './store';

import {
  DetailWrapper,
  Header,
  Content,
} from './style';



class Detail extends Component {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
  render() {

    console.log(this.props);
    console.log(this.props.match.params.id);
    // console.log(this.props.location.search); //'?id=4'
    // const idValue = parseInt(this.props.location.search.replace(/[^0-9]/ig,''),10);
    // console.log(idValue);

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
  getDetail(id) {
    dispatch(actionCreators.getDetailAction(id));
  }
});

export default connect(mapStateToProps,mapDispatchProps)(withRouter(Detail));
