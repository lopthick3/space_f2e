import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import { Button } from 'react-bootstrap'
import Draggable from 'react-draggable'
import ViewNumber from '../containers/viewNumber'
import ClickBtn from '../containers/clickBtn'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//action
import {
  addNumber,
  subNumber,
  resetNumber,
  countNumber,
  inputNumber,
} from '../actions/actions'
//引入自己的css
import '../css/home.scss'

function Home(props) {
  //設定按鈕顯示
  const [device, setDevice] = useState('')

  //偵測視窗顯示文字
  const handleBtnShow = function () {
    if (window.innerWidth > 768) {
      setDevice('Computer')
    } else if (window.innerWidth > 576) {
      setDevice('Computer')
      console.log('computer')
    } else {
      setDevice('Mobile')
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleBtnShow)
    handleBtnShow()
    return () => {
      window.removeEventListener('resize', handleBtnShow)
    }
  }, [])

  //開手機版計算機
  const handleCalShow = function () {
    $('.calculator_mobile').toggleClass('d-none')
    $('.calculator_computer').addClass('d-none')
  }
  //關手機版計算機
  useEffect(() => {
    $('.home_helf').click(function () {
      $('.calculator_mobile').addClass('d-none')
    })
  }, [])

  //開電腦版計算機
  const handleComShow = function () {
    $('.calculator_computer').toggleClass('d-none')
    $('.calculator_mobile').addClass('d-none')
  }

  //關電腦版計算機
  // useEffect(() => {
  //   $('.home').click(function () {
  //     $('.calculator_computer').addClass('d-none')
  //   })
  // }, [])

  return (
    <>
      <div className="home">
        {device === 'Computer' ? (
          <Button variant="primary" size="lg" onClick={handleComShow}>
            {device}
          </Button>
        ) : (
          <Button variant="secondary" size="lg" onClick={handleCalShow}>
            {device}
          </Button>
        )}
        <Draggable>
          <div className="calculator_computer">
            <div className="wrapper">
              <ViewNumber />
              <ClickBtn />
            </div>
          </div>
        </Draggable>
        <div className="home_helf"></div>
        <div className="calculator_mobile d-none">
          <div className="wrapper">
            <ViewNumber />
            <ClickBtn />
          </div>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (store) => {
  return { calculator: store.calculator }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addNumber,
      subNumber,
      resetNumber,
      countNumber,
      inputNumber,
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
