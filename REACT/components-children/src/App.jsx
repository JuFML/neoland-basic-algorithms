import "./App.css";
import { Image, Paragraph, SubTitle, Title } from "./components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const data = {
    title: "Welcome to Components ReactJS",
    subtitle: "This is a example components with ReactJS",
    paragraph: "This is a paragraph",
    img: {
      src: "/react.svg",
      heigh: "100px",
      width: "100px",
      alt: "React",
    },
  };

  return (
    <>
      <Header>
        <Title title={data.title} />
      </Header>
      <Main>
        <SubTitle subtitle={data.subtitle} />
        <Image
          img={data.img.src}
          heigh={data.img.heigh}
          width={data.img.width}
          alt={data.img.alt}
        />
      </Main>
      <Footer>
        <Paragraph paragraph={data.paragraph} />
      </Footer>
    </>
  );
}

export default App;
