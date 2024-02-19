import "./Image.css";

function Image({ img, heigh, width, alt }) {
  return (
    <>
      <img src={img} alt={alt} width={width} height={heigh} />
    </>
  );
}

export default Image;
