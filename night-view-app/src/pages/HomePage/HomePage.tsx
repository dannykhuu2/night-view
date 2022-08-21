import { useEffect, useState } from "react";
import { fetchImages } from "../../services/imageService";
import ImageContainer from "../../components/ImageContainer/ImageContainer";

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(3).then((res) => {
      setImages(res);
    });
  }, []);

  return (
      <>
      <div>
        { 
          images.map((image: any) => (
            <ImageContainer images={image} key={image.url} />
          ))
        }
      </div>
    </>
  );
}

export default HomePage;