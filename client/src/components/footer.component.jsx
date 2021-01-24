import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright">&copy; Chat Fuel. All rights reserved.</div>
            <div className="created-by">
                <p>
                    Created by
                    <span className="developers"> Jayesh </span>
                    &#38;
                    <span className="developers"> Dev </span>
                    with
                </p>
                <svg
                    className="created-by--svg"
                    dangerouslySetInnerHTML={{
                        __html: '<use xlink:href="svg/sprite.svg#icon-heart"></use>',
                    }}
                ></svg>
            </div>
        </footer>
    );
};

export default Footer;
