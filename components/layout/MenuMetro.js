import Link from "next/link"
// import { useRouter } from "next/router"

export default function MenuMetro() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li><Link href="/index-metro">Home</Link></li>
                <li className="dropdown"><Link href="/service-cw">Services</Link>
                    <ul>
                        <li><Link href="/digital-banking">Digital Banking</Link></li>
                        <li><Link href="/liquidity-providers">Liquidity Provider</Link></li>
                        <li><Link href="/risk-management">Risk Management</Link></li>
                        <li><Link href="/white-label-solutions">White Label Solutions</Link></li>
                        <li><Link href="/trading-solutions">Trading Solutions</Link></li>
                        <li><Link href="/robo-advisory-services">Robo-Advisory Services</Link></li>
                        <li><Link href="/wealth-management">Wealth Management</Link></li>
                        <li><Link href="/mortgage-solutions">Mortgage Solutions</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/markets">Markets</Link>
                    <ul>
                        <li><Link href="/service-details">Forex</Link></li>
                        <li><Link href="/service-details-2">CFDs</Link></li>
                        <li><Link href="/service-details-3">Stock</Link></li>
                        <li><Link href="/service-details-4">ETFs</Link></li>
                        <li><Link href="/service-details-5">Cryptocurrencies</Link></li>
                        <li><Link href="/service-details-6">Bonds</Link></li>
                        <li><Link href="/service-details-7">Money Markets</Link></li>
                        <li><Link href="/service-details-8">Options & Futures</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/partners">Partners</Link>
                    <ul>
                        <li><Link href="/service-details">Broker Partnerships</Link></li>
                        <li><Link href="/service-details-2">Institutional Solutions</Link></li>
                        <li><Link href="/service-details-3">Introducing Broker Program</Link></li>
                        <li><Link href="/service-details-4">Affiliate Program</Link></li>
                        <li><Link href="/service-details-5">White Label Solutions</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/partners">Technology</Link>
                    <ul>
                        <li><Link href="/service-details">Trading Platforms</Link></li>
                        <li><Link href="/service-details-2">Mobile Trading</Link></li>
                        <li><Link href="/service-details-3">API Integration</Link></li>
                        <li><Link href="/service-details-4">Advanced Tools and Analytics</Link></li>
                        <li><Link href="/service-details-5">Research and Insights</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/partners">Resources</Link>
                    <ul>
                        <li><Link href="/service-details">Market Insights</Link></li>
                        <li><Link href="/service-details-2">Economic Calendar</Link></li>
                        <li><Link href="/service-details-3">News and Analysis</Link></li>
                        <li><Link href="/service-details-4">Client Testimonials</Link></li>
                        <li><Link href="/service-details-5">FAQs</Link></li>
                        <li><Link href="/service-details-5">Trading Calculator</Link></li>
                        <li><Link href="/service-details-5">Market Heatmap</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/about-us/">About</Link>
                    <ul>
                        <li><Link href="/service-details">Overview</Link></li>
                        <li><Link href="/service-details-2">Company Profile</Link></li>
                        <li><Link href="/service-details-3">Mission and Values</Link></li>
                        <li><Link href="/service-details-4">Financial Highlights</Link></li>
                        <li><Link href="/service-details-5">Investor Relations</Link></li>
                        <li><Link href="/service-details-5">Career Opportunities</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/support">Support</Link>
                    <ul>
                        <li><Link href="/service-details">Contact Us</Link></li>
                        <li><Link href="/service-details-2">Live Chat</Link></li>
                        <li><Link href="/service-details-3">Help Center</Link></li>
                        <li><Link href="/service-details-4">Client Portal</Link></li>
                        <li><Link href="/service-details-5">Account Funding</Link></li>
                        <li><Link href="/service-details-5">Account Management</Link></li>
                        <li><Link href="/service-details-5">Technical Support</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}









                                    
