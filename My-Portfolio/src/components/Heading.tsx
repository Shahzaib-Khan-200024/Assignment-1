import React from 'react';

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
    return (
        <div className='text-center text-5xl pb-8 font-semibold' data-aos="zoom-in-up">
            <p className='inline-block pb-2'>{title}</p>
        </div>
    );
}

export default Heading;
