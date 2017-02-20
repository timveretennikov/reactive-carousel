import React from 'react'

const CarouselElement = ({isActive, onClickCb, imagePath, caption}, context) => {
    return (
        <div className="rc-element rc-fade"
            style={{ display: isActive ? 'block' : 'none' }}
            onClick={onClickCb}>
            <img src={imagePath}
                alt="Image"
                style={{ maxHeight: context.height + 'px',
                         cursor: onClickCb ? 'pointer' : 'default'}} />
            <div className="rc-caption">{caption}</div>
        </div>
    )
}

CarouselElement.contextTypes = {
    height: React.PropTypes.number
}

export default CarouselElement