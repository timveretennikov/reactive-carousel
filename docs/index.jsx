/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react'
import ReactDOM from 'react-dom'

import 'purecss/build/pure.css'
import './main.css'
import '../style.css'

import Carousel from '../src'
import CarouselElement from '../src/carouselElement'
// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <Carousel width={450}
      height={250}>
      <CarouselElement onClickCb={() => { alert('Hello!') }}
        imagePath="http://placehold.it/350x250/4286f4/000000"
        caption="Hello 1" />
      <CarouselElement onClickCb={() => { alert('Hello! 2') }}
        imagePath="http://placehold.it/450x350/e33cf2/000000"
        caption="Hello 2" />
      <CarouselElement onClickCb={() => { alert('Hello! 3') }}
        imagePath="http://placehold.it/450x250/3bed58/000000"
        caption="Hello 3" />
      <CarouselElement onClickCb={() => { alert('Hello! 4') }}
        imagePath="http://placehold.it/450x150/e8382c/000000"
        caption="Hello 4" />
      <CarouselElement onClickCb={() => { alert('Hello! 5') }}
        imagePath="http://placehold.it/450x250/2ee4e8/000000"
        caption="Hello 5" />
    </Carousel>
  </div>,
  document.getElementById('app')
)
