import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import RamdonPhoto from '../../components/RamdomPhoto';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
    form: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
}

function RandomPhotoField(props) {
    const { form, field, label } = props;
    const { name, value, onBlur, } = field;

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    function handleImageUrlChange(newImageUrl) {
        form.setFieldValue(name, newImageUrl);
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RamdonPhoto
                name={name}
                imageUrl={value}
                onButtonRandomBlur={onBlur}
                onImageUrlChange={handleImageUrlChange}
            />
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />

        </FormGroup>
    );
}

export default RandomPhotoField;