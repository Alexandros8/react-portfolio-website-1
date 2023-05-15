import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { MdWorkOutline } from 'react-icons/md'
import { GiAchievement } from 'react-icons/gi'
import { AiOutlineFolderOpen } from 'react-icons/ai'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <MdWorkOutline className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Year Full Time Learning</small>
                        </article>
                        <article className='about__card'>
                            <GiAchievement className='about__icon' />
                            <h5>Education</h5>
                            <small>Full Stack Dev Bootcamp and more
                            </small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>10+ Completed Projects</h5>

                        </article>
                    </div>
                    <p>Following my love for coding and math and the Greek trends as an 18 years old boy I went at Aristotle’s University, School of Electrical Engineering and Computer Science, where only the best students are accepted. After two years I realized the school was only about 10% coding and 90% knowledge I didn’t care about, so I decided to quit. Started again last year with an online Udemy (Colt Steele’s) Web Developer Bootcamp, I made sure I understood every topic well before completing the Bootcamp and I keep learning online every day since that. I have always enjoyed problem solving in software, have good communication skills and I am ready to be part of a team and accept any challenge. I am a perfectionist and a hard worker (Junior Tennis National Team, Mens Beach Volley National Team, top student in Math and Coding) with a great taste in design and highly sensitive to details.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About