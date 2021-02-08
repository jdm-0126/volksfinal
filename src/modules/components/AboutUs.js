import React, { useState } from 'react'
import VideoPlayer from 'react-video-markers';

export const AboutUs = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ volume, setVolume ] = useState(0.7);

    const handlePlay = () => {
        setIsPlaying(true);
      };

    const handlePause = () => {
        setIsPlaying(false);
      };

    const handleVolume = value => {
        setVolume(value);
      };
    return (
        // About
        <section className="page-section" id="about">
            <div className="container">
                {/* <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div> */}
                <ul className="timeline">
                    <li className="timeline-inverted">
                        <div><img className="rounded-circle img-fluid" src={require("../../assets/img/12.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                {/* <h4>2009-2011</h4> */}
                                <h4 className="subheading text-uppercase">Volkslift International (PhilS)</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Volkslift International (Phils), Inc. is the sole distributor of Volkslift elevators, escalators, and moving walkways in the Philippines. They take pride in their competencies, acquired from superior engineering skills and technologies in Germany.</p></div>
                        </div>
                        <li className="timeline-inverted">
                        <VideoPlayer
                            url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            isPlaying={isPlaying}
                            volume={volume}
                            onPlay={handlePlay}
                            onPause={handlePause}
                            onVolume={handleVolume}
                            width='480px'
                            timeStart='0'
                            />
                        </li>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../../assets/img/13.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Volkslift International (Phils), Inc. is the sole distributor of Volkslift elevators, escalators, and moving walkways in the Philippines. They take pride in their competencies, acquired from superior engineering skills and technologies in Germany.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../../assets/img/14.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    {/* <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}