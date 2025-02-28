import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import HTMLFlipBook from "react-pageflip";
// import coverPage from "./pages/cover.js";
import React from "react";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.header}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

function Home() {
  return (
    <div>
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        // onFlip={this.onPage}
        // onChangeOrientation={this.onChangeOrientation}
        // onChangeState={this.onChangeState}
        // className="demo-book"
        // ref={(el) => (this.flipBook = el)}
      >
        <PageCover>My Thoughts</PageCover>
        <Page header="Initial Thoughts" number={1}>
          Where to begin?
        </Page>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
      </HTMLFlipBook>
    </div>
  );
}

export default Home;
