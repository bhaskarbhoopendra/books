import { useEffect, useState } from "react";

function Colorcomponent({ hexColor, rgb, weight, index }: any) {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  });
  const hex = `#${hexColor}`;
  return (
    <article
      style={{
        backgroundColor: `#${hexColor}`,
        height: "200px",
        width: "200px",
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`${hex}`);
      }}
    >
      <p
        style={{
          color: `${index > 10 ? "white" : ""} `,
        }}
      >
        {hex}
      </p>
      <p
        style={{
          color: `${index > 10 ? "white" : ""} `,
        }}
      >{`${weight}`}</p>
      {alert && (
        <p
          style={{
            color: `${index > 10 ? "white" : ""} `,
          }}
        >
          Copied To clipboard
        </p>
      )}
    </article>
  );
}

export default Colorcomponent;
