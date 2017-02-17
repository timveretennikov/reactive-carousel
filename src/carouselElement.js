import React from 'react'

const CarouselElement = ({isHidden, img}) => {
    return (
        <div className="rc-element rc-fade" style={{display: isHidden ? 'none' : 'block'}}>
            {img}
            <div className="rc-caption">{img.props.caption}</div>
        </div>
    )
}

export default CarouselElement