import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        //<h2>Senior Wordpress Developer at Coruscate Solution<span>2018-Present</span></h2>
                        <p>I have joined the Coruscate Solution as a Senior Wordpress Developer in the PHP team. My major part of the work has been into the field of creating Wordpress Themes from Scratch, Customise theme, customise Plugins and Solve all types of wordpress stuck and all types work into Web. I am also exploring the role of ReactJS.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        //<h2>Postgraduation at SSIT <span>2015</span></h2>
                        <p>I have completed my post-graduation studies with major in IT sector(Information Technology). I have taken courses like OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of SSIT(Shree Swaminarayan Institute of Technology) college.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        //<h2>Primary and Higher Education <span>2000-2013</span></h2>
                        <p>I have completed my post-graduation education with major subjects as Commerce with First class with Distinction. During my time at college, I have developed interest in solving complex problems of the fundamental maths which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
