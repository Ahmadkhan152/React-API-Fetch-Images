import '../css/ShowImage.css';

const ShowImage = ( {imgSource} ) => {
    return (
        <div className="showImageContainer">
            <img src = {imgSource} alt = 'unsplash images'/>
        </div>

    );
}

export default ShowImage;