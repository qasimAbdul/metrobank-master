
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Details">
                <div>
                    {/* contact-info-section */}
                    <section className="contact-info-section centred pt_120 pb_90">
                        <div className="auto-container">
                            <div className="sec-title mb_70">
                            <h6>Contact US</h6>
                            <h2>Contact Details</h2>
                            </div>
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="info-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-2"></i></div>
                                    <h3>Our Location</h3>
                                    <p>1901 Thornridge Cir. Shiloh, <br />Hawaii 81063</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="info-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-43"></i></div>
                                    <h3>Email Address</h3>
                                    <p><Link href="mailto:contact@example.com">contact@example.com</Link><br /> <Link href="mailto:support@example.com">support@example.com</Link></p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="info-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-44"></i></div>
                                    <h3>Phone Number</h3>
                                    <p>Emergency Cases <br /><Link href="tel:2085550112">+(208) 555-0112</Link> (24/7)</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-info-section End */}

                    {/* Google Map Section */}
                    <section className="google-map-section pb_120">
                        <div className="auto-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd" height={535} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                    {/* Google Map Section End */}
                    
                    {/* Contact Form Section */}
                    <section className="contact-section pt_120 pb_120">
                        <div className="auto-container">
                            <div className="sec-title centred mb_70">
                            <h6>Contact US</h6>
                            <h2>Contact Details</h2>
                            </div>
                            <div className="form-inner">
                            <form>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="username" placeholder="Your Name" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Your email" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="phone" required placeholder="Phone" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="subject" required placeholder="Subject" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Type message"></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                    <button className="theme-btn btn-one" type="submit" name="submit-form">
                                    Send Message
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                </div>

            </Layout>
        </>
    )
}