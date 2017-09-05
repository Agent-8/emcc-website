import React from 'react';
import axios from 'axios';
import Link from 'react-router/lib/Link';

import { Container, Row, Columns } from '../components/Layout';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.props.setTitle('Home');
  }

  render() {
    let heroStyles = {
      background: //'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ' +
                  //'url("https://www.google.com/gmail/about/images/home-hero_2x.jpg")',
                  'rgba(140, 0, 0, 1)',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '70vh',
      minHeight: 'fit-content',
      color: "#EEEEEE",
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      fontFamily: '\'Montserrat\', sans-serif'
    }
    let headingStyles = {
      fontWeight: '100',
      fontSize: 'calc(10vw + 4.0rem)',
      marginBottom: '4px'
    }
    let subheadingStyles = {
      fontWeight: '300',
      paddingBottom: "10px"
    }

    let docStyles = {
      padding: '50px 0px 0px'
    }
    return (
      <div>
        <div id="hero" style={heroStyles}>
          <Container style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={headingStyles}>EMCC</h1>
            <h3 style={subheadingStyles}>The Exeter Math Club&nbsp;Competition</h3>
            <h5 style={{fontWeight: '300'}}>January 21, 2018, Phillips Exeter Academy</h5>
            <p style={{fontWeight: '200', maxWidth: '500px'}}>
              The 2017 Exeter Math Club Competition is now over.  Thank you for your participation!
              Coaches will be emailed results soon.
            </p>
            <div style={{ textAlign: "center", marginBottom: "10vh" }}>
              {(() => {if (!this.props.user) {
                return (
                  <div>
                    <Link to="login" className="button" style={{ color:
                      "#EEEEEE", margin: "auto", display: "inline",
                      fontSize: "1.2em", fontFamily: "Montserrat",
                      fontWeight: "200", paddingTop: "10px",
                      paddingBottom: "10px", marginRight: "1em" }}>Login</Link>
                  </div>
                )
              }
              else {
                return <Link to="dashboard" className="button button-primary" style={{ margin: "auto", display: "inline", fontSize: "1.2em",
                  fontFamily: "Montserrat", fontWeight: "200", paddingTop: "10px", paddingBottom: "10px" }}>View your teams</Link>}
              })()}
            </div>
          </Container>
        </div>
        <div style={docStyles}>
          <Container>
            <Row>
              <Columns width="ten" offset="one" style={{ fontSize: "1.4em", color: "#333333" }}>
                <h3>
                  What is EMCC?
                </h3>
                <p>
                  The Exeter Math Club Competition is a middle-school
                  mathematics competition held annually at Phillips Exeter Academy in
                  Exeter, New Hampshire. EMCC provides middle schoolers a event
                  where they can join like-minded peers from a mathematical
                  community spanning the globe.
                </p>
                <p>
                  While designing EMCC, we've taken inspiration from the contests
                  that we ourselves attend and formatted our contest similarly.
                  This means that attending EMCC will not only be an enjoyable
                  experience but will also prepare you for future contests.
                </p>

                <h3>
                  Who can attend?
                </h3>
                <p>
                  Anyone in 8th grade or below. We accept registration
                  as teams of students from the same school or individuals.
                  Teams consist of four people, so we will combine individuals
                  and small teams into teams of four. Competitors aren't limited
                  to just the United States&mdash;in the past, we've hosted students
                  from far away places like China and Illinois.
                </p>

                <h3>
                  How much does it cost?
                </h3>
                <p>
                  Registration fees are $50 for teams and $15 for individuals.
                  We'll arrange a shuttle to and from nearby aiports, but
                  competitors will have to cover the expense themselves.
                  We can't compensate competitors for any travel expenses like
                  gas or bus/train/airplane tickets.
                </p>
                <p>
                  For teams traveling from outside a 300-mile radius, we'll
                  provide three rooms per team for a one night stay at the&nbsp;
                  <a href="http://www.marriott.com/hotels/travel/psmex-fairfield-inn-and-suites-portsmouth-exeter/">
                  Exeter Fairfield Inn</a>.
                </p>
              </Columns>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;

/*
Removed registration buttons

in hero:

<Link to="register" className="button button-primary"
                      style={{ margin: "auto", display: "inline",
                      fontSize: "1.2em", fontFamily: "Montserrat",
                      fontWeight: "200", paddingTop: "10px",
                      paddingBottom: "10px" }}>Register</Link>

in the bottom of the page:

<Link to="register" className="button button-primary" style={{ margin: "auto", display: "inline", fontSize: "1em",
                          fontFamily: "Montserrat", fontWeight: "200", paddingTop: "10px", paddingBottom: "10px" }}>Register</Link>

*/

/*

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h3 style={{ textAlign: "center", marginBottom: "4px" }}>
                  Regration is now closed.
                </h3>
                <p style={{fontWeight: '200', maxWidth: '500px',
                           fontSize: '14px', marginBottom: "25px" }}>
                  We've had an unexpectedly high number of signups, which have forced
                  us to close registration for this year's EMCC. You can still edit
                  confirmed teams until January 15. If you weren't able to sign up, we hope that
                  you can join us next year!
                </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  {(() => {if (!this.props.user) {
                    return (
                      <div>
                        <Link to="login" className="button" style={{ margin: "auto", display: "inline", fontSize: "1em",
                          fontFamily: "Montserrat", fontWeight: "200", paddingTop: "10px", paddingBottom: "10px", marginRight: "1em" }}>Login</Link>
                      </div>
                    );
                  }
                  else {
                    return <Link to="dashboard" className="button button-primary" style={{ margin: "auto", display: "inline", fontSize: "1em",
                      fontFamily: "Montserrat", fontWeight: "200", paddingTop: "10px", paddingBottom: "10px" }}>Edit your teams</Link>
                  }})()}
                </div>
*/
