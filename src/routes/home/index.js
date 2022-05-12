import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';
import 'antd/dist/antd.css';
import { Row, Col, Button, Avatar, notification, Carousel, Timeline } from 'antd';
import { andy, garret, emily } from './index.const';
import { isDesktop } from 'react-device-detect';

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

	function onDesktop() {
		return isDesktop;
	}

	const contentStyle = {
		height: '80vh',
		color: 'white',
		textAlign: 'center',
		padding: '3rem 0',
		background: 'transparent'
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
					{onDesktop() === true &&
					<video
						preload="none"
						playsInline autoPlay muted loop
						poster="https://res.cloudinary.com/ia-interactive/image/upload/v1651328306/Screen_Shot_2022-04-30_at_9.17.48_AM_d3qfqs.png">
						<source data-src=""
								src={onDesktop() ? 'https://res.cloudinary.com/ia-interactive/video/upload/v1652219537/street_1_t5pqz3.mp4' : ''}
								type="video/mp4"></source>
					</video>
					}
					<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
						<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
					</svg>
				</div>
				<div className={style.ctaContainer}>
					<div>
						<h1>A <span style="font-weight: 700; color: #0C6DB7;">Civil Rights</span> Law Firm</h1>
						<hr></hr>
						<h2>Bizer & DeReus <span style="font-weight: 700; color: #07538D">fights</span> for the <span
							style="font-weight: 700; color: #07538D;">rights of all Americans</span>. We concentrate on
							increasing access
							for <span
								style="font-weight: 700; color: #07538D;">persons with disabilities</span> and <span
								style="font-weight: 700; color: #07538D">minority groups</span> through litigation.</h2>

						<a href="mailto:andrew@bizerlaw.com?subject=Contact%20Form&body=Hello!">
							<Button type="primary" size="large" shape="round" style="margin-top: 15px;">
								Contact Us
							</Button>
						</a>
					</div>
				</div>
			</div>

			<div className={style.vouch}>
				<Carousel afterChange={onChange}>
					<div>
						<div style={contentStyle}>
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/sL1IZlsupnQ"
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
						</div>
					</div>
					<div>
						<div style={contentStyle}>
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/R0GI6yATVV8"
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen>
							</iframe>
						</div>
					</div>
				</Carousel>
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
							<img
								src="https://res.cloudinary.com/ia-interactive/image/upload/v1651080236/noun-civil-rights-4339810_h7f7gv.png"/>
							<h3>CIVIL RIGHTS</h3>
							<hr></hr>
							<p>Bizer & DeReus is one of a small number of Louisiana law firms that concentrate on
								enforcing the rights of individuals with disabilities under the Americans with
								Disabilities Act of 1990 (ADA), the Rehabilitation Act of 1973, and the Fair Housing
								Act. Bizer & DeReus is committed to ensuring that individuals with disabilities receive
								equal access to public and private facilities and services.</p>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<img
								src="https://res.cloudinary.com/ia-interactive/image/upload/v1651324929/noun-injury-231864_zvx9fd.png"/>
							<h3>PERSONAL INJURY</h3>
							<hr></hr>
							<p>At Bizer & DeReus, we have extensive experience litigating personal injury cases in state
								and federal court. We handle personal injury cases involving motor vehicle collision,
								trucking accidents, premises liability, and others.</p>
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

			<div className={style.press}>
				<div>
					<h1>Press Coverage about Bizer & DeReus</h1>
					<Row gutter={[16, 16]}>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Timeline>
								<Timeline.Item>
									<a class="text-white" target="_blank"
									   href="https://www.youtube.com/watch?v=kuf-qGZ7a90"> Bizer &amp; DeReus
										Prevail in Making the St. Charles Avenue Streetcar Accessible for Wheelchair
										Users</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-qns-2018-10-queens-college-settles-federal-lawsuit-over-ada-violations-2022-05-12-12_15_50.pdf">Bizer &amp; DeReus
									Settle ADA Lawsuit Against Queens College; Agrees to Spend at Least One Million
									Dollars on Accessibility</a></Timeline.Item>
								<Timeline.Item>
									<a class="text-white" target="_blank"
									   href="https://ijadams.s3.amazonaws.com/bizer/screencapture-law360-california-articles-1458083-tearful-uber-worker-defends-accessibility-efforts-at-ada-trial-2022-05-12-13_40_42.pdf"> Bizer
										& DeReus Takes ADA Case to Trial Over Uber's Failure to Provide Wheelchair
										Accessibility </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-law360-articles-1456727-2022-05-12-13_41_44.pdf"> Uber's 'Accessibility
									Problem' Goes to Bench Trial in Calif. </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-business-article-94e391ca-627c-11eb-9f37-079b712f7b75-html-2022-05-12-13_43_23.pdf"> Three
									Disabled Men Sue City of New Orleans for Decade-Long Wait to Fix Curb
									Ramps </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-traffic-article-e92cca63-52c9-598b-9ee5-e271eaf664d9-html-2022-05-12-13_45_05.pdf">Bizer &amp; DeReus
									Prevail in Forcing the City of New Orleans to Make Its Bus Stops Compliant for
									Wheelchair Users</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-reuters-legal-litigation-5th-circ-revives-would-be-jurors-suit-over-inaccessible-courthouse-2021-06-16-2022-05-12-13_46_24.pdf"> 5th
									Circ. Revives Would-Be Juror’s Suit Over Inaccessible
									Courthouse </a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-entertainment-life-health-fitness-article-f8ef159a-8693-536f-9cd1-7b27b788e882-html-2022-05-12-13_47_22.pdf"> Bizer &amp; DeReus
									Secures $50,000 Settlement from University Medical Center for Failure to Provide
									Sign Language Interpreters to a Deaf Woman</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-wdsu-article-separate-federal-lawsuits-filed-against-two-north-shore-hospitals-9934363-2022-05-12-13_48_40.pdf">Separate
									federal lawsuits filed against two Northshore hospitals</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-shreveporttimes-story-news-2015-10-07-non-ada-compliance-lands-shreveport-three-lawsuits-73521136-2022-05-12-13_49_28.pdf">
									Non-ADA compliance lands Shreveport three lawsuits</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="http://www.nola.com/politics/index.ssf/2016/03/new_orleans_wheelchair.html">Navigating
									New Orleans by wheelchair is needlessly hard</a></Timeline.Item>

							</Timeline>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }} className={style.pressHide}>
							<Timeline>


								<Timeline.Item><a class="text-white" target="_blank"
												  href="http://www.nola.com/politics/index.ssf/2016/01/jefferson_parish_sued_over_par.html">Jefferson
									Parish sued over park's lack of access for disabled</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-usnews-news-best-states-louisiana-articles-2018-01-23-deaf-students-sue-louisiana-community-college-system-2022-05-12-13_51_02.pdf">Deaf
									Students Sue Louisiana Community College System</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-traffic-article-a4585159-edbe-50f4-8919-8441f0691c9e-html-2022-05-12-13_51_59.pdf"> St.
									Charles Avenue Streetcars Must Offer Wheelchair Access, Consent Decree
									Says</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-traffic-article-385f89a9-f47a-5d4a-af92-6c50f9706c38-html-2022-05-12-13_52_58.pdf"> Uber
									slapped with ADA lawsuit from wheelchair-using New Orleanians</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-wdsu-article-disabled-saints-fan-files-lawsuit-against-superdome-21530526-2022-05-12-13_53_53.pdf"> Disabled
									Saints fan sues Superdome </a></Timeline.Item>

								<Timeline.Item><a class="text-white"
												  target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-entertainment-life-health-fitness-article-69a28b70-de0d-5f1c-9dc5-732e8e36a720-html-2022-05-12-13_55_08.pdf"> Deaf
									Slidell resident sues local nursing home over inadequate interpreter
									service</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-wdsu-article-st-charles-streetcar-line-to-become-wheelchair-accessible-consent-decree-says-9590384-2022-05-12-13_56_22.pdf">Consent
									decree forces St. Charles Streetcar line to become wheelchair
									accessible</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-traffic-article-5a1506a5-c8ef-514a-a3ec-e4687ffa2413-html-2022-05-12-13_57_11.pdf">New
									Orleans faces lawsuit over inaccessible bus stops</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="http://www.nola.com/politics/index.ssf/2016/04/new_orleans_st_charles_streetc.html">New
									Orleans St. Charles Streetcar under fire for lack of wheelchair
									access</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-romesentinel-stories-utica-settles-lawsuit-regarding-accommodations-at-city-hall-for-disabled-106531-2022-05-12-14_00_33.pdf"> Utica
									settles lawsuit regarding accommodations at City Hall for
									disabled </a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-business-article-56e8703c-7fa1-11ec-beed-f7cc4d8aae3e-html-2022-05-12-14_01_32.pdf"> Thousands
									of New Orleans sidewalks to get upgrades after legal deal; see timeline, work
									plan</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
												  href="https://ijadams.s3.amazonaws.com/bizer/screencapture-thetowntalk-story-news-2020-07-06-covid-19-louisiana-alexandria-city-council-harry-silver-virtual-meeting-5387731002-2022-05-12-14_03_13.pdf"> Federal
									judge: City of Alexandria must allow Councilman Silver to attend meetings virtually
								</a></Timeline.Item>

							</Timeline>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Home;
