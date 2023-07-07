import React, { useCallback, useState } from "react";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  console.log("APP RUNNING");

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(true);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>
        {allowToggle ? "Disable" : "Enable"} Toggling
      </Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
