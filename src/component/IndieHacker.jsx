import ActionButton from "./ActionButton";
import Cardi from "./Cardi";

function IndieHackerOS(link) {
  const actionButtons = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8239055021a4564c26ba5a0b607cdc2350c72bbe2cd456f96eedeab2eb425275?placeholderIfAbsent=true&apiKey=233120abae304e9c99fac79582ad5875",
      width: "122px",
    },
  ];
  const actionButtons2 = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/159bffab76bb120af881799de8716260e81b64e4007be96c5615a57f1ff16dde?placeholderIfAbsent=true&apiKey=233120abae304e9c99fac79582ad5875",
      width: "131px",
    },
  ];
  return (
    <main
      className="flex flex-col px-px max-w-[295px]"
      style={{ height: "auto", padding: "10px" }}
    >
      <Cardi web={link} style={{ height: "auto", maxHeight: "150px" }} />
      {/* Reduce gap, margin, and size of buttons */}
      <div className="flex gap-2 items-start mt-4 w-full">
        {actionButtons.map((button, index) => (
          <ActionButton
            prop={"edit"}
            web={link}
            key={index}
            {...button}
            style={{ height: "40px" }}
          />
        ))}
        {actionButtons2.map((button, index) => (
          <ActionButton
            prop={"del"}
            web={link}
            key={index}
            {...button}
            style={{ height: "40px" }}
          />
        ))}
      </div>
    </main>
  );
}

export default IndieHackerOS;
