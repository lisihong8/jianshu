import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ListItem,
  ListInfo,
} from '../style';

class List extends Component {
  render() {
    return(
      <div>
        {
          this.props.list.map((item,index)=>(
          <ListItem key={item.get('id')}>
            <img className="pic" src={item.get('imgUrl')} alt=""/>
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}></p>
            </ListInfo>
        </ListItem>
        ))
      }
       </div>
    )
  }
}

const mapStateToProp = (state)=> ({
  list: state.getIn(['home','articleList'])
})

export default connect(mapStateToProp,null)(List);
