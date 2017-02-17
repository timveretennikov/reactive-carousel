import React from 'react'
import CarouselElement from './carouselElement'
import './carousel.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.showSlide = this.showSlide.bind(this)

        this.state = {
            slideIndex: 0,
            imgs: React.Children.map(this.props.children, (child) => {
                let c = React.cloneElement(child, {style: {maxHeight: this.props.height + 'px'}})
                return c
            })
        }
    }

    showSlide(n) {
        if (n > this.state.imgs.length - 1) {
            this.setState({ slideIndex: 0 })
        } else if (n < 0) {
            this.setState({ slideIndex: this.state.imgs.length - 1 })
        } else {
            this.setState({ slideIndex: n })
        }
    }

    render() {
        return (
            <div className="reactive-carousel" style={{width: this.props.width + 'px', height: this.props.height + 'px'}}>
                {this.state.imgs.map((img, index) => {
                    return (
                        <CarouselElement img={img}
                            isHidden={index !== this.state.slideIndex}
                            key={index} />
                    )
                })}
                <div className="rc-dot-container">
                    {this.state.imgs.map((img, index) => {
                        return (
                            <span className={('rc-dot' + (this.state.slideIndex === index ? ' rc-active' : ''))}
                                  onClick={() => { this.showSlide(index)}}
                                  key={index} />
                        )
                    })}
                </div>
                <a className="prev-nav"
                    href="#" 
                    onClick={() => { this.showSlide(this.state.slideIndex - 1)}}>&#10094;</a>
                <a className="next-nav"
                    href="#"
                    onClick={() => { this.showSlide(this.state.slideIndex + 1)}}>&#10095;</a>
            </div>
        )
    }
}

export default Carousel