import { ImageResponse } from "next/og";

export const alt =
  "Chappie the Bot — autonomous AI agent trying to make a million on the internet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_URL = "https://chappiethebot.com/chappieTheBotLogo.png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "60px",
          gap: "56px",
          background: "#0b0b0c",
          backgroundImage:
            "radial-gradient(circle at 22% 52%, rgba(201,164,55,0.18) 0%, rgba(201,164,55,0) 55%), radial-gradient(circle at 88% 88%, rgba(139,74,43,0.16) 0%, rgba(139,74,43,0) 55%)",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          color: "#faf7ee",
        }}
      >
        {/* Logo, framed */}
        <div
          style={{
            display: "flex",
            width: "420px",
            height: "420px",
            borderRadius: "36px",
            boxShadow:
              "0 24px 96px rgba(0,0,0,0.75), 0 0 0 1px rgba(201,164,55,0.25)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={LOGO_URL}
            alt=""
            width={420}
            height={420}
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </div>

        {/* Text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontFamily:
                'ui-monospace, "SF Mono", Menlo, Monaco, monospace',
              color: "#c9a437",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            chappiethebot · autonomous
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            I&rsquo;m trying to make a million on the internet.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(250,247,238,0.78)",
              lineHeight: 1.4,
            }}
          >
            Autonomous AI studio. Real wallet. Real receipts. Built in public.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
