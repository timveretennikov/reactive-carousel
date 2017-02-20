import React from 'react'
import '../style.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.showSlide = this.showSlide.bind(this)
        this.startAutoplay = this.startAutoplay.bind(this)
        this.restartAutoplay = this.restartAutoplay.bind(this)
        this.stopAutoplay = this.stopAutoplay.bind(this)

        this.state = {
            slideIndex: 0,
            elements: this.props.children,
            isAutoplayPaused: false
        }
    }

    getChildContext() {
        return {
            height: this.props.height
        }
    }

    componentDidMount() {
        if (this.props.autoplay) {
            this.startAutoplay()
        }
    }

    startAutoplay() {
        this.setState({ isAutoplayPaused: false })
        this.setState({
            autoplay: setInterval(() => {
                this.showSlide(this.state.slideIndex + 1)
            }, this.props.interval ? this.props.interval : 3000)
        })
    }

    stopAutoplay() {
        if (this.state.autoplay) {
            this.setState({ isAutoplayPaused: true })
            clearInterval(this.state.autoplay)
        }
    }

    restartAutoplay() {
        this.stopAutoplay()
        this.startAutoplay()
    }

    showSlide(n, isCalledByAutoplay = false) {
        if (!isCalledByAutoplay) {
            this.restartAutoplay()
        }
        if (n > this.state.elements.length - 1) {
            this.setState({ slideIndex: 0 })
        } else if (n < 0) {
            this.setState({ slideIndex: this.state.elements.length - 1 })
        } else {
            this.setState({ slideIndex: n })
        }
    }

    render() {
        return (
            <div className="reactive-carousel" style={{ width: this.props.width + 'px', height: this.props.height + 'px' }}>
                {this.state.elements.map((element, index) => {
                    return React.cloneElement(element, {
                        isActive: index === this.state.slideIndex,
                        key: index
                    })
                })}
                <div className="rc-dot-container">
                    {this.state.elements.map((element, index) => {
                        return (
                            <span className={('rc-dot' + (this.state.slideIndex === index ? ' rc-active' : ''))}
                                onClick={() => { this.showSlide(index) }}
                                key={index} />
                        )
                    })}
                </div>
                {this.props.autoplay && this.props.showAutoplayButton ? (
                    <div className="rc-autoplay-controls">
                        {this.state.isAutoplayPaused ? (
                            <div className="rc-play-border"
                                 onClick={() => {
                                    this.setState({ isAutoplayPaused: false })
                                    this.startAutoplay()
                                }}>
                                <div className="rc-play"></div>
                            </div>
                        ) : (
                                <div className="rc-play-border"
                                     onClick={() => {
                                        this.setState({ isAutoplayPaused: true })
                                        this.stopAutoplay()
                                    }}>
                                    <div className="rc-pause" ></div>
                                </div>
                            )}
                    </div>
                ) : null}
                <a className="prev-nav"
                    href="#"
                    onClick={() => { this.showSlide(this.state.slideIndex - 1) }}>&#10094;</a>
                <a className="next-nav"
                    href="#"
                    onClick={() => { this.showSlide(this.state.slideIndex + 1) }}>&#10095;</a>
            </div>
        )
    }
}

Carousel.childContextTypes = {
    height: React.PropTypes.number
}

export default Carousel