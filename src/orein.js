import React, { useRef, useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import Ringtone from "./lut_gaye_ham.mp3";

const Orein = () => {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const socket = useRef();
  const myVideo = useRef();
  const partnerVideo = useRef();

  useEffect(() => {
    console.log("hello");
    socket.current = io.connect("https://192.168.0.108:8000/");

    socket.current.on("yourID", (id) => {
      setYourID(id);
    });
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    });

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((data) => {
        setStream(data);
        myVideo.current.srcObject = data;
      });

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {
        iceServers: [
          {
            urls: "stun:numb.viagenie.ca",
            username: "sultan1640@gmail.com",
            credential: "98376683",
          },
          {
            urls: "turn:numb.viagenie.ca",
            username: "sultan1640@gmail.com",
            credential: "98376683",
          },
        ],
      },
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.current.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
  }
  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.current.emit("acceptCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    setReceivingCall(false);
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <audio controls autoPlay>
          <source src={Ringtone} type="audio/mpeg"></source>
        </audio>
        <button onClick={acceptCall}>Accept</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {stream && (
          <video
            ref={myVideo}
            playsInline
            muted
            autoPlay
            style={{ width: "400px", border: "2px solid black" }}
          />
        )}
        {callAccepted && (
          <video
            ref={partnerVideo}
            playsInline
            autoPlay
            style={{ width: "400px", border: "2px solid black" }}
          />
        )}
      </div>

      <div
        style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}
      >
        <h1>List Of Users Joined</h1>
        {Object.keys(users).map((key, i) => {
          if (key === yourID) {
            return null;
          }
          return (
            <button
              style={{ margin: "5px 0px" }}
              key={i}
              onClick={() => callPeer(key)}
            >
              Call {key}
            </button>
          );
        })}
      </div>
      <div>{incomingCall}</div>
    </div>
  );
};

export default Orein;
