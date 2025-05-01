'use client'
import React from 'react';
import { useSelector } from 'react-redux';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Loader from '../../../components/loader/Loader';

import Head from 'next/head';


const Policy = () => {
    const setting = useSelector(state => state.setting);
    const params = useParams();
    const policy_type = params.policy_type;
    const { t } = useTranslation();

    if (setting.setting === null) {
        return <Loader screen='full' />;
    }

    // Define the title and content based on policy_type
    const getPolicyTitle = () => {
        switch (policy_type) {
            case 'privacy-policy':
                return t("privacy_policy");
            case 'returns-and-exchanges-policy':
                return t("recharge_and_exchange_policy");
            case 'shipping-policy':
                return t("shipping_policy");
            case 'cancellation-policy':
                return t("cancellation_policy");
            default:
                return '';
        }
    };

    const getPolicyContent = () => {
        switch (policy_type) {
            case 'privacy-policy':
                return setting.setting.privacy_policy;
            case 'returns-and-exchanges-policy':
                return setting.setting.returns_and_exchanges_policy;
            case 'shipping-policy':
                return setting.setting.shipping_policy;
            case 'cancellation-policy':
                return setting.setting.cancellation_policy;
            default:
                return '';
        }
    };

    return (
        <section id='policy' className='policy'>

        <Head>
            <title>{getPolicyTitle()}- Kashmirt Trout</title>
        </Head>
            {/* <div className='cover'>
                <Image src={coverImg.src} alt="cover" layout='responsive' className='img-fluid' width={100} height={100}/>
                <div className='title'>
                    <h3><span className='active'>{getPolicyTitle()}</span></h3>
                    <span>
                        <Link href="/" passHref>
                            <span className='text-light text-decoration-none'>{t("Home")} /</span>
                        </Link>
                    </span>
                    <span className='active'>{getPolicyTitle()}</span>
                </div>
            </div> */}
            <div className='container'>
                <div
                    className='policy-container'
                    dangerouslySetInnerHTML={{ __html: getPolicyContent() }}
                ></div>
            </div>
        </section>
    );
};

export default Policy;
