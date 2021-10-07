import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Resetpassword from '~/components/partials/account/resetpassword';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const Resetpasswordpage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Reset Password',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Register">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Resetpassword />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default Resetpasswordpage;