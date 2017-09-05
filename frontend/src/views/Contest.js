import React from 'react';
import Link from 'react-router/lib/Link';

import { Container, Row, Columns } from '../components/Layout';

class Contest extends React.Component {
  constructor(props){
    super(props);
    this.props.setTitle('Contest');
  }

  render() {
    return (
      <Container>
        <Row>
          <Columns width="ten" offset="one" style={{ fontSize: "1.4em", color: "#333333" }}>
            <div style={{ paddingBottom: "5px", margin: "40px 0 20px", borderBottom: "1px solid #bbb"}}>
              <h2>Contest Information</h2>
            </div>
            <p>Detailed information is also available in the 2018 Coaches' Packet, which coaches can access by logging in.
            These packets will also be handed out at registration.</p>
            <h3>
              Schedule
            </h3>
            <table>
              <tr>
                <th>Start</th>
                <th>End</th>
                <th>Event</th>
                <th>Location</th>
              </tr>
              <tr>
                <td style={{borderBottom: "none"}}>9:00</td>
                <td style={{borderBottom: "none"}}>10:00</td>
                <td style={{borderBottom: "none"}}>Registration</td>
                <td style={{borderBottom: "none"}}>Powell Hall (Music Center)</td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td colSpan={2}><p style={{ fontSize: "0.8em" }}>Teams will be introduced to their proctors at registration.
                If teams arrive late for registration, they should go directly to the opening ceremony, in Assembly Hall.</p></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Light Breakfast</td>
                <td>Powell Hall (Music Center)</td>
              </tr>
              <tr>
                <td style={{borderBottom: "none"}}>10:00</td>
                <td style={{borderBottom: "none"}}>10:30</td>
                <td style={{borderBottom: "none"}}>Opening Ceremony</td>
                <td style={{borderBottom: "none"}}>Assembly Hall (Academy Building)</td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td colSpan={2}><p style={{ fontSize: "0.8em" }}>Proctors will lead teams after the opening ceremony directly to
                their classrooms for the individual rounds.</p></td>
              </tr>
              <tr>
                <td>10:30</td>
                <td>1:00</td>
                <td>Team and Individual Rounds</td>
                <td>Classrooms (Academy Building)</td>
              </tr>
              <tr>
                <td>1:00</td>
                <td>1:30</td>
                <td>Lunch</td>
                <td>Academy Building</td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td colSpan={2}><p style={{ fontSize: "0.8em" }}>Pizza will be available for free for students and coaches in
                the classrooms in which the students took the contest. Parents and other adults must bring their own lunch or
                buy lunch in town.</p></td>
              </tr>
              <tr>
                <td>1:45</td>
                <td>3:15</td>
                <td>Guts Round</td>
                <td>Assembly Hall</td>
              </tr>
              <tr>
                <td>3:15</td>
                <td>3:30</td>
                <td>Break</td>
                <td>Assembly Hall</td>
              </tr>
              <tr>
                <td>3:30</td>
                <td>4:00</td>
                <td>Awards</td>
                <td>Assembly Hall</td>
              </tr>

            </table>

            <h3>
              Locations
            </h3>
            <p>
              The Academy Building, the main hub for the competition, is the main building on campus
              overlooking the lawn next to Front Street. Registration will take place in Powell Hall of the Forrestal-Bowld
              Music Center, located to the left of the entrance. Breakfast will also be available in Powell Hall.
              The opening and closing ceremonies, along with the Guts Round, will take place in the
              Assembly Hall, located on the second floor of the Academy Building. The individual and team rounds will
              take place in classrooms in the Academy Building. Lunch will also be available for contestants and
              coaches in the classrooms.
            </p>
            <h3>
              Format
            </h3>

            <h4>
              Individual Rounds
            </h4>
            <p>
              The individual round consists of two parts, taken one after
              another. The first part has 20 questions in 25 minutes,
              emphasizing speed. The second part is 10 questions in 45
              minutes, emphasizing accuracy in problem solving. Each
              student's individual score is added to their team score.
            </p>
            <h4>
              Team Round
            </h4>
            <p>
              The team round is a 45 minute round where everybody on the
              team can work together to solve 15 questions. The questions
              will mostly be unrelated to each other, but some of them may
              be strung together by a common theme.
            </p>
            <h4>
              Guts Round
            </h4>
            <p>
              The Guts Round is a live round consisting of 24 questions in
              75 minutes. The questions are given to the teams in sets of
              three. At the beginning of the round, each team will send a
              runner down to one of the scoring tables (spaced evenly
              throughout the contest hall to minimize differences in
              distance) to get the first set of three problems, and bring
              it back to their team. The team then works together for as
              long as they need (within the 75 minutes) to solve these
              three problems. When they're ready, the runner then drops off
              their answers at a scoring table, where they will receive the
              next set of three. At each scoring table, the problems will be
              scored as soon as they are dropped off, and a running tally of
              each team's points and progress will displayed on a projector
              screen at the front of the hall. The point value for each
              problem increases between each set of three.
            </p>

            <h4>
              Scoring and Tie-breaking
            </h4>
            <p>
              Rounds are scored as follows.  Each of the 20 questions in the
              speed round is worth 3 points, for a total of 60 points.  Each
              of the 10 questions in the accuracy round is worth 9 points, for
              a total of 90 points.  In total each individual can score up to 150 points.
              Each of the 15 questions in the team round is worth 20 points, for
              a total of 300 points.  Each of the 24 questions in the guts round are
              weighted by set (in order, the scores are 5, 7, 9, 11, 13, 15, 18, 22),
              for a total of 300 points.  Each team's sweepstakes score is calculated
              as the sum of the four individual scores (up to 600 points) and the sum
              of the two team scores (also up to 600 points), for a grand total of
              up to 1,200 points.
            </p>
            <p>
              In the case of a tie in any round, the tie will be broken as
              follows.
            </p>
            <p>
              Within a single round: The student or team who solved the last
              problem will be ranked higher.  If the tie persists, the second
              last problem will be used, then the third last problem, and so on.
              A tie will not be broken in the case where two students or teams
              solved the exact same set of problems.
            </p>
            <p>
              Individual total: The student who ranked higher in the accuracy
              round will be ranked higher overall.  If a tie persists, the student
              who ranked higher in the speed round will be ranked higher.
            </p>
            <p>
              Team sweepstakes: The team who has a higher total score of team and
              guts round will be ranked higher.  If a tie persists, the team who
              ranked higher in guts round will be ranked higher.  If a tie still
              persists, the team who ranked higher in team round will be ranked higher.
            </p>
            <p>
              No individual or team will be tie-broken out of the top 10. For example,
              in the case of a three-way tie for the 9th place individual, after tie-breaking
              there will be one person receiving 9th place and two receiving 10th place.
            </p>

            <h3>
              Rules
            </h3>
            <h4>
              Prohibited Items
            </h4>
            <p>
              Books, notes, calculators, pocket organizers, slide-rules,
              abaci, calculator wrist watches, or any other kind of
              computational aid are prohibited during all parts of the
              competition. The same goes for graph paper, rulers,
              protractors, compasses, or any other drawing aid. Similarly,
              laptops, PDAs, cell phones, or any other electronic
              communication devices are also not allowed.  Any individual
              or team breaking these rules could be disqualified.
            </p>
            <h4>
              Forms of Answers
            </h4>
            <ul>
              <li>Answers need to be simplified and exact unless otherwise
              specified. (So 3.14 will not work for pi, nor will 4/12
              instead of 1/3.)</li>
              <li>No partial credit will be given unless specified otherwise.</li>
              <li>Fractions should be simplified and improper. (For example,
              use 13/4 as opposed to 26/8 or 3 1/4.)</li>
              <li>Radicals should be simplified so that the radicand does
              not contain any fractions nor be divisible by the square of
              any integer greater than one. Denominators should be rationalized.</li>
              <li>Correct mathematical notation should be used.</li>
            </ul>
            <p><strong>All decisions made by the EMCC judges are final.</strong></p>
          </Columns>
        </Row>
      </Container>
    );
  }
}

export default Contest;
