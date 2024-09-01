import React from 'react';

const Footer = () => {
    return (
        <div className='py-[60px]'>
            <div className="conteiner">
                <div className="flex items-center justify-around">
                    <div className="flex items-start flex-col gap-[10px] text-gray-400">
                        <a className='text-white text-xl mb-5' >Questions? Call 1-844-505-2993</a>
                        <a >FAQ</a>
                        <a >Investor Relations</a>
                        <a >Buy Gift Cards</a>
                        <a >Cookie Preferences</a>
                        <a >Legal Notices</a>

                    </div>
                    <div className="flex items-start flex-col gap-[10px] text-gray-400">
                        <a >Help Center</a>
                        <a >Jobs</a>
                        <a >Ways to Watch</a>
                        <a >Corporate Information</a>
                        <a >Only on Netflix</a>

                    </div>
                    <div className="flex items-start flex-col gap-[10px] text-gray-400">
                        <a >Account</a>
                        <a >Netflix Shop</a>
                        <a >Terms of Use</a>
                        <a >Contact Us</a>
                        <a >Do Not Sell or Share My Personal Information</a>

                    </div> 
                    <div className="flex items-start flex-col gap-[10px] text-gray-400">
                        <a >Media Center</a>
                        <a >Redeem Gift Cards</a>
                        <a >Privacy</a>
                        <a >Speed Test</a>
                        <a >Ad Choices</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;