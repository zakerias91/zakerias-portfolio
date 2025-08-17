import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

export default function Header() {

    // Refs for sticky navigation
    const pageNavWrapperRef = useRef(null);
    const pageNavHolderRef = useRef(null);

    const [activeSection, setActiveSection] = useState('');

    // Section ids to scroll to
    const sections = [
        'experiences-section',
        'education-section',
        'skills-section',
        'portfolio-section',
    ];

    // Sticky navigation & scrollspy logic
    useEffect(() => {
        const navWrapper = pageNavWrapperRef.current;
        const navHolder = pageNavHolderRef.current;
        const navLinks = document.querySelectorAll('#page-nav a');

        // If refs or nav links are missing, exit early
        if (!navWrapper || !navHolder || navLinks.length === 0) return;

        // Get all target section elements based on nav link hrefs
        const sections = Array.from(navLinks).map(link => {
            const id = link.getAttribute('href').replace('#', '');
            const el = document.getElementById(id);
            return el ? { id, el } : null;
        }).filter(Boolean);

        const getOffsetTop = (el) => el.getBoundingClientRect().top + window.scrollY;
        let originalOffset = 0;

        const updateOffset = () => {
            originalOffset = getOffsetTop(navHolder);
        };

        // Scroll handler
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Sticky nav: make nav fixed when scrolled past original offset
            if (scrollTop >= originalOffset) {
                navWrapper.classList.add('fixed');
                document.body.classList.add('sticky-page-nav');
            } else {
                navWrapper.classList.remove('fixed');
                document.body.classList.remove('sticky-page-nav');
            }

            // ScrollSpy: determine current section based on scroll position
            let currentSectionId = null;

            for (let i = 0; i < sections.length; i++) {
                const { id, el } = sections[i];
                const offset = el.offsetTop - navWrapper.offsetHeight - 10;

                if (scrollTop >= offset) {
                    currentSectionId = id;
                }
            }

            // Update active class on nav links
            navLinks.forEach(link => {
                const targetId = link.getAttribute('href').replace('#', '');
                if (targetId === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };

        // Wait for layout to stabilize
        setTimeout(() => {
            updateOffset();
            handleScroll();
        }, 100);

        // Attach scroll and resize listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', () => {
            updateOffset();
            handleScroll();
        });

        // Cleanup listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateOffset);
        };
    }, []);

    return (
        <header className="header">
            {/* Top Action Bar */}
            <div className="top-bar container-fluid">
                <div className="actions">
                    <a className="btn d-none d-md-inline-block" href="https://uk.linkedin.com/in/zakerias-rowland-jones-9092338b"><FontAwesomeIcon icon={faPaperPlane} fixedWidth style={{ width: '1.25rem', height: '1rem', lineHeight: 1 }} /> Hire Me</a>
                    <a className="btn" href="assets/files/CV_Zakerias_Online.pdf" target="_blank"><FontAwesomeIcon icon={faDownload} fixedWidth style={{ width: '1.25rem', height: '1rem', lineHeight: 1 }} /> Download My Resume</a>
                </div>{/* actions */}

                {/* Social Links */}
                <ul className="social list-inline">
                    <li className="list-inline-item"><a href="https://uk.linkedin.com/in/zakerias-rowland-jones-9092338b"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth style={{ width: '1.25rem', height: '1rem', lineHeight: 1 }} /></a></li>
                    {/* <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li> */}
                    <li className="list-inline-item"><a href="https://github.com/zakerias91"><FontAwesomeIcon icon={faGithubAlt} fixedWidth style={{ width: '1.25rem', height: '1rem', lineHeight: 1 }} /></a></li>
                    {/* <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li> */}
                    {/* <li className="list-inline-item"><a href="#"><i className="fab fa-skype" aria-hidden="true"></i></a></li> */}
                </ul>{/* social */}

            </div>{/* top-bar */}

            {/* Intro Section */}
            <div className="intro">
                <div className="container text-center">
                    <Image
                        src="/assets/images/profile-picture.png"
                        alt="profile image"
                        width={160}
                        height={160}
                        className="profile-image"
                        priority
                    />
                    <h1 className="name">Zakerias Rowland-Jones</h1>
                    <div className="title">Software Engineer</div>
                    <div className="profile">
                        <p>As a young IT professional and 2012 graduate from <a href="https://www.coventry.ac.uk/">Coventry University</a>, I am eager to continue developing my skills and gain valuable work experiences. I currently serve as a Software Engineer at Loughborough University, where I am responsible for business analysis, package implementation, software development and user support tasks in order to meet the University&#39;s corporate information systems&#39; requirements.</p>
                    </div>{/* profile */}
                </div>{/* container */}
            </div>{/* intro */}

            {/* Contact Info Section */}
            <div className="contact-info">
                <div className="container text-center">
                    <ul className="list-inline">
                        <li className="email list-inline-item"><a href="https://uk.linkedin.com/in/zakerias-rowland-jones-9092338b">Let&#39;s Work Together</a></li>
                        {/* <li className="list-inline-item"><i className="fas fa-mobile-alt mr-2"></i><a href="#">0123 456 7890</a></li> */}
                        {/* <li className="website list-inline-item"><i className="fas fa-globe mr-2"></i><a href="https://www.zakerias.com/" target="_blank">zakerias.com</a></li> */}
                    </ul>
                </div>{/* container */}
            </div>{/* contact-info */}

            {/* Sticky Navigation */}
            <div ref={pageNavHolderRef} id="page-nav-space-holder" className="page-nav-space-holder d-none d-md-block">
                <div ref={pageNavWrapperRef} id="page-nav-wrapper" className="page-nav-wrapper text-center">
                    <div className="container">
                        <ul id="page-nav" className="nav page-nav list-inline">
                            {sections.map((id) => (
                                <li key={id} className="nav-item">
                                    <a
                                        className={`scrollto nav-link ${activeSection === id ? 'active' : ''}`}
                                        href={`#${id}`}
                                    >
                                        {id === 'experiences-section'
                                            ? 'Experience'
                                            : id.replace('-section', '').replace(/^\w/, (c) => c.toUpperCase())}
                                    </a>
                                </li>
                            ))}
                        </ul>{/* page-nav */}
                    </div>
                </div>{/* page-nav-wrapper */}
            </div>
        </header>
    );
}