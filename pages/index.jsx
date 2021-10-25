import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';
import Product from '~/components/elements/products/Product';
import { connect } from 'react-redux';
import { login, logOut } from '~/store/auth/action';

// const HomepageDefaultPage = () => {
//     const [data, setData] = useState([]);
// useEffect(() => {
//     axios.get("http://localhost:8899/category/category-list").then((res) => {
//         setData(res.data.result);
//     });
// }, []);
//     return (
//         <PageContainer title="PANDIYAN">
//             <main id="homepage-1">
//                 <HomeDefaultBanner />
//                 <SiteFeatures />
//                 {/* <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" /> */}
//                 <HomeAdsColumns />
//                 <HomeDefaultTopCategories />
//                 {data.map(Product =>
//                     < div key={Product.id} >
//                         <HomeDefaultProductListing
//                             collectionSlug={Product.id}
//                             title={Product.name}
//                         />
//                     </div>
//                 )}
//                 {/* <HomeDefaultProductListing
//                     collectionSlug="consumer-electronics"
//                     title="Consumer Electronics"
//                 />
//                 <HomeDefaultProductListing
//                     collectionSlug="clothings"
//                     title="Clothings"
//                 />
//                 <HomeDefaultProductListing
//                     collectionSlug="garden-and-kitchen"
//                     title="Garden & Kitchen"
//                 /> */}
//                 <HomeAds />
//                 <DownLoadApp />
//                 {/* <NewArrivals collectionSlug="new-arrivals-products" /> */}
//                 <Newletters />
//             </main>
//         </PageContainer >
//     );
// };

class HomepageDefaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8899/category/category-list").then((res) => {
            this.setState({ data: res.data.result });
        });
        const data = JSON.parse(sessionStorage.getItem('token'))
        if (data) {
            console.log("token  available ");
            this.props.dispatch(login());
        }else{
            console.log("token not  available ");
        }
    };
    render() {
        return (
            <PageContainer title="PANDIYAN">
                <main id="homepage-1">
                    <HomeDefaultBanner />
                    <SiteFeatures />
                    <HomeAdsColumns />
                    <HomeDefaultTopCategories />
                    {this.state.data.map(Product =>
                        < div key={Product.id} >
                            <HomeDefaultProductListing
                                collectionSlug={Product.id}
                                title={Product.name}
                            />
                        </div>
                    )}
                    
                    <HomeAds />
                    <DownLoadApp />
                    <Newletters />
                </main>
            </PageContainer >
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth.isLoggedIn
    };
};
export default connect(mapStateToProps)(HomepageDefaultPage);
