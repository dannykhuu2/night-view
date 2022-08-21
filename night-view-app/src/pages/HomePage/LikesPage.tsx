import { useEffect, useState } from "react";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { fetchLikedImages } from "../../services/imageService";
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
            likedImages.map((image: any) => (
              <ImageContainer images={image} key={image.url} />
            ))
          }
        </div>
      </>
    )
}

export default LikesPage;