import Image from 'react-bootstrap/Image';

const ImageContainer = ({ images } : any) => {
    return (    
        <div className="card-container">
            <img src={images.url}></img>
            <Image src={images.url} rounded={true} />
            <div className="information">
                <div className="row">
                    <p className="description-header col-12">
                        {images.title} - {images.date}
                    </p>
                </div>
                <div className="row">
                    <p className="description-body">
                        {images.explanation}
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default ImageContainer;