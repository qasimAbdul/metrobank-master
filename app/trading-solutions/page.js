import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Trading Solutions">
                <div>
                
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                <div className="sec-title mb_20">
                                <h2>Welcome to CW BANK's All Trading Solutions page</h2>
                                </div>
                                <div className="text-box mb_40">
                                <p>
                                    Here we invite you to discover our comprehensive suite of trading solutions tailored to meet the diverse needs of traders, investors, and financial institutions. Whether you're a retail trader seeking user-friendly platforms or an institutional investor in search of advanced trading tools, we have the solutions to support your trading objectives and elevate your trading experience.
                                </p>

                                <h3 className="mb_15 mt_30">Empowering Your Trading Journey:</h3>
                                <p>
                                    At CW BANK, we understand that each trader has unique preferences and goals. That's why our Trading Solutions encompass a wide range of features and functionalities designed to cater to traders of all levels of experience and expertise. Whether you're just starting out in the world of trading or you're a seasoned professional, our solutions are designed to help you succeed in today's dynamic financial markets.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
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
                <section className="feature-style-three pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                        <h6>Why US</h6>
                        <h2>Key Features of CW BANK's All Trading Solutions:</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Cutting-edge Trading Platforms</Link></h4>
                                    <p>Access cutting-edge trading platforms with intuitive interfaces and advanced charting tools. Our platforms are designed to provide a seamless trading experience, allowing you to execute trades with ease and precision.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4><Link href="/service">Diverse Range of Financial Instruments</Link></h4>
                                    <p>Gain access to a wide range of financial instruments, including forex, commodities, indices, and cryptocurrencies. With our diverse product offering, you can diversify your portfolio and capitalize on a variety of market opportunities.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4><Link href="/service">Direct Market Access</Link></h4>
                                    <p>Benefit from direct market access to major liquidity providers for fast and reliable order execution. With direct access to liquidity providers, you can enjoy competitive pricing and optimal order execution, ensuring that your trades are executed swiftly and efficiently.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Customizable Trading Strategies</Link></h4>
                                    <p>Customize your trading strategies and automate your trades with our automated trading solutions. Whether you're a discretionary trader or a systematic trader, our solutions empower you to implement your preferred trading strategies with ease.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Risk Management Tools</Link></h4>
                                    <p>Protect your investments and minimize losses with our risk management tools. From stop-loss orders to position sizing strategies, our risk management tools help you manage your risk effectively and safeguard your capital.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Educational Resources and Market Analysis</Link></h4>
                                    <p>Access educational resources and market analysis to support your trading decisions. Whether you're looking to expand your knowledge of trading concepts or stay updated on market trends, our resources provide valuable insights to enhance your trading performance.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Dedicated Customer Support</Link></h4>
                                    <p>Receive dedicated customer support from our team of trading experts. Whether you have questions about our trading platforms, need assistance with technical issues, or require guidance on trading strategies, our team is here to help you every step of the way.</p>
                                </div>
                                </div>
                            </div>
        
                        </div>

                        <div className="service-details-content content-one mt_60 mb_60">
                            <h3 className="mb_30">Our Trading Solutions Include:</h3>

                            <ul className="list-style-one clearfix">
                                <li>Forex Trading</li>
                                <li>Commodity Trading</li>
                                <li>Stock Trading</li>
                                <li>ETF Trading</li>
                                <li>Options Trading</li>
                                <li>Cryptocurrency Trading</li>
                                
                            </ul>
                        </div>

                        <div className="service-details-content content-one mt_60 mb_60">
                            

                            <div className="mt_60">
                                <p className="mb_30">Whether you're a beginner or an experienced trader, CW BANK's All Trading Solutions are designed to help you succeed in today's dynamic financial markets. With our comprehensive suite of solutions, you have everything you need to take your trading to the next level and achieve your financial goals.</p>

                                <h3 className="mb_30">Partner with CW BANK today and experience the difference our Trading Solutions can make in your trading journey.</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

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