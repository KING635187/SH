import { Image } from "./styled";

const BackgroundImage = () => {
  return (
    <Image
      width="1440"
      height="3"
      viewBox="0 0 1440 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="1440" y2="1.5" stroke="#004440" stroke-width="3" />
      <line
        className="line"
        x1="1094"
        y1="1.5"
        x2="1157"
        y2="1.49999"
        stroke="#2AC7BD"
        stroke-width="3"
      />
    </Image>
  );
};

export default BackgroundImage;
