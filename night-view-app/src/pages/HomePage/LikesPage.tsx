import { useEffect, useState } from "react";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { fetchLikedImages } from "../../services/imageService";
import { LikedImage } from "../../services/types";
import { getUser } from "../../services/userService";

const LikesPage = () => {
    const [likedImages, setLikedImages] = useState([]);

    useEffect(() => {
        getUser().then((user) => {
            fetchLikedImages(user.id).then((res) => {
                setLikedImages(res);
            });
        });
    }, []);

    return (
        <>
        <div>
          { 
            likedImages.map((image: LikedImage) => (
              <ImageContainer images={image} key={image.id} />
            ))
          }
        </div>
      </>
    )
}

export default LikesPage;