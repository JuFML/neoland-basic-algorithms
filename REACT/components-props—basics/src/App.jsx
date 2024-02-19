import "./App.css";
import { Image, Paragraph, SubTitle, Title } from "./components";

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
      <Title title={data.title} />
      <SubTitle subtitle={data.subtitle} />
      <Paragraph paragraph={data.paragraph} />
      <Image
        img={data.img.src}
        heigh={data.img.heigh}
        width={data.img.width}
        alt={data.img.alt}
      />
    </>
  );
}

export default App;
