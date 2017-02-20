```javascript
import Carousel, {CarouselElement} from 'reactive-carousel'


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

