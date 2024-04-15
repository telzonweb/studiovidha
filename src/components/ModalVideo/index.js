import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="16TgusFJwr4" onClose={() => setOpen(false)} />

      <button className="video-play" onClick={() => setOpen(true)}><i className="fa fa-play" aria-hidden="true"></i></button>
    </React.Fragment>
  )
}

export default VideoModal;