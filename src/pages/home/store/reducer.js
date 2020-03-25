
import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '简友广场',
    imgUrl: 'https://upload.jianshu.io/collections/images/1686183/icons8-%E5%9F%8E%E5%B8%82%E5%B9%BF%E5%9C%BA-48.png?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  },{
    id: 2,
    title: '想法',
    imgUrl: 'https://upload.jianshu.io/collections/images/9/2009031609140019346.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  },{
    id: 3,
    title: '散文',
    imgUrl: 'https://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  },{
    id: 4,
    title: '哲思',
    imgUrl: 'https://upload.jianshu.io/collections/images/39/332293730045332541.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  },{
    id: 5,
    title: '一直写到老的故事',
    imgUrl: 'https://upload.jianshu.io/collections/images/2147/123.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  },{
    id: 6,
    title: '故事',
    imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  },{
    id: 7,
    title: '文集',
    imgUrl: 'https://upload.jianshu.io/collections/images/1867077/crop1584974220544.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  }],
  articleList: [{
    id: 1,
    title: '我不知道将去何方，但我已在路上',
    desc: '人在年轻的时候，很容易陷入迷茫。完全不知道自己该如何选择道路，又无人指点迷津。遇到这种情况，很多人干脆原地不动，开始画地为牢。',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/10232737-9ba114db8192918c.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '剪不断的手足情深，割不裂的血脉相连',
    desc: '有一种关心不请自来，有一种默契无可代替。 有很长时间没网购了，今天突然接了个电话叫我出去拿快递，有点好奇，是谁发来的呢？ 当我好奇的把快递检查个...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/19716661-52b3aa9e35c19ad2.JPEG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 3,
    title: '《哪吒之魔童转世》观后感——冯琴',
    desc: '老早在头条推送上都看过关于《哪吒之魔童降世》介绍，一直想看，昊子明天开学了，今天去了却心愿吧，早早便在网上订好了三张票，准备着一家人一起...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/16420966-579ef71fd1bbfc3a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 4,
    title: '职场里升职加薪的人，都在偷偷做这件事',
    desc: '最近，一个95后小朋友跟我吐槽，自己毕业不久，在职场里感觉很无力。自己学历普通，没什么过人的能力，提升的很慢。更重要的是，感觉每天工作好像都做不...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/1897860-50c268f3234e2949?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 5,
    title: '浅谈互联网项目的系统架构演进',
    desc: '一、基础知识 1.1计算机   计算机的组成是有五部分完成的，分别是：输入设备、输出设备、存储器，存储器里面有运算器和控制器 阿里巴巴在2009...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/22550017-64aa723fd2aeebc1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 6,
    title: '愿你眼里有光，肚里有粮，心中有爱，过好仅此一生。',
    desc: '今天不分享书籍，跟大家聊聊读书那些事儿。                    1 昨天，我问安安，推送文章中，什么样的封面最吸引你，一眼就想点...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/22364852-fc33f100a03eff1d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
})

export default (state=defaultState,action)=> {
  return state;
}
