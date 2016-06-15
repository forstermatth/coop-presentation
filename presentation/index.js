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

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


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

              <Text padding={20} bold textColor="secondary" textAlign={"right"}>freedom of choice</Text>
              <Text padding={20} textColor="secondary" textAlign={"right"}>integral participation</Text>
              <Text padding={20} textColor="secondary" textAlign={"right"}>highly motivated team environment</Text>

          {/*__·__ _high level descisions left to me_
          __·__ _responsibilities are high_
          __·__ _meetings to decide direction_
          __·__ _input from all parties important_
          __·__ _we all use each other for problems_
          __·__ _tight knit group moving forward_*/}
          </Slide>


          <Slide transition={["slide"]} align={"left center"}>
            <Heading size={1} fit caps textColor="heading">Company: The role of an employee in a startup</Heading>

              <Text padding={20} bold textColor="secondary" textAlign={"left"}>it affects the choices you make</Text>
              <Text padding={20} textColor="secondary" textAlign={"left"}>environment</Text>
              <Text padding={20} textColor="secondary" textAlign={"left"}>the 'feelgood': involvement</Text>

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

            <Text padding={20} bold textColor="text" textAlign={"center"}>how they changed</Text>
            <Text padding={20} textColor="text" textAlign={"center"}>evolved from simple to complex</Text>
            <Text padding={20} bold textColor="text" textAlign={"center"}>my idea of a software job</Text>
            <Text padding={20} textColor="text" textAlign={"center"}>expectations that I laid upon myself changed</Text>

          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">Learning outcomes</Heading>

            <Text bold textColor="text" textAlign={"center"}>some objectives were met</Text>
            <Text textColor="text" textAlign={"center"}>basic language objectives</Text>
            <Text textColor="text" textAlign={"center"}>basic team objectives</Text>
            <Text textColor="primary" textAlign={"center"}>fill</Text>
            <Text bold textColor="text" textAlign={"center"}>most are still underway</Text>
            <Text textColor="text" textAlign={"center"}>improving my abilities</Text>
            <Text textColor="text" textAlign={"center"}>improving my teamwork</Text>
            <Text textColor="primary" textAlign={"center"}>fill</Text>
            <Text bold textColor="text" textAlign={"center"}>will they ever end?</Text>
            <Text bold textColor="secondary" textAlign={"center"}>no</Text>


          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading size={1} fit caps lineHeight={1} textColor="heading">My motivators (that itch)</Heading>
            <Text textColor="text" textAlign={"center"}>finding motivators is important to feeling good about work</Text>

              <Text textAlign="center" textColor="primary">filler</Text>

              <Text textAlign="center" textColor="secondary">creating good code</Text>
              <Text textAlign="center" textColor="secondary">solving problems</Text>
              <Text textAlign="center" textColor="secondary">improving quality through collaboration</Text>

          </Slide>

          <Slide transition={["slide"]} align={"center center"}>
            <Heading textSize="3em" caps lineHeight={1} textColor="heading">Conclusion</Heading>
            <Text padding={20} bold textColor="primary" textAlign={"left"}>filler</Text>
            <Text bold textColor="secondary" textAlign={"center"}>i've become an integral part of the company</Text>
            <Text textColor="secondary" textAlign={"center"}>have come a long way, but the learning is still in full swing</Text>
            <Text textColor="secondary" textAlign={"center"}>becoming a part of something great</Text>
          </Slide>

        </Deck>
      </Spectacle>


        /*<Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>*/
    );
  }
}
