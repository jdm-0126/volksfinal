import React, { useState } from "react";
import QierPlayer from 'qier-player';

const Players = () => {
  const company =
    "https://firebasestorage.googleapis.com/v0/b/volkslift-ph.appspot.com/o/Company.mp4?alt=media&token=d231ba04-3d69-417b-b7da-0a09e9f424c3";
  const escalators =
    "https://firebasestorage.googleapis.com/v0/b/volkslift-ph.appspot.com/o/Escalators.mp4?alt=media&token=c08d1837-d516-4eb5-be60-b322bfe3e9d1";
  const passenger =
    "https://firebasestorage.googleapis.com/v0/b/volkslift-ph.appspot.com/o/Passenger_Elevators.mp4?alt=media&token=6a86c0a4-8608-4157-90bf-8c7732e0f13f";
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto m-2">
          <QierPlayer
            width={370}
            height={240}
            language="en"
            showVideoQuality={true}
            themeColor="#abc123"
            src480p={passenger}
            src720p={passenger}
            src1080p={passenger}
            src4k={passenger}
            srcOrigin={passenger}
          />
        </div>
        <div className="col-auto m-auto m-2">
          <QierPlayer
            width={370}
            height={240}
            language="en"
            showVideoQuality={true}
            themeColor="#abc123"
            src480p={company}
            src720p={company}
            srcOrigin={company}
          />
        </div>
        <div className="col-auto m-auto m-2">
          <QierPlayer
            width={370}
            height={240}
            language="en"
            showVideoQuality={true}
            themeColor="#abc123"
            src480p={escalators}
            src720p={escalators}
            srcOrigin={escalators}
          />
        </div> 
      </div>
    </div>
  );
};

export default Players;
