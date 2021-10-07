import Axios from 'axios';
import React, { useEffect, useState } from 'react';
// import menuData from '~/public/static/data/menu.json';
// import Menu from '~/components/elements/menu/Menu';
import { getCatrgrylist } from '../../api/url-helper';
import axios from 'axios';

const MenuCategoriesDropdown = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8899/category/category-list").then((res) => {
            setData(res.data.result);
        });
    }, []);

    const Menu = ({ source, className }) => {
        // Views
        let menuView;
        if (source) {
            menuView = source.map((item) => {

                return (
                    <li key={item.name}>
                        {/* <Link href={item.url}> */}
                        <a>
                            {/* {item.icon && <i className={item.icon}></i>} */}
                            {item.name}
                        </a>
                        {/* </Link> */}
                    </li>
                );
            });
        } else {
            menuView = (
                <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        No menu item.
                    </a>
                </li>
            );
        }
        return <ul className={className}>{menuView}</ul>;
    };
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Shop by Department</span>
            </div>
            <div className="menu__content">
                <Menu
                    source={data}
                    className="menu--dropdown"
                />
                {/* <ul className={className}>{menuView}</ul>; */}
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
