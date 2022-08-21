import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { saveLikedImage } from '../../services/imageService';
import { LikedImage } from '../../services/types';

const ImageContainer = ({ images } : any) => {

    const [liked, toggleLike] = useState(false);
    
    const likeImage = () => {
        const likedImage : LikedImage = {
            title: images.title,
            url: images.url,
            copyright: images.copyright,
            explanation: images.explanation,
            hdurl: images.hdurl
        };
        toggleLike(!liked);
        console.log(likedImage);
        saveLikedImage(12, likedImage);
    }

    return (    
        <div className="card-container">
            <Image src={images.url} rounded={true} />
            <div className="information-content">
                <div className="row">
                    <p className="description-title col-12">
                        {images.title} - {images.date}
                    </p>
                </div>
                <div className="row">
                    <p className="description-body">
                        {images.explanation}
                    </p>
                </div>  
            </div>
            <Button variant="primary" onClick={() => likeImage()}>Like</Button>{' '}
        </div>
    )
}

export default ImageContainer;