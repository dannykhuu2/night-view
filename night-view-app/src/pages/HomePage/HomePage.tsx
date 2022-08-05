import { useEffect, useState } from "react";
import { fetchImages } from "../../services/ImageService";
import ImageContainer from "../../components/ImageContainer/ImageContainer";

const HomePage = () => {
  const [images, setImages] = useState([]);

  const retrieveImages = async() => {
    fetchImages(3).then((res: any) => {
      setImages(res.data);
    })
  }
  
  useEffect(() => {
    retrieveImages();
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