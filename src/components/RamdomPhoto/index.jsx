import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './RandomPhoto.scss'
RamdonPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onButtonRandomBlur: PropTypes.func,
};
RamdonPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onButtonRandomBlur: null,

}

function getRandomImageUrl() {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`
}

function RamdonPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onButtonRandomBlur } = props;

    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const ramdomImageUrl = getRandomImageUrl();
            onImageUrlChange(ramdomImageUrl);
        }
    }
    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onButtonRandomBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Ramdom a photo
                </Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl && <img
                    // width="200px"
                    // height="200px"
                    src={imageUrl}
                    alt="Ooops ... not found. Please click random again!"
                >
                </img>}
            </div>
        </div>
    );
}

export default RamdonPhoto;