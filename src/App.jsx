import React from "react";
import ShinyText from "./ShinyText";
import FallingText from "./FallingText";
const App = () => {
  const URL = import.meta.env.VITE_PRESENTATION_LINK;
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-center relative top-1/2">
        <a href={URL} className="z-30">
          <ShinyText
            text="Go live"
            disabled={false}
            speed={3}
            className="border-2 rounded-full px-4 py-2"
          />
        </a>
      </div>
      <FallingText
        text={`This presentation analyzes the performance of ML, DL, and Transformer models. Results show AraBERTv2 achieves superior precision compared to other models in the task.`}
        highlightWords={[
          "analyzes",
          "performance",
          "ML",
          "DL",
          "Transformer",
          "models",
          "AraBERTv2",
          "superior",
          "precision",
        ]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor=""
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};

export default App;
