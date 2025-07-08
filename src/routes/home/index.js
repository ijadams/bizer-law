import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';
import 'antd/dist/antd.css';
import { Avatar, Button, Carousel, Col, notification, Row, Timeline } from 'antd';
import { andy, garret, eva } from './index.const';
import { isDesktop } from 'react-device-detect';

const Home = () => {

	console.log('Welcome to Bizer & DeReus!');

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	notification.config({ duration: 0 });

	const openNotificationAndy = () => {
		notification.open(andy);
	};

	const openNotificationGarret = () => {
		notification.open(garret);
	};

	const openNotificationEva = () => {
		notification.open(eva);
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
								src="https://res.cloudinary.com/ia-interactive/image/upload/v1651080236/noun-civil-rights-4339810_h7f7gv.png" />
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
								src="https://res.cloudinary.com/ia-interactive/image/upload/v1651324929/noun-injury-231864_zvx9fd.png" />
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
							<a href="javascript:void;" onClick={openNotificationEva}>
								<Avatar
									size={{ xs: 50, sm: 50, md: 100, lg: 150, xl: 150, xxl: 150 }}
									src="https://res.cloudinary.com/ia-interactive/image/upload/v1751995301/eva-25_nikjfy.jpg"
								/>
								<h3>EVA M. KALIKOFF</h3>
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

								<Timeline.Item>
									<a class="text-white" target="_blank"
										href="https://news.yahoo.com/arrested-making-joke-facebook-jury-212045619.html?guccounter=1">Bizer
										& DeReus Secure $205,000 Jury Verdict Against the Rapides Parish Sheriff’s
										Office for Wrongfully Arresting Man for Joke on Facebook</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/St.+Charles+Avenue+streetcars+must+offer+wheelchair+access%2C+consent+decree+says+_+Traffic+_+nola.com.pdf">Bizer
									& DeReus Lawsuit Results in Consent Decree, Forcing the City of New Orleans to
									Become Wheelchair Accessible</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Queens+College+settles+federal+lawsuit+over+ADA+violations+%E2%80%93+QNS.com.pdf">Bizer &amp; DeReus
									Settle ADA Lawsuit Against Queens College; Agrees to Spend at Least One Million
									Dollars on Accessibility</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/Lafreniere+Park+in+line+for+%243.2+million+in+work+to+improve+handicap+access+_+News+_+nola.com.pdf">Bizer
									& DeReus Settle ADA Lawsuit Against Jefferson Parish; Agrees to Spend $3.2 Million
									on Accessibility</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Uber's+'Accessibility+Problem'+Goes+To+Bench+Trial+In+Calif.+-+Law360.pdf"> Bizer
									& DeReus take Uber to Trial on Behalf of Two Wheelchair Users</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Three+disabled+men+sue+City+of+New+Orleans+for+decade-long+wait+to+fix+curb+ramps+_+Business+News+_+nola.com.pdf"> Bizer
									& DeReus Sue New Orleans for Decades Long Wait to Fix Curb Ramps
									Ramps </a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Thousands+of+New+Orleans+sidewalks+to+get+upgrades+after+legal+deal%3B+see+timeline%2C+work+plan+_+Business+News+_+nola.com.pdf"> Bizer
									& DeReus Lawsuit Against the City of New Orleans Over Lack of Curb Ramps Results in
									Sweeping Upgrades</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/New+Orleans+reaches+settlement+in+case+that+says+94+percent+of+bus+stops+not+ADA-compliant+_+Traffic+_+nola.com.pdf">Bizer &amp; DeReus
									Prevail in Forcing the City of New Orleans to Make Its Bus Stops Compliant for
									Wheelchair Users</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/5th+Circ.+revives+would-be+juror%E2%80%99s+suit+over+inaccessible+courthouse+_+Reuters.pdf"> Bizer
									& DeReus win Appeal at the Fifth Circuit Court of Appeals Regarding Inaccessible
									Courthouse in Jackson, Mississippi </a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/University+Medical+Center+to+settle+deaf+discrimination+lawsuit+by+paying+%2450%2C000+_+Health_Fitness+_+nola.com.pdf"> Bizer &amp; DeReus
									Secures $50,000 Settlement from University Medical Center for Failure to Provide
									Sign Language Interpreters to a Deaf Woman</a></Timeline.Item>
								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/_Separate+federal+lawsuits+filed+against+two+Northshore+hospitals.pdf">Bizer
									& DeReus Sue Northshore Hospitals for Failure to Provide Sign Language
									Interpreters</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Non-ADA+compliance+lands+Shreveport+three+lawsuits.pdf">
									Bizer & DeReus Files Three Lawsuits Against the City of Shreveport for ADA
									Violations</a></Timeline.Item>

							</Timeline>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }} className={style.pressHide}>
							<Timeline>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Deaf+Students+Sue+Louisiana+Community+College+System+_+Louisiana+News+_+US+News.pdf">Bizer
									& DeReus Sue Delgado Community College on Behalf of Deaf Students Alleging
									Discrimination</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Uber+slapped+with+ADA+lawsuit+from+wheelchair-using+New+Orleanians+_+Traffic+_+nola.com.pdf"> Bizer
									& DeReus Sues Uber for Failing to Provide Wheelchair Accessible
									Vehicles</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://www.wdsu.com/article/disabled-saints-fan-files-lawsuit-against-superdome/21530526">Bizer
									& DeReus Sue the Superdome on Behalf of Wheelchair User who Cannot See the Game Over
									the Heads of Spectators </a></Timeline.Item>

								<Timeline.Item><a class="text-white"
									target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Deaf+Slidell+resident+sues+local+nursing+home+over+inadequate+interpreter+service+_+Health_Fitness+_+nola.com.pdf"> Bizer
									& DeReus Sue Nursing Home for Failing to Provide Sign Language Interpreters to Deaf
									Woman for Fourteen Days</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/screencapture-nola-news-traffic-article-5a1506a5-c8ef-514a-a3ec-e4687ffa2413-html-2022-05-12-13_57_11.pdf">Bizer
									& DeReus Sue the City of New Orleans Regarding Inaccessible Bus
									Stops</a></Timeline.Item>

								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/Utica+settles+lawsuit+regarding+accommodations+at+City+Hall+for+disabled+_+Daily+Sentinel.pdf"> Bizer
									& DeReus Lawsuit Forces Utica to Make its City Hall Accessible for Wheelchair
									Users </a></Timeline.Item>


								<Timeline.Item><a class="text-white" target="_blank"
									href="https://ijadams.s3.amazonaws.com/bizer/prints/COVID+19_+Louisiana+city+must+allow+councilman+virtual+meetings.pdf"> Bizer
									& DeReus Win Lawsuit to Force Alexandria to Allow 98 Year Old Councilman to Attend
									City Council Meetings Remotely
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
