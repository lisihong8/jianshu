import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;


export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  // background: url("../../statics/logo.png");
  // 多行文本里嵌变量
  background: url(${logoPic});
  background-size: contain;
`;


export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px; 
    font-size: 16px;
    &.focused {
      background: #999;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  padding: 0 42px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-left: 20px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all .5s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all .5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 260px;
  // height: 100px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  padding: 0 15px 15px 15px;
  box-sizing: border-box;
  background: #fff;
  &:after {
    position: absolute;
    left: 35px;
    top: -8px;
    content: '';
    border-bottom: 9px solid #fff;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
  }
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  font-size: 14px;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor:pointer;
  .spin {
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 3px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
