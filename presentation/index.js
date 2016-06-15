// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

var noteStyle = {
  textColor: "heading",
  textAlign: "flex-bottom right",
  padding: "150px 80px 0px 0px",
  fontSize: "0.5em"
}

const images = {
  desk: require("../assets/desk.jpg"),
  code: require("../assets/code.png")
};

preloader(images);

// from autovance/ui
const theme = createTheme({
  background: '#e9e9e9',
  text: '#f5f5f5',
  primary: '#333', //#151E49
  secondary: '#EA0000',
  heading: '#8c8484' //#68758E
}, {});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={250} progress={"bar"}>

          <Slide transition={["slide"]} bgImage={images.desk.replace("/", "")} bgDarken={0.7}>
            <Heading size={1} fit caps lineHeight={1} textColor="heading">Working With a Startup</Heading>
            <Layout>
                <Fill><Text caps textAlign="right" textColor="secondary">or: </Text></Fill>
                <Fill><Text type="bold" textColor="text">How working for a smaller company scratches that itch</Text></Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} align={"right center"} notes="test">
            <Heading size={1} fit caps lineHeight={1} textColor="heading">The Startup Environment</Heading>

              <Text margin="40px 0px 0px" textColor="secondary" textAlign={"right"}>freedom of choice</Text>
              <Text textColor="secondary" textAlign={"right"}>integral participation</Text>
              <Text textColor="secondary" textAlign={"right"}>highly motivated team environment</Text>

          {/*__·__ _high level descisions left to me_
          __·__ _responsibilities are high_
          __·__ _meetings to decide direction_
          __·__ _input from all parties important_
          __·__ _we all use each other for problems_
          __·__ _tight knit group moving forward_*/}
          </Slide>


          <Slide transition={["slide"]} align={"left center"}>
            <Heading size={1} fit caps textColor="heading">Company: The role of an employee in a startup</Heading>

              <Text margin="40px 0px 0px" textColor="secondary" textAlign={"left"}>changed the way I made desicions</Text>
              <Text textColor="secondary" textAlign={"left"}>environment - friendly and competitive</Text>
              <Text textColor="secondary" textAlign={"left"}>the 'feelgood': involvement</Text>

              {/*__·__ immediate stakeholder
              __·__ silicon coulee?
              __·__ what is the 'ideal workplace'
              __·__ lasting impact on the company
              __·__ motivated by being a part of something*/}
          </Slide>

          <Slide transition={["slide"]} bgImage={images.code.replace("/", "")} bgDarken={0.8}>
            <Heading lineHeight={1} fit align={"center flex-start"}>Learning: from nothing to now (highlights)</Heading>
              <Text textColor="heading"></Text>
              <Text textColor="heading"></Text>
              <Layout>
                <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="text" margin={10}>
                    confidence
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="text" margin={10}>
                    contributions
                  </Heading>
                </Fill>
              </Layout>

          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">Learning objectives</Heading>

            <Text margin="50px 0px 0px" bold textColor="text" textAlign={"center"}>how they changed</Text>
            <Text textColor="text" textAlign={"center"}>evolved from simple to complex</Text>

            <Text margin="50px 0px 0px" bold textColor="text" textAlign={"center"}>my idea of a software job</Text>
            <Text textColor="text" textAlign={"center"}>expectations that I laid upon myself changed</Text>

          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">Learning outcomes</Heading>

            <Text margin="50px 0px 0px" bold textColor="text" textAlign={"center"}>some objectives were met</Text>
            <Text textColor="text" textAlign={"center"}>basic language objectives</Text>
            <Text textColor="text" textAlign={"center"}>basic team objectives</Text>

            <Text margin="50px 0px 0px" bold textColor="text" textAlign={"center"}>most are still underway</Text>
            <Text textColor="text" textAlign={"center"}>improving my abilities</Text>
            <Text textColor="text" textAlign={"center"}>improving my teamwork</Text>

            <Text margin="50px 0px 0px" bold textColor="text" textAlign={"center"}>will they ever end?</Text>
            <Text bold textColor="secondary" textAlign={"center"}>no</Text>


          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading size={1} fit caps lineHeight={1} textColor="heading">My motivators (that itch)</Heading>
            <Text textColor="text" textAlign={"center"}>finding motivators is important to feeling good about work</Text>

              <Text margin="50px 0px 0px" bold textAlign="center" textColor="secondary">creating good code</Text>
              <Text bold textAlign="center" textColor="secondary">solving problems</Text>
              <Text bold textAlign="center" textColor="secondary">improving quality through collaboration</Text>

          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading textSize="3em" caps lineHeight={1} textColor="heading">Conclusion</Heading>

            <Text bold textColor="secondary" textAlign={"center"}>i've become an integral part of the company</Text>
            <Text textColor="secondary" textAlign={"center"}>have come a long way, but the learning is still in full swing</Text>
            <Text textColor="secondary" textAlign={"center"}>becoming a part of something great</Text>

            <Layout>
              <Text style={noteStyle}>Made with
              <Link textColor="tertiary" href="https://github.com/FormidableLabs/spectacle"> spectacle </Link>
              ontop of <Link textColor="tertiary" href="https://github.com/facebook/react"> react </Link>.
              Presentation code available at on
              <Link textColor="tertiary" href="https://github.com/forstermatth/coop-presentation"> github</Link>. </Text>
            </Layout>
          </Slide>

        </Deck>
      </Spectacle>

    );
  }
}
