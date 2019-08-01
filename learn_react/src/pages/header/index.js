/**
 * @Created by Jason
 * @Date: 2019/7/29 21:22
 */
import React, {Component} from 'react'
import styled from '../../style/test.module.styl'
class Header extends Component{
  constructor(props){
    super(props)
    this.state= {}
  }


  render(){
    let {name,age} = this.props
    return (
      <div className={styled.main}>
        <p>
          <strong>姓名:</strong>
          <span>{name}</span>
        </p>
        <p>
          <strong>年龄:</strong>
          <span>{age}</span>
        </p>
        {this.props.children}
      </div>
    )
  }
}

export default Header
