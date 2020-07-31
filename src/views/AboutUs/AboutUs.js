import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import belfast from "assets/img/belfast.jpg";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardHeader: {
    background: "#2c2c2e",
    marginTop: "-20px",
    marginLeft: "20px",
    padding: "15px",
    borderRadius: "3px",
    boxShadow:
      "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)",
  },
};

const useStyles = makeStyles(styles);

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader className={classes.cardHeader}>
        <h4 className={classes.cardTitleWhite}>About Us</h4>
        <p className={classes.cardCategoryWhite}></p>
      </CardHeader>
      <CardBody>
        <img src={belfast} height="400px" />

        <h3>
          <b>Who are we?</b>
        </h3>

        <p>
          The CovidConnectNI.com website is managed by Belfast City Council’s
          City Innovation Team as part of our Smart Belfast programme.
        </p>
        <p>
          ‘Smart Belfast’ is about finding better ways for the city’s innovators
          – our universities, businesses, policymakers, start-ups, and community
          activists – to collaborate on innovative solutions for the benefit of
          all our citizens.
        </p>

        <h3>
          <b>What is CovidConnectNI.com?</b>
        </h3>
        <p>
          Covid-19 has created a range of challenges for public, community and
          voluntary sector organisations, with some needing digital support to
          continue to deliver critical services or manage a Covid-19 project.
        </p>
        <p>
          Belfast City Council is working with government, our universities, and
          the community and voluntary sector to support a coordinated
          contribution by the innovator community to solving Covid-19 challenges
          across Northern Ireland.
        </p>
        <p>
          The CovidConnectNI.com website aims to connect organisations and match
          challenge owners with potential digital solutions. It lists a range of
          offers and requests for digital support.
        </p>
        <p>
          The site encourages our local businesses, universities and innovators
          to use their digital expertise, capacity and resources to help tackle
          challenges during the Covid-19 crisis. And, where possible, to do so
          on a pro bono or discounted basis.
        </p>

        <h3>
          <b>Who can register?</b>
        </h3>
        <h4>
          <b>I need support</b>
        </h4>
        <p>
          Public agencies, local councils, government departments, community and
          voluntary organisations and social enterprises based in Northern
          Ireland that are directly dealing with a Covid-19 challenge and need
          digital support.
        </p>

        <h4>
          <b>I want to offer support</b>
        </h4>
        <p>
          Companies and organisations that can offer digital innovation support,
          on a pro bono or discounted basis where possible, to organisations
          experiencing Covid-19 challenges in Northern Ireland
        </p>

        <h3>
          <b>What types of support can I post?</b>
        </h3>
        <p>
          CovidConnectNI.com focuses on finding digital solutions for Covid-19
          challenges in Northern Ireland
        </p>
        <p>
          Examples include data analytics and visualisation, support for remote
          working and learning, 3D printing, software and database development,
          contact relationship management, web services, connectivity/telecoms
          support, project management, and support for social distancing and
          contact tracing
        </p>
        <p>
          For other types of offers/requests for support, you may find these
          links useful
        </p>
        <ul>
          <li>
            <i>UK Government</i> – call for medical equipment, PPE, logistics
            and other support
          </li>
          <li>
            <i>Volunteer Now </i>– call for volunteers and organisations needing
            volunteers
          </li>
          <li>
            <i>NICVA</i> – support and advice for community and voluntary
            organisations
          </li>
          <li>
            <i>Covid-19 Belfast Community Helpline</i> – food parcel
            distribution, prescription pick-ups and other support for citizens
          </li>
        </ul>

        <h3>
          <b>Contact Us</b>
        </h3>
        <p>
          The CovidConnectNI.com website is a BETA version and we are adding
          additional functionality over the next few weeks
        </p>
        <p>
          If you would like to provide feedback or ask a question, email
          <i>covidconnectni@belfastcity.gov.uk.</i>
        </p>
      </CardBody>
    </Card>
  );
}
