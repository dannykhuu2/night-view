import { useEffect, useState } from "react";
import { fetchImages } from "../../services/imageService";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { ImageType } from "../../services/types";

const HomePage = () => {
  const [images, setImages] = useState<Array<ImageType>>([]);

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
            <ImageContainer image={image} page="home" key={image.url} />
          ))
        }
      </div>
    </>
  );
}

export default HomePage;