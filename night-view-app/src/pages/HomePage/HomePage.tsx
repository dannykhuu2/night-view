import { useEffect, useState } from "react";
import { fetchImages } from "../../services/imageService";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { ImageType } from "../../services/types";

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
    handleFetchImages(3);
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