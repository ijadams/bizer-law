import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style';
import 'antd/dist/antd.css';
import { Row, Col, Button, Avatar, notification, Carousel } from 'antd';
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
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
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
						<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:red;"></path>
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
						<Col span={12}>
							<img src="https://res.cloudinary.com/ia-interactive/image/upload/v1651080236/noun-civil-rights-4339810_h7f7gv.png"/>
							<h3>CIVIL RIGHTS</h3>
							<hr></hr>
							<p>Bizer & DeReus is one of a small number of Louisiana law firms that concentrate on enforcing the rights of individuals with disabilities under the Americans with Disabilities Act of 1990 (ADA), the Rehabilitation Act of 1973, and the Fair Housing Act. Bizer & DeReus is committed to ensuring that individuals with disabilities receive equal access to public and private facilities and services.</p>
						</Col>
						<Col span={12}>
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
						<Col span={8}>
							<a href="javascript:void;" onClick={openNotificationAndy}>
								<Avatar
									size={{ xs: 50, sm: 50, md: 100, lg: 150, xl: 150, xxl: 150 }}
									src="https://res.cloudinary.com/ia-interactive/image/upload/v1651086619/andy_pgyvh2.jpg"
								/>
								<h3>ANDREW D. BIZER</h3>
							</a>
						</Col>
						<Col span={8}>
							<a href="javascript:void;" onClick={openNotificationGarret}>
								<Avatar
									size={{ xs: 50, sm: 50, md: 100, lg: 150, xl: 150, xxl: 150 }}
									src="https://res.cloudinary.com/ia-interactive/image/upload/v1651086618/garret_ogd1og.jpg"
								/>
								<h3>GARRET S. DEREUS</h3>
							</a>
						</Col>
						<Col span={8}>
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
						<h3 style={contentStyle}>1</h3>
					</div>
					<div>
						<h3 style={contentStyle}>2</h3>
					</div>
					<div>
						<h3 style={contentStyle}>3</h3>
					</div>
					<div>
						<h3 style={contentStyle}>4</h3>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Home;
