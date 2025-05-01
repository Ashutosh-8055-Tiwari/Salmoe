
'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';

const Terms = () => {
    const setting = useSelector(state => state.setting);
    const { t } = useTranslation();

    if (setting?.setting === null) {
        return <Loader screen='full' />;
    }

    return (
        <section id='terms' className='terms'>
            <div className='container'>
                <div 
                    className='terms-container' 
                    dangerouslySetInnerHTML={{ 
                        __html: setting?.setting?.terms_conditions 
                    }}
                />
            </div>
        </section>
    );
};

export default Terms;