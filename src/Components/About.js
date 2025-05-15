import React from 'react'
import './CSS/about.css'
import dummyImg from './Imgs/dummy-img-male.png';
import dummyImgFemale from './Imgs/dummy-img-female.png';
export default function About() {
    return (
        <>

            <div className='about-section bg-light'>

                <div className="card-fluid text-light bg-dark text-center" id='card-height'>
                    <div className="card-header">
                        <h1>About Us</h1>
                    </div>
                    <div className="card-body">
                        <p className="card-text">We are a team of cybersecurity experts dedicated to providing cutting-edge malware analysis
                            services. Our mission is to help individuals and organizations protect themselves from the
                            ever-evolving threat landscape.</p>
                        <p className="card-text">Our advanced analysis engine combines static and dynamic analysis techniques, sandboxing, and
                            machine learning to identify even the most sophisticated malware. We strive to provide
                            accurate, detailed, and actionable reports that empower our users to make informed decisions.</p>
                    </div>

                </div>
            </div>

            <div className="container-fluid bg-dark justify-content-center" id='cont-size'>
                <div className="team-info-section">
                    <div class="card mb-3" id='card-size' >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={dummyImg} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Ashank</h5>
                                    <p class="card-text">Ashank Tripathi is a B.Tech student in Computer Science and Engineering (Cybersecurity) at Parul University. With a strong interest in digital forensics, he is passionate about investigating cyber threats, analyzing digital evidence, and enhancing security frameworks. Ashank is dedicated to exploring innovative solutions in cybersecurity and aims to contribute to the field through research in forensic methodologies and cybercrime prevention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" id='card-size'>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={dummyImgFemale} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Sneha</h5>
                                    <p class="card-text">Sneha Solanki is a B.Tech student in Computer Science and Engineering (Cybersecurity) at Parul University. With a strong interest in networking and designing, she is passionate about building secure network infrastructures and enhancing cybersecurity frameworks. Sneha is dedicated to exploring innovative solutions in cybersecurity and aims to contribute to the field through research in network security and system design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" id='card-size'>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={dummyImg} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nishant</h5>
                                    <p class="card-text">Nishant Sharma is a B.Tech student in Computer Science and Engineering (Cybersecurity) at Parul University. With a keen interest in web development and cybersecurity, he is passionate about building secure, efficient digital solutions while exploring advanced security practices. Nishant aims to integrate innovative web technologies with robust cybersecurity measures, contributing to the development of safer and more resilient online systems through continuous learning and research.q    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" id='card-size'>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={dummyImg} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Vishal</h5>
                                    <p class="card-text">Vishal Giri is a B.Tech student in Computer Science and Engineering (Cybersecurity) at Parul University. With a strong passion for web development, he is focused on creating secure, efficient, and innovative web solutions. Vishal is also interested in networking and aims to integrate robust security practices into web technologies. Through continuous learning and research,  he aspires to contribute to the advancement of secure web development and modern cybersecurity frameworks.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
