import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { postLikeImage, postUnlikeImageWithUrl, postUnlikeImageWithId } from '../../services/imageService';
import { ImageType, LikedImage } from '../../services/types';
import { useDispatch, useSelector } from 'react-redux';
import { removeLikedImageAction } from './store/imageSlice';
import "./ImageContainer.css";

interface ImageProps {
    image: any,
    page: string
}

const ImageContainer = ({ image, page } : ImageProps) => {

    const [liked, toggleLike] = useState(page === "likes" ? true : false);

    const dispatch = useDispatch();
    
    const handleLikeClick = async () => {
        const likedImage : ImageType = {
            title: image.title,
            url: image.url,
            copyright: image.copyright,
            explanation: image.explanation,
            date: image.date
        };

        if (!liked) {
            await postLikeImage(likedImage);
        } else {
            if (page === "home") {
                await postUnlikeImageWithUrl(image.url)
            } else if (page === "likes") {
                dispatch(removeLikedImageAction({imageId: image.id}));
            }
        }
        toggleLike(!liked);
    }

    return (    
        <div className="card">
            <div className="card-body">
                <Image src={image.url} rounded={true} />
                <h4 className="card-title">{image.title}</h4>
                <p className="card-date">{image.date}</p>
                <p className="card-description">{image.explanation}</p>
            </div>
            <button className="card-btn" onClick={() => handleLikeClick()}>
                    { liked ? "Unlike" : "Like" }
            </button>{' '}
        </div>
    )
}

export default ImageContainer;