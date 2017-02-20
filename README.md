```javascript
import Carousel, {CarouselElement} from 'reactive-carousel'


const YourComponent = () => {
    return (
        <Carousel width={600} height={300}
                  autoplay={true} interval={4000}>
            <CarouselElement imagePath="someUrl..."
                             caption="caption text"
                             onClickCb={()=>{}}
                             autoplay={true}
                             showAutoplayButton={true} />
        </Carousel>
    )
}
```

Just put some CarouselElements inside the Carousel. Optionally you can specify width, height on a Carousel tag. Specify imagePath, caption and a onClickCb for CarouselElement.
That's it :)

Optionally you can turn on autoplay by setting autoplay atribute of Carousel to true and you can specify the interval of autoplaying in ms. Default value is 3000
To allow a user to pause/resume autoplay specify 'showAutoplayButton' attribute with a value 'true'

