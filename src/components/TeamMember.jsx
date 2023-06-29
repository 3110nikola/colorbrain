import { TypeAnimation } from "react-type-animation";

export const TeamMember = ({ image, name, position }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={image} />
      <TypeAnimation
        className="text-3xl"
        sequence={[
          name,
          1000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={0}
      />
      <p className="text-2xl text-white">{position}</p>
    </div>
  );
};
