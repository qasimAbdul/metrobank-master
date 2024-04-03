import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Forex Trading">
                <div>
                
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center text-center">
                            <div className="sec-title mb_20">
                                <h2 className="mb_20">Welcome to CW BANK's Forex Trading Page</h2>
                                <h6>Unleashing the Potential of Currency Markets</h6>

                                <div className="text-box mb_40">
                                    <p>
                                        At CW BANK, we recognize the immense opportunities presented by the foreign exchange (forex) market for traders and investors alike. Our Forex Trading services are tailored to provide you with access to one of the largest and most liquid financial markets in the world. Whether you're a seasoned forex trader or just starting out, our platform offers the tools, resources, and support you need to navigate the forex market with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                
                                <div className="text-box mb_40">
                                    <h3 className="mb_15">Empowering Your Trading Journey:</h3>
                                    <p>
                                        At CW BANK, we understand that each trader has unique preferences and goals. That's why our Trading Solutions encompass a wide range of features and functionalities designed to cater to traders of all levels of experience and expertise. Whether you're just starting out in the world of trading or you're a seasoned professional, our solutions are designed to help you succeed in today's dynamic financial markets.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                            <div className="image-box">
                                <div className="image-shape">
                                <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                                <div className="shape-4" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                </div>
                                <figure className="image">
                                <img src="assets/images/resource/about-4.jpg" alt="" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* about-style-two */}

                {/* feature-style-three */}
                <section className="market-feature-section feature-style-three pt_120 pb_90">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                        <h6>Why US</h6>
                        <h2>Key Features of CW BANK's White Label Solutions:</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape"></div>
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Empowering Your Brand</Link></h4>
                                    <p>Our White Label Solutions allow you to create customized trading platforms branded with your logo and corporate identity. With our easy-to-use platform, you can offer a seamless trading experience to your clients while maintaining brand consistency and identity.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4><Link href="/service">Comprehensive Financial Products</Link></h4>
                                    <p>Gain access to a wide range of financial products, including forex, commodities, stocks, and cryptocurrencies. Our diverse product offering ensures that you can cater to the diverse needs and preferences of your clients, enhancing their trading experience and satisfaction.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4><Link href="/service">Robust Infrastructure and Support</Link></h4>
                                    <p>Benefit from our comprehensive back-office support and infrastructure, including risk management, compliance, and customer support. Our dedicated team ensures that your operations run smoothly, allowing you to focus on growing your business and serving your clients effectively.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Enhanced Functionality</Link></h4>
                                    <p>Integrate seamlessly with third-party tools and technologies to enhance your platform's functionality and features. Whether it's integrating advanced charting tools, analytics, or trading algorithms, our White Label Solutions enable you to offer cutting-edge capabilities to your clients.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Marketing and Promotional Support</Link></h4>
                                    <p>Receive marketing and promotional support to help you attract and retain clients. From promotional campaigns to targeted advertising, our marketing experts work closely with you to develop strategies that drive client acquisition and retention.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Flexible Pricing Models</Link></h4>
                                    <p>Choose from flexible pricing models tailored to your business model and growth objectives. Whether it's a fixed fee, revenue share, or transaction-based pricing, our flexible pricing options ensure that you can scale your business profitably and sustainably.</p>
                                </div>
                                </div>
                            </div>
        
                        </div>

                        <div className="service-details-content content-one mt_60 mb_60">
                            

                            <div className="mt_60">
                                <p className="mb_30">With CW BANK's White Label Solutions, you can leverage our expertise and technology to launch your own branded trading platform and offer a seamless trading experience to your clients. Whether you're looking to expand your product offerings, enhance your brand presence, or attract new clients, our White Label Solutions provide the tools and support you need to succeed in today's competitive marketplace.</p>

                                <h3 className="mb_30">Partner with CW BANK today and unlock the full potential of your brand with our innovative White Label Solutions.</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                <section className="key-features pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center clearfix mb_50">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_one">
                                <div className="image-box pr_90 mr_40">
                                    <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box ml_40"> 
                                        <div className="inner-box mb_45">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-10"></i></div>
                                            <h3>Wide Range of Currency Pairs</h3>
                                            <p>Gain access to a diverse range of currency pairs, including major, minor, and exotic pairs, to suit your trading preferences and objectives.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Real-time Market Data</h3>
                                            <p>Stay informed with real-time market data, including currency prices, trading volumes, and market sentiment indicators, to make timely and informed trading decisions.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Real-time Market Data</h3>
                                            <p>Stay informed with real-time market data, including currency prices, trading volumes, and market sentiment indicators, to make timely and informed trading decisions.</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column order-md-1">
                                <div className="image_block_one">
                                    <div className="image-box pl_90 ml_40">
                                        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                        <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box mr_40"> 
                                        <div className="inner-box mb_45">
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-10"></i></div>
                                            <h3>Wide Range of Currency Pairs</h3>
                                            <p>Gain access to a diverse range of currency pairs, including major, minor, and exotic pairs, to suit your trading preferences and objectives.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Real-time Market Data</h3>
                                            <p>Stay informed with real-time market data, including currency prices, trading volumes, and market sentiment indicators, to make timely and informed trading decisions.</p>
                                            </div>
                                            <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Real-time Market Data</h3>
                                            <p>Stay informed with real-time market data, including currency prices, trading volumes, and market sentiment indicators, to make timely and informed trading decisions.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* process-section */}
                <section className="process-section centred pt_120 pb_90">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/process-bg.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_110">
                        <h6>Our process</h6>
                        <h2>Open Bank Accounts</h2>
                        </div>
                        <div className="inner-container">
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">01 <br />Step</span>
                            <h3>Fill In The <br />Required Form</h3>
                            <p>Amet minim mollit no duis deserunt ulamco.</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">02 <br />Step</span>
                            <h3>Submit All <br />Your Documents</h3>
                            <p>Amet minim mollit no duis deserunt ulamco.</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="inner-box">
                            <span className="count-text">03 <br />Step</span>
                            <h3>Get Your <br />Desire Account</h3>
                            <p>Amet minim mollit no duis deserunt ulamco.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* process-section end */}

                {/* requirements-section */}
                <section className="requirements-section centred pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70">
                        <h6>Requirement</h6>
                        <h2>Required Document</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Documents</h4>
                                <ul className="list-item clearfix">
                                <li>NID/Birth certificate/Passport</li>
                                <li>Photograph – 2 Copies</li>
                                <li>Nominee photograph – 1 Copy</li>
                                <li>Nominee’s NID/Birth ID/Passport</li>
                                <li>Income source document</li>
                                <li>E-TIN Certificate</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Features</h4>
                                <ul className="list-item clearfix">
                                <li>Cheque-book facility</li>
                                <li>Debit Card cash withdrawal from ATMs</li>
                                <li>Interest on Monthly Average Balance</li>
                                <li>Higher ATM withdrawal limit</li>
                                <li>Utility bill payment service</li>
                                <li>Online banking service through App</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Eligibility</h4>
                                <ul className="list-item clearfix">
                                <li>Age: At least 18 years</li>
                                <li>Nationality: Bangladeshi</li>
                                <li>Full-Time Job</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* requirements-section end */}

                {/* testimonial-style-two */}
                <section className="testimonial-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title mr_70">
                            <h6>Testimonials</h6>
                            <h2>Love from Happy Clients</h2>
                            <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider02 />                        
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-style-two end */}

                {/* subscribe-section */}
                <section className="subscribe-section">
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                        <div className="auto-container">
                            <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                <div className="text-box">
                                <h2>Subscribe us to Receive Latest Updates</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner ml_40">
                                <form method="post" action="contact">
                                    <div className="form-group">
                                    <input type="email" name="email" placeholder="Your email" required />
                                    <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                </section>
                {/* subscribe-section end */}
               
                </div>
            </Layout>
        </>
    )
}