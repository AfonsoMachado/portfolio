import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#101f1d",
        color: "#8fd5cd",
        display: "flex",
        fontSize: 190,
        fontWeight: 700,
        height: "100%",
        justifyContent: "center",
        letterSpacing: -18,
        width: "100%",
      }}
    >
      AM
    </div>,
    size,
  );
}
