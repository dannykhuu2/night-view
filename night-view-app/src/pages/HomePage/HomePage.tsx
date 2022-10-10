import { useEffect, useState } from "react";
import { fetchImages } from "../../services/imageService";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { ImageType } from "../../services/types";
import "./HomePage.css";

const HomePage = () => {
  const [images, setImages] = useState<Array<ImageType>>([]);

  const handleFetchImages = async (count: number) => {
    fetchImages(count).then((res) => {
      const data = res.map((image: any) => {
        const { service_version, media_type, hdurl, ...temp} = image;
        return temp;
      });
      setImages(data);
    });
  }

  useEffect(() => {
    handleFetchImages(10);
  }, []);

  return (
      <>
      <div className="wrapper">
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