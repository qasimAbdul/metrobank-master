import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={'Metro'} footerStyle={1} breadcrumbTitle="Mortgage Solutions">
                <div>
                
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                <div className="sec-title mb_20">
                                <h2>Welcome to CW BANK's Mortgage Solutions page</h2>
                                </div>
                                <div className="text-box mb_40">
                                <p>
                                we combine personalized service with flexible financing options to help you turn your homeownership dreams into reality. Whether you're purchasing your first home, refinancing an existing mortgage, or investing in property, our team of mortgage experts is dedicated to guiding you through the process and finding the perfect solution to suit your needs.
                                </p>

                                <h3 className="mb_15 mt_30">Empowering Your Homeownership Journey:</h3>
                                <p>
                                At CW BANK, we understand that buying a home is one of the most significant financial decisions you'll ever make. That's why our Mortgage Solutions are designed to offer personalized guidance and support every step of the way, ensuring a seamless and stress-free experience as you embark on your homeownership journey.
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
                        <h2>Key Features of CW BANK's Mortgage Solutions:</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Wide Range of Mortgage Products</Link></h4>
                                    <p>We offer a wide range of mortgage products to suit your budget and lifestyle. Whether you're looking for a traditional fixed-rate mortgage, an adjustable-rate mortgage, or specialized financing options, we have the right solution for you.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h4><Link href="/service">Competitive Interest Rates and Flexible Terms</Link></h4>
                                    <p>Our Mortgage Solutions feature competitive interest rates and flexible terms designed to fit your financial goals. Whether you're looking to minimize your monthly payments or pay off your mortgage faster, we work with you to customize a solution that meets your needs.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h4><Link href="/service">Personalized Guidance and Support</Link></h4>
                                    <p>Our team of experienced mortgage advisors provides personalized guidance and support throughout the entire mortgage process. From helping you understand your options to assisting with paperwork and documentation, we're here to make the process as smooth and straightforward as possible.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Streamlined Application and Approval Process</Link></h4>
                                    <p>We offer a streamlined application and approval process for a hassle-free experience. Our goal is to make the mortgage process as efficient and convenient as possible, allowing you to focus on finding your dream home.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Access to Exclusive Mortgage Programs and Incentives</Link></h4>
                                    <p>CW BANK provides access to exclusive mortgage programs and incentives, giving you access to special offers and discounts that can help you save money on your mortgage.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Refinance Options</Link></h4>
                                    <p>We offer refinance options to help you lower your monthly payments, reduce your interest rate, or consolidate debt. Whether you're looking to take advantage of lower interest rates or access equity in your home, we can help you explore your options and make the right choice for your financial situation.</p>
                                </div>
                                </div>
                            </div>
                            <div className="feature-block">
                                <div className="service-feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h4><Link href="/service">Expert Advice on Homeownership</Link></h4>
                                    <p>Our mortgage experts offer expert advice on all aspects of homeownership, from home buying to financing and beyond. Whether you have questions about the home buying process, need guidance on mortgage options, or want to learn more about homeownership responsibilities, we're here to help.</p>
                                </div>
                                </div>
                            </div>
        
                        </div>

                        <div className="service-details-content content-one mt_60 mb_60">
                            

                            <div className="mt_60">
                                <h5 className="mb_30">Achieve Your Homeownership Dreams with CW BANK:</h5>

                                <p className="mb_30">Whether you're a first-time homebuyer or an experienced investor, CW BANK's Mortgage Solutions offer the expertise and flexibility you need to make your homeownership dreams a reality. Partner with us today and let us help you navigate the path to homeownership with confidence and peace of mind.</p>
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