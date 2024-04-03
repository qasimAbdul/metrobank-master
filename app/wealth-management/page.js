import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Wealth Management Services">
                <div>
                
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                <div className="sec-title mb_20">
                                <h2>Welcome to CW BANK's Wealth Management services</h2>
                                </div>
                                <div className="text-box mb_40">
                                <p>
                                we blend personalized advice with comprehensive financial planning to guide you toward your long-term financial aspirations. Our seasoned team of wealth managers collaborates closely with you to grasp your unique needs, aspirations, and risk tolerance, crafting bespoke strategies aimed at both growing and safeguarding your wealth.
                                </p>

                                <h3 className="mb_15 mt_30">Empowering Your Financial Journey:</h3>
                                <p>
                                At CW BANK, we recognize that financial success is not merely about accumulating wealth but also about strategically managing it to fulfill your life goals. Our Wealth Management services are meticulously designed to provide you with the guidance and support necessary to navigate the complexities of wealth accumulation and preservation.
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
                        <h2>Key Features of CW BANK's Wealth Management Services:</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Personalized Financial Planning</Link></h4>
                                    <p>Our wealth managers offer personalized financial planning tailored to your specific goals and objectives. Whether you're aiming to retire comfortably, save for your children's education, or achieve other milestones, we develop a customized roadmap to help you reach your financial aspirations.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4><Link href="/service">Investment Management Services</Link></h4>
                                    <p>We provide investment management services crafted to optimize returns while effectively managing risk. With access to a wide array of investment opportunities and asset classes, our team constructs diversified portfolios tailored to your risk tolerance and investment objectives.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4><Link href="/service">Retirement Planning Strategies</Link></h4>
                                    <p>CW BANK offers comprehensive retirement planning strategies designed to ensure a secure and comfortable retirement. We work with you to develop a retirement savings plan, assess your retirement income needs, and optimize your investment allocations to support your retirement goals.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Tax Planning and Optimization</Link></h4>
                                    <p>Our wealth management experts offer tax planning and optimization strategies to minimize your tax liabilities and maximize your savings. Through proactive tax planning, we help you take advantage of tax-efficient investment strategies and retirement accounts to optimize your after-tax returns.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Estate Planning Solutions</Link></h4>
                                    <p>CW BANK provides estate planning solutions aimed at preserving and transferring wealth to future generations. Our wealth managers collaborate with estate planning professionals to develop personalized estate plans that align with your wishes and objectives, ensuring a smooth transfer of assets to your heirs.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Access to Exclusive Investment Opportunities</Link></h4>
                                    <p>We offer access to exclusive investment opportunities and alternative asset classes, allowing you to diversify your portfolio and potentially enhance returns while managing risk.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Ongoing Portfolio Monitoring and Performance Reporting</Link></h4>
                                    <p>Our wealth management team provides continuous portfolio monitoring and performance reporting, keeping you informed about the progress of your investments and ensuring that your portfolio remains aligned with your financial goals.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Regular Reviews and Adjustments</Link></h4>
                                    <p>We conduct regular reviews and adjustments to your financial plan as your circumstances change. Whether it's a shift in your goals, changes in market conditions, or updates to tax laws, we adapt your financial plan to ensure it remains relevant and effective over time.</p>
                                </div>
                                </div>
                            </div>
        
                        </div>

                        <div className="service-details-content content-one mt_60 mb_60">
                            

                            <div className="mt_60">
                                <h5 className="mb_30">Achieve Your Financial Goals with CW BANK:</h5>

                                <p className="mb_30">Whether you're planning for retirement, saving for your children's education, or building a legacy for future generations, CW BANK's Wealth Management services offer the expertise and guidance you need to achieve your financial goals. Partner with us today and embark on a journey toward financial security and prosperity.</p>

                                
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