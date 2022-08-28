import { useEffect } from "react";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { LikedImage } from "../../services/types";
import { useDispatch, useSelector } from 'react-redux';
import { setLikedImagesAction } from "../../components/ImageContainer/store/imageSlice";
import { AppState } from "../../store/types";

const LikesPage = () => {
    const dispatch = useDispatch();
    const likedImagesSelector = useSelector((state: AppState) => state.images.likedImages);

    useEffect(() => {
      dispatch(setLikedImagesAction({userId: 12}));
    }, []);

    return (
        <>
        <div>
          { 
            likedImagesSelector.likes.map((image: LikedImage) => (
              <ImageContainer image={image} page="likes" key={image.id} />
            ))
          }
        </div>
      </>
    )
}

export default LikesPage;