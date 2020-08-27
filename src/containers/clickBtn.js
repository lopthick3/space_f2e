import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import BtnFunc from '../components/button'

const mapDispatchToProps = (dispatch) => ({
  inputNum: (num) => dispatch(actions.inputNumber(num)),
  addNum: () => dispatch(actions.addNumber()),
  subNum: () => dispatch(actions.subNumber()),
  countNum: () => dispatch(actions.countNumber()),
  resetNum: () => dispatch(actions.resetNumber()),
})
const ClickBtn = connect(
  null, // 沒有傳入 mapStateToProps ，所以用 null。
  mapDispatchToProps
)(({ inputNum, addNum, subNum, countNum, resetNum }) => (
  <div>
    <div className="row mt-2">
      <div className="row_flex">
        <BtnFunc
          text="AC"
          className="circle symbol_grey"
          onClick={(e) => {
            e.preventDefault()
            resetNum()
          }}
        />
        <BtnFunc
          text="+/-"
          className="circle symbol_grey"
          onClick={(e) => {
            e.preventDefault()
            addNum()
          }}
        />
        <BtnFunc
          text="%"
          className="circle symbol_grey"
          onClick={(e) => {
            e.preventDefault()
          }}
        />
        <BtnFunc
          text="&divide;"
          className="circle symbol_blue"
          onClick={(e) => {
            e.preventDefault()
          }}
        />
      </div>
    </div>
    <div className="row mt-2">
      <div className="row_flex">
        <BtnFunc
          text={7}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(7)
          }}
        />
        <BtnFunc
          text={8}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(8)
          }}
        />
        <BtnFunc
          text={9}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(9)
          }}
        />
        <BtnFunc
          text="&times;"
          className="circle symbol_blue"
          onClick={(e) => {
            e.preventDefault()
            subNum()
          }}
        />
      </div>
    </div>
    <div className="row mt-2">
      <div className="row_flex">
        <BtnFunc
          text={4}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(4)
          }}
        />
        <BtnFunc
          text={5}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(5)
          }}
        />
        <BtnFunc
          text={6}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(6)
          }}
        />
        <BtnFunc
          text="&minus;"
          className="circle symbol_blue"
          onClick={(e) => {
            e.preventDefault()
            subNum()
          }}
        />
      </div>
    </div>
    <div className="row mt-2">
      <div className="row_flex">
        <BtnFunc
          text={1}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(1)
          }}
        />
        <BtnFunc
          text={2}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(2)
          }}
        />
        <BtnFunc
          text={3}
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(3)
          }}
        />
        <BtnFunc
          text="+"
          className="circle symbol_blue"
          onClick={(e) => {
            e.preventDefault()
            addNum()
          }}
        />
      </div>
    </div>
    <div className="row mt-2">
      <div className="row_flex">
        <BtnFunc
          text={0}
          className="ellipse num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(0)
          }}
        />
        <BtnFunc
          text="."
          className="circle num"
          onClick={(e) => {
            e.preventDefault()
            inputNum(2)
          }}
        />
        <BtnFunc
          text="="
          className="circle symbol_blue"
          onClick={(e) => {
            e.preventDefault()
            countNum()
          }}
        />
      </div>
    </div>
  </div>
))

export default ClickBtn
