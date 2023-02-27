import React, {useRef} from "react";
import IdleTimer from "react-idle-timer";

export const IdleTimerContainer = () => {
const idleTimerRef = useRef();
  return <div>
  <IdleTimer timeout={10000}  onIdle={() => console.log("log") }  ref={idleTimerRef} >

  </IdleTimer>;
  </div>
};

