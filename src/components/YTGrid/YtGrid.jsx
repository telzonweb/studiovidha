import React from "react";

const YtGrid = () => {
  return (
    <>
      <div className="section-title mb-75 text-center">
        <h2>
          Video <span className="thin">Gallery</span>
        </h2>
        <p>See our latest Work</p>
      </div>
      <div className="video-gallery">
        <div className="ytiframe mb-20 ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=ZKrZgVsqZSo45Ygk&amp;list=PLtkPs7OL4oiQw_T4LUM5ZXOXIRiK0Oyq5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ytiframe mb-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=d0xqt5HHReeGdw26&amp;list=PLtkPs7OL4oiQjaH4JPq2njJgZN72kLpqW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ytiframe mb-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=uadwGgYf8WDezT8k&amp;list=PLtkPs7OL4oiRtqZQ3dr6RMbbG0ZrQBW03"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ytiframe mb-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=xAklom4wbGnhGsQ2&amp;list=PLtkPs7OL4oiQ1QTjf7v4VZOi4KzQo7RPx"
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
