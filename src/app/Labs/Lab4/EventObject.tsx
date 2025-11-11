"use client";

import React from "react";
import { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState<unknown>(null);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventForDisplay = {
      type: e.type,
      timeStamp: e.timeStamp,
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      button: e.button,
      target: e.currentTarget.outerHTML,
    };
    setEvent(eventForDisplay);
  };
  
  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}