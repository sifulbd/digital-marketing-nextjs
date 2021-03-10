import React from 'react';

const PrivacyHeader = () => {
    return (
        <section class="inner-header bg-holder bg-overlay-black-90" style={{backgroundImage: 'url(images/bg/03.jpg)'}}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-8 text-center text-md-left mb-2 mb-md-0">
                        <h1 class="breadcrumb-title mb-0 text-white">Privacy Policy</h1>
                    </div>
                    <div class="col-md-4">
                        <ol class="breadcrumb d-flex justify-content-center justify-content-md-end ml-auto">
                            <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home mr-1"></i>Home</a></li>
                            <li class="breadcrumb-item active"><span>Privacy Policy</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyHeader;