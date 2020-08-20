import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import { Button } from 'react-bootstrap'
import Draggable from 'react-draggable'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
//引入自己的css
import '../css/home.scss'
function Home(props) {
  //設定計算機初始值
  const [total, setTotal] = useState(0)

  //設定按鈕顯示
  const [device, setDevice] = useState('')

  //偵測視窗顯示文字
  const handleBtnShow = function () {
    if (window.innerWidth > 768) setDevice('Computer')
    else if (window.innerWidth > 576) setDevice('Computer')
    else setDevice('Mobile')
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
              <div className="row">
                <div className="total">{total}</div>
              </div>
              <div className="row mt-2">
                <div className="row_flex">
                  <div className="circle symbol_grey">AC</div>
                  <div className="circle symbol_grey">+/-</div>
                  <div className="circle symbol_grey">%</div>
                  <div className="circle symbol_blue">&divide;</div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="row_flex">
                  <div className="circle num">7</div>
                  <div className="circle num">8</div>
                  <div className="circle num">9</div>
                  <div className="circle symbol_blue">&times;</div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="row_flex">
                  <div className="circle num">4</div>
                  <div className="circle num">5</div>
                  <div className="circle num">6</div>
                  <div className="circle symbol_blue">&minus;</div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="row_flex">
                  <div className="circle num">1</div>
                  <div className="circle num">2</div>
                  <div className="circle num">3</div>
                  <div className="circle symbol_blue">+</div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="row_flex">
                  <div className="ellipse num">0</div>
                  <div className="circle num">.</div>
                  <div className="circle symbol_blue">=</div>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
        <div className="home_helf"></div>
        <div className="calculator_mobile d-none">
          <div className="wrapper">
            <div className="row">
              <div className="total">{total}</div>
            </div>
            <div className="row mt-2">
              <div className="row_flex">
                <div className="circle symbol_grey">AC</div>
                <div className="circle symbol_grey">+/-</div>
                <div className="circle symbol_grey">%</div>
                <div className="circle symbol_blue">&divide;</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="row_flex">
                <div className="circle num">7</div>
                <div className="circle num">8</div>
                <div className="circle num">9</div>
                <div className="circle symbol_blue">&times;</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="row_flex">
                <div className="circle num">4</div>
                <div className="circle num">5</div>
                <div className="circle num">6</div>
                <div className="circle symbol_blue">&minus;</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="row_flex">
                <div className="circle num">1</div>
                <div className="circle num">2</div>
                <div className="circle num">3</div>
                <div className="circle symbol_blue">+</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="row_flex">
                <div className="ellipse num">0</div>
                <div className="circle num">.</div>
                <div className="circle symbol_blue">=</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
