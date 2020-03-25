import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ListItem,
  ListInfo,
  LoadMode
} from '../style';

import {actionCreators} from '../store';

class List extends Component {
  render() {
    const {list, page, getMoreList} = this.props;
    return(
      <div>
        {
          list.map((item,index)=>(
            <ListItem key={index}>
              <img className="pic" src={item.get('imgUrl')} alt=""/>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}></p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMode onClick={()=>{getMoreList(page)}}>阅读更多</LoadMode>
      </div>
    )
  }
}

const mapStateToProp = (state)=> ({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
});

const mapDispatchToProps = (dispatch)=> ({
   getMoreList(page) {
    dispatch(actionCreators.getMoreListAction(page));
  }
})

export default connect(mapStateToProp,mapDispatchToProps)(List);
