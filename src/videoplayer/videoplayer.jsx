import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
const Videoplayer = () => {
  const [state, setState] = React.useState({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0,
  });
  const [firstLoad, setFirstLoad] = React.useState(false);
  //   const [state, setState] = React.useState({});

  useEffect(() => {
    if (window.localStorage.getItem("sjdh")) {
      const data = JSON.parse(window.localStorage.getItem("sjdh"));
      setState(data);
    }
  }, []);

  return (
    <div>
      {JSON.stringify(state)}
      <ReactPlayer
        progressInterval={2}
        onPause={() =>
          window.localStorage.setItem("sjdh", JSON.stringify(state))
        }
        onPlay={() =>
          window.localStorage.setItem("sjdh", JSON.stringify(state))
        }
        config={{
          youtube: {
            playerVars: {
              start: Math.round(state.playedSeconds),
            },
          },
          facebook: {
            appId: "12345",
          },
        }}
        onDuration={(res) => console.log(res)}
        onProgress={(res) => {
          if (firstLoad) {
            setState(res);
          } else {
            setFirstLoad(true);
          }
        }}
        controls
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </div>
  );
};

export default Videoplayer;
