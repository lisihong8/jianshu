import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  ToppicWrapper,
  ToppiciTtem,
} from '../style';



class Topic extends Component {
  
  render() {
    const { list } = this.props;
    return(
      <ToppicWrapper>
        {
          list.map((item,index)=>(
            <ToppiciTtem key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" className="topic-pic"/>
              {item.get('title')}
            </ToppiciTtem>
          ))
        }
      </ToppicWrapper>
    )
  }
}

const mapStateToProps = (state)=> ({
  list: state.getIn(['home','topicList'])
})

export default connect(mapStateToProps,null)(Topic);
