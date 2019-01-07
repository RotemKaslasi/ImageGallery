import React from 'react'
import './ImageList.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageList = (props) => {

    if (props.images.length === 0) return <h6> </h6>

    const images = props.images.photo.map(pic => {
        var srcPath = 'http://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
        return <ImageCard className="image" src={srcPath} alt={pic.title} key={pic.id} />

    });
    return (
        <div className="ImgsListContainer">
        <div className="ImgsList">
            {images}
        </div>
        </div>
    )
};

export default ImageList;


