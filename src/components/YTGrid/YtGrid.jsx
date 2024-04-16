import React from "react";

const YtGrid = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Video Gallery</h2>
      </div>
      <div className="video-gallery">
        <div className="ytiframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=uXsj4poafm6g-9Cj&amp;list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ytiframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=uXsj4poafm6g-9Cj&amp;list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ytiframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=uXsj4poafm6g-9Cj&amp;list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ytiframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=uXsj4poafm6g-9Cj&amp;list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default YtGrid;
