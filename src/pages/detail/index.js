import React, {Component} from 'react';

import {
  DetailWrapper,
  Header,
  Content,
} from './style';


class Detail extends Component {
  render() {
    return(
      <DetailWrapper>
        <Header>我不知道将去何方，但我已在路上</Header>
        <Content>
          <div style={{textAlign:'center'}}>
            <img src="http://upload-images.jianshu.io/upload_images/10232737-9ba114db8192918c.png?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp" alt=""/>
          </div>
          <p><b>人在年轻的时候，很容易陷入迷茫。</b>完全不知道自己该如何选择道路，又无人指点迷津。遇到这种情况，很多人干脆原地不动，开始画地为牢。</p>
          <p>我在上大学时，也经历过这一阶段。那时我总感觉诸事不顺、到处碰壁，郁闷之余放弃了挣扎，随波逐流，犹如行尸走肉。</p>
          <p>时过境迁后，我为当初的碌碌无为而深感悔恨。原本是最应该轰轰烈烈的黄金年代，偏偏被我活成了窝窝囊囊的黑铁年代。</p>
          <p>当你不知道自己将去何方时，不要呆在原地胡思乱想，只管抬头挺胸、迈步上路。先让自己行动起来，比什么都重要。</p>
          <p>就像写作一样，不知道该写什么的时候，不能停笔，要勇敢地写下第一句话，然后一句接一句写下去。写着写着，你就感到思维活跃起来了。</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail;
