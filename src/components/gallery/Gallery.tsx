import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoverPhotos } from '../../store/marsApi/asyncActions';

const Gallery = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRoverPhotos());
    }, []);
    return <div>This is galery</div>;
};

export default Gallery;
