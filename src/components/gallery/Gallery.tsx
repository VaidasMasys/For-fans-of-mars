import React, { useEffect } from 'react';
import Header from '../header/Header';
import { useDispatch } from 'react-redux';
import { fetchRoverPhotos } from '../../store/marsApi/asyncActions';

const Gallery = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRoverPhotos());
    }, []);
    return (
        <div>
            <Header />
            This is galery
        </div>
    );
};

export default Gallery;
