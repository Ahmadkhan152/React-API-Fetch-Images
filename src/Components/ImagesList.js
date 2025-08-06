import ShowImage from "./ShowImage"
import '../css/ImagesList.css';

const ImagesList = ( { imageList } ) => {
    
    let allImages = imageList.map( (singleImage, index) => {
        return <ShowImage imgSource = { singleImage.urls.small } key={index} />   
    })
    
    return (
        <div className = "imagesListContainer">
            <div className = "imagesList">
                { allImages }
            </div>
        </div>
    )
}
export default ImagesList;