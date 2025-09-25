import { useEffect } from "react";

function LandbotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
    script.onload = () => {
      new window.Landbot.Livechat({
        configUrl: "https://storage.googleapis.com/landbot.online/v3/H-3150324-AFF6XB2B4MLVXX93/index.json",
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
}

export default LandbotWidget;
