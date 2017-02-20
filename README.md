```javascript
import Carousel from 'reactive-carousel'
import CarouselElement from 'reactive-carousel/carouselElement'

const YourComponent = () => {
    return (
        <Carousel width={600} height={300}>
            <CarouselElement imagePath="someUrl..."
                             caption="caption text"
                             onClickCb={()=>{}} />
        </Carousel>
    )
}
```

Just put some CarouselElements inside the Carousel. Optionally you can specify width, height on a Carousel tag. Specify imagePath, caption and a onClickCb for CarouselElement.
That's it :)

