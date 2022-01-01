import React from 'react';
import Buddha1 from '../../images/buddha-1.jpg'
import Buddha2 from '../../images/buddha-2.jpg'
import Buddha3 from '../../images/buddha-3.jpg'
import Buddha4 from '../../images/buddha-4.jpg'
import Buddha5 from '../../images/buddha-5.jpg'
import Buddha6 from '../../images/buddha-6.jpg'
import Buddha7 from '../../images/buddha-7.jpg'
import Buddha8 from '../../images/buddha-8.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col">
                                <img src={Buddha5} class="d-block img-fluid" alt="..." />
                            </div>
                            <div class="col">
                                <img src={Buddha6} class="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col">
                                <img src={Buddha3} class="d-block img-fluid" alt="..." />
                            </div>
                            <div class="col">
                                <img src={Buddha4} class="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col">
                                <img src={Buddha1} class="d-block img-fluid" alt="..." />
                            </div>
                            <div class="col">
                                <img src={Buddha2} class="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col">
                                <img src={Buddha7} class="d-block img-fluid" alt="..." />
                            </div>
                            <div class="col">
                                <img src={Buddha8} class="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;