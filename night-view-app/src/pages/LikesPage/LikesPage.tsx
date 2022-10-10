import { useEffect } from "react";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { LikedImage } from "../../services/types";
import { useDispatch, useSelector } from 'react-redux';
import { setLikedImagesAction } from "../../components/ImageContainer/store/imageSlice";
import { AppState } from "../../store/types";
import "./LikesPage.css";

const LikesPage = () => {
    const dispatch = useDispatch();
    const likedImagesSelector = useSelector((state: AppState) => state.images.likedImages);

    useEffect(() => {
      dispatch(setLikedImagesAction());
    }, []);

    return (
      <>
        {likedImagesSelector.likes.length > 0
          ? 
            <div className="wrapper">
            { 
              likedImagesSelector.likes.map((image: LikedImage) => (
                <ImageContainer image={image} page="likes" key={image.id} />
              ))
            }
            </div>
          :
            <div>
              <h2>You do not have any liked images</h2>
            </div>
        }
      </>
    )
}

export default LikesPage;