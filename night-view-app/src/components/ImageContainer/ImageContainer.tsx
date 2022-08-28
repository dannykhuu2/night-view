import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { postLikeImage, postUnlikeImageWithUrl, postUnlikeImageWithId } from '../../services/imageService';
import { ImageType, LikedImage } from '../../services/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/types';

interface ImageProps {
    image: any,
    page: string
}

const ImageContainer = ({ image, page } : ImageProps) => {

    const [liked, toggleLike] = useState(page === "likes" ? true : false);

    const dispatch = useDispatch();
    //const userSelector = useSelector((state: AppState) => state.auth.user);
    
    const handleLikeClick = async () => {
        const likedImage : ImageType = {
            title: image.title,
            url: image.url,
            copyright: image.copyright,
            explanation: image.explanation
        };

        if (!liked) {
            await postLikeImage(likedImage);
        } else {
            if (page === "home") {
                console.log("home");
                console.log(image.url);
                await postUnlikeImageWithUrl(image.url)
            } else if (page === "likes") {
                console.log("likes");
                console.log(image.id);
                await postUnlikeImageWithId(image.id);
            }
        }
        toggleLike(!liked);
    }

    return (    
        <div className="card-container">
            <Image src={image.url} rounded={true} />
            <div className="information-content">
                <div className="row">
                    <p className="description-title col-12">
                        {image.title} - {image.date}
                    </p>
                </div>
                <div className="row">
                    <p className="description-body">
                        {image.explanation}
                    </p>
                </div>  
            </div>
            <Button variant="primary" onClick={() => handleLikeClick()}>
                { liked ? "Unlike" : "Like" }
            </Button>{' '}
        </div>
    )
}

export default ImageContainer;