import React from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
  return (
    <div className="songrow">
      <img
        className="songrow__album"
        src={track?.album?.images[0].url}
        alt=""
      />
      <div className="songrow__info">
        <h1>{track?.name}</h1>
        <p>
          {track?.artist?.map((artist) => artist.name).join(", ")}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
