import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';
import 'antd/dist/antd.css';
import { Row, Col, Button, Avatar, notification, Carousel, Timeline } from 'antd';
import { andy, garret, emily } from './index.const';

const Home = () => {


	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	const openNotificationAndy = () => {
		notification.open(andy);
	};

	const openNotificationGarret = () => {
		notification.open(garret);
	};

	const openNotificationEmily = () => {
		notification.open(emily);
	};

	function onChange(a, b, c) {
		console.log(a, b, c);
	}

	const contentStyle = {
		height: '70vh',
		color: 'white',
		textAlign: 'center',
		background: 'linear-gradient(to right, #232526, #414345)',
	};

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href = `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	}, []);

	return (
		<div>
			<div className={style.home}>
				<div className={style.videoContainer}>
					<video playsInline autoPlay muted loop
						   src="https://res.cloudinary.com/ia-interactive/video/upload/v1651072097/quarter_rats_w9cxuz.mp4"
						   poster="https://res.cloudinary.com/ia-interactive/image/upload/v1651077654/fq_zwkfrn.jpg">
					</video>
					<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
						<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
					</svg>
				</div>
				<div className={style.ctaContainer}>
					<div>
						<h1>A <span style="font-weight: 700;">civil rights</span> legal firm</h1>
						<hr></hr>
						<h2>Bizer & DeReus <span style="font-weight: 700">fights</span> for the <span
							style="font-weight: 700">rights of all Americans</span>. We concentrate on increasing access
							for <span style="font-weight: 700">persons with disabilities</span> and <span
								style="font-weight: 700">minority groups</span> through litigation.</h2>

						<a href="mailto:andrew@bizerlaw.com?subject=Contact%20Form&body=Hello!">
							<Button type="primary" size="large" shape="round" style="margin-top: 15px;">
								Contact Us
							</Button>
						</a>
					</div>
				</div>
			</div>
			<div className={style.about}>
				<div>
					<h1>Who we Are</h1>
					<hr></hr>
					<p>Bizer & DeReus fights for the rights of all Americans. We concentrate on increasing access for
						persons with disabilities and minority groups through litigation. We are also experienced in
						handling personal injury and insurance cases. Since founding the firm in New Orleans in 2008, we
						have developed a national presence with local partnerships in several states. We provide, free
						of charge, American Sign Language Interpreters for ALL our Deaf & Hard of Hearing Clients.</p>
				</div>
			</div>
			<div className={style.services}>
				<div>
					<Row gutter={[16, 16]}>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<img src="https://res.cloudinary.com/ia-interactive/image/upload/v1651080236/noun-civil-rights-4339810_h7f7gv.png"/>
							<h3>CIVIL RIGHTS</h3>
							<hr></hr>
							<p>Bizer & DeReus is one of a small number of Louisiana law firms that concentrate on enforcing the rights of individuals with disabilities under the Americans with Disabilities Act of 1990 (ADA), the Rehabilitation Act of 1973, and the Fair Housing Act. Bizer & DeReus is committed to ensuring that individuals with disabilities receive equal access to public and private facilities and services.</p>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<img src="https://res.cloudinary.com/ia-interactive/image/upload/v1651080236/noun-hurricane-3637508_vem12e.png"/>
							<h3>HURRICANE CLAIMS</h3>
							<hr></hr>
							<p>As a Louisiana law firm, Bizer & DeReus understands first-hand what it's like to have to deal with hurricane-related losses. One of our attorneys suffered severe flooding from Hurricane Barry. Another had roof damage from Hurricane Ida. Because of our personal experiences, we understand what it's like to deal with storm-related property damage in the way big, out-of-state firms do not. If you are a Hurricane Ida survivor whose home or business was damaged, please reach out to us today.</p>
						</Col>
					</Row>
				</div>
			</div>
			<div className={style.attorneys}>
				<div>
					<h1>our attorneys</h1>
					<hr></hr>
					<Row gutter={[16, 16]}>
						<Col xs={{ span: 24 }} md={{ span: 8 }}>
							<a href="javascript:void;" onClick={openNotificationAndy}>
								<Avatar
									size={{ xs: 50, sm: 50, md: 100, lg: 150, xl: 150, xxl: 150 }}
									src="https://res.cloudinary.com/ia-interactive/image/upload/v1651086619/andy_pgyvh2.jpg"
								/>
								<h3>ANDREW D. BIZER</h3>
							</a>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 8 }}>
							<a href="javascript:void;" onClick={openNotificationGarret}>
								<Avatar
									size={{ xs: 50, sm: 50, md: 100, lg: 150, xl: 150, xxl: 150 }}
									src="https://res.cloudinary.com/ia-interactive/image/upload/v1651086618/garret_ogd1og.jpg"
								/>
								<h3>GARRET S. DEREUS</h3>
							</a>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 8 }}>
							<a href="javascript:void;" onClick={openNotificationEmily}>
								<Avatar
									size={{ xs: 50, sm: 50, md: 100, lg: 150, xl: 150, xxl: 150 }}
									src="https://res.cloudinary.com/ia-interactive/image/upload/v1651086620/emily_vair5u.png"
								/>
								<h3>EMILY WESTERMEIER</h3>
							</a>
						</Col>
					</Row>
				</div>
			</div>

			<div className={style.vouch}>
				<Carousel afterChange={onChange}>
					<div>
						<div style={contentStyle}>
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/R0GI6yATVV8"
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen>
							</iframe>
						</div>
					</div>
					<div>
						<div style={contentStyle}>
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/sL1IZlsupnQ"
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
						</div>
					</div>
				</Carousel>
			</div>

			<div className={style.press}>
				<div>
					<h1>What people are saying about us</h1>
					<Row gutter={[16, 16]}>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Timeline>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.law360.com/california/articles/1458083/tearful-uber-worker-defends-accessibility-efforts-at-ada-trial-"> Tearful Uber Worker Defends Accessibility Efforts at ADA Trial </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.law360.com/articles/1456727"> Uber's 'Accessibility Problem' Goes to Bench Trial in Calif. </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.nola.com/news/business/article_94e391ca-627c-11eb-9f37-079b712f7b75.html"> Three Disabled Men Sue City of New Orleans for Decade-Long Wait to Fix Curb Ramps </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.reuters.com/legal/litigation/5th-circ-revives-would-be-jurors-suit-over-inaccessible-courthouse-2021-06-16/"> 5th Circ. Revives Would-Be Juror’s Suit Over Inaccessible Courthouse </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.youtube.com/watch?v=kuf-qGZ7a90"> Bizer &amp; DeReus Prevail in Making the St. Charles Avenue Streetcar Accessible for Wheelchair Users</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.timesledger.com/stories/2018/40/qclawsuit_2018_10_05_q.html">Bizer &amp; DeReus Settle ADA Lawsuit Against Queens College; Agrees to Spend at Least One Million Dollars on Accessibility</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.wdsu.com/article/separate-federal-lawsuits-filed-against-two-north-shore-hospitals/9934363">&ZeroWidthSpace;Separate federal lawsuits filed against two Northshore hospitals</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.wdsu.com/article/st-charles-streetcar-line-to-become-wheelchair-accessible-consent-decree-says/9590384">Consent decree forces St. Charles Streetcar line to become wheelchair accessible</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/traffic/index.ssf/2016/03/new_orleans_faces_lawsuit_over.html">New Orleans faces lawsuit over inaccessible bus stops</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/politics/index.ssf/2016/04/new_orleans_st_charles_streetc.html">New Orleans St. Charles Streetcar under fire for lack of wheelchair access</a></Timeline.Item>
							</Timeline>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }} className={style.pressHide}>
							<Timeline>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.shreveporttimes.com/story/news/2015/10/07/non-ada-compliance-lands-shreveport-three-lawsuits/73521136/">
									Non-ADA compliance lands Shreveport three lawsuits</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/politics/index.ssf/2016/03/new_orleans_wheelchair.html">Navigating New Orleans by wheelchair is needlessly hard</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/politics/index.ssf/2016/01/jefferson_parish_sued_over_par.html">Jefferson Parish sued over park's lack of access for disabled</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.usnews.com/news/best-states/louisiana/articles/2018-01-23/deaf-students-sue-louisiana-community-college-system">Deaf Students Sue Louisiana Community College System</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/traffic/index.ssf/2017/02/new_orleans_rta_court_settleme.html">Bizer &amp; DeReus Prevail in Forcing the City of New Orleans to Make Its Bus Stops Compliant for Wheelchair Users</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/traffic/index.ssf/2017/05/st_charles_avenue_streetcars_m.html"> St. Charles Avenue Streetcars Must Offer Wheelchair Access, Consent Decree Says</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/traffic/index.ssf/2017/10/uber_ada_lawsuit_wheelchair_ne.html"> Uber slapped with ADA lawsuit from wheelchair-using New Orleanians</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/health/index.ssf/2017/11/university_medical_center_laws.html"> Bizer &amp; DeReus Secures $50,000 Settlement from University Medical Center for Failure to Provide Sign Language Interpreters to a Deaf Woman</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="http://www.wdsu.com/article/disabled-saints-fan-files-lawsuit-against-superdome/21530526"> Disabled Saints fan sues Superdome </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.nola.com/health/index.ssf/2018/06/deaf_slidell_resident_sues_loc.html"> Deaf Slidell resident sues local nursing home over inadequate interpreter service</a></Timeline.Item>
							</Timeline>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Home;
