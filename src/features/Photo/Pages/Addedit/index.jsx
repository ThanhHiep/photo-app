import React from 'react';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../Components/PhotoForm';
import './Addedit.scss';
Addedit.propTypes = {

};

function Addedit(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />
            <div className="photo-edit__form">
                <PhotoForm></PhotoForm>
            </div>
        </div>
    );
}

export default Addedit;