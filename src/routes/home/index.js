import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';
import 'antd/dist/antd.css';
import { Row, Col, Button, Avatar, notification, Carousel, Timeline } from 'antd';
import { andy, garret, emily } from './index.const';
import { SmileOutlined } from '@ant-design/icons';

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

	function isDesktop() {
		let check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		console.log('isdesktop', !check)
		return !check;
	}

	const contentStyle = {
		height: '80vh',
		color: 'white',
		textAlign: 'center',
		padding: '3rem 0',
		background: 'transparent',
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
					{isDesktop() === true &&
						<video
							preload="none"
							playsInline autoPlay muted loop
							poster="https://res.cloudinary.com/ia-interactive/image/upload/v1651077654/fq_zwkfrn.jpg">
							<source data-src="" src={isDesktop() ? 'https://res.cloudinary.com/ia-interactive/video/upload/v1651072097/quarter_rats_w9cxuz.mp4' : ''} type="video/mp4"></source>
						</video>
					}

					<svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
						<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
					</svg>
				</div>
				<div className={style.ctaContainer}>
					<div>
						<h1>A <span style="font-weight: 700; color: #3731f9;">civil rights</span> legal firm</h1>
						<hr></hr>
						<h2>Bizer & DeReus <span style="font-weight: 700; color: #7f7bfb">fights</span> for the <span
							style="font-weight: 700; color: #7f7bfb;">rights of all Americans</span>. We concentrate on increasing access
							for <span style="font-weight: 700; color: #7f7bfb;">persons with disabilities</span> and <span
								style="font-weight: 700; color: #7f7bfb">minority groups</span> through litigation.</h2>

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
					<h1>What people are saying about Bizer & DeReus</h1>
					<Row gutter={[16, 16]}>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Timeline>
								<Timeline.Item color="purple" dot={<SmileOutlined />}>
									<a class="text-white" target="_blank" href="https://www.law360.com/california/articles/1458083/tearful-uber-worker-defends-accessibility-efforts-at-ada-trial-"> Tearful Uber Worker Defends Accessibility Efforts at ADA Trial </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.law360.com/articles/1456727"> Uber's 'Accessibility Problem' Goes to Bench Trial in Calif. </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.nola.com/news/business/article_94e391ca-627c-11eb-9f37-079b712f7b75.html"> Three Disabled Men Sue City of New Orleans for Decade-Long Wait to Fix Curb Ramps </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.reuters.com/legal/litigation/5th-circ-revives-would-be-jurors-suit-over-inaccessible-courthouse-2021-06-16/"> 5th Circ. Revives Would-Be Juror’s Suit Over Inaccessible Courthouse </a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank" href="https://www.youtube.com/watch?v=kuf-qGZ7a90"> Bizer &amp; DeReus Prevail in Making the St. Charles Avenue Streetcar Accessible for Wheelchair Users</a></Timeline.Item>
								<div className={style.pressHide}>
									<Timeline.Item><a class="text-white" target="_blank" href="https://www.timesledger.com/stories/2018/40/qclawsuit_2018_10_05_q.html">Bizer &amp; DeReus Settle ADA Lawsuit Against Queens College; Agrees to Spend at Least One Million Dollars on Accessibility</a></Timeline.Item>
									<Timeline.Item><a class="text-white" target="_blank" href="http://www.wdsu.com/article/separate-federal-lawsuits-filed-against-two-north-shore-hospitals/9934363">&ZeroWidthSpace;Separate federal lawsuits filed against two Northshore hospitals</a></Timeline.Item>
									<Timeline.Item><a class="text-white" target="_blank" href="http://www.wdsu.com/article/st-charles-streetcar-line-to-become-wheelchair-accessible-consent-decree-says/9590384">Consent decree forces St. Charles Streetcar line to become wheelchair accessible</a></Timeline.Item>
									<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/traffic/index.ssf/2016/03/new_orleans_faces_lawsuit_over.html">New Orleans faces lawsuit over inaccessible bus stops</a></Timeline.Item>
									<Timeline.Item><a class="text-white" target="_blank" href="http://www.nola.com/politics/index.ssf/2016/04/new_orleans_st_charles_streetc.html">New Orleans St. Charles Streetcar under fire for lack of wheelchair access</a></Timeline.Item>
								</div>
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
								<Timeline.Item color="purple" dot={<SmileOutlined />}><a class="text-white" target="_blank" href="https://www.nola.com/health/index.ssf/2018/06/deaf_slidell_resident_sues_loc.html"> Deaf Slidell resident sues local nursing home over inadequate interpreter service</a></Timeline.Item>
							</Timeline>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Home;
