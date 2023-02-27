import React, {useRef,useState} from "react";
import IdleTimer from "react-idle-timer";
import ReactModal from "react-modal";
import "./idletimer.scss";
import { Route, Routes } from "react-router-dom";

export const IdleTimerContainer = () => {
    const idleTimerRef = useRef();
    const [modal,setModal] = useState(false);
    return <div>
    <IdleTimer timeout={5000}  onIdle={() => setModal(true) }  ref={idleTimerRef} >
    <ReactModal onAfterClose={() => setModal(false)} bodyOpenClassName="overflow"    style={ {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }} isOpen={modal} onRequestClose={() => setModal(false)}>
 <h1>modal</h1>
    </ReactModal>
    </IdleTimer>;
    </div>
};

