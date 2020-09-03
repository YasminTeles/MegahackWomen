import React, { useState } from "react"

export const VideoChatContext = React.createContext({})

const CustomProvider = ({ children }) => {
  const [disableAudio, setDisabledAudio] = useState(false)
  const [disableVideo, setDisabledVideo] = useState(false)
  const [openHumanBody, setOpenHumanBody] = useState(false)
  const [subtitleState, setSubtitleState] = useState(true)
  const context = {
    disableAudio,
    disableVideo,
    openHumanBody,
    subtitleState,
    changeAudioState() {
      setDisabledAudio(!disableAudio)
    },
    changeVideoState() {
      setDisabledVideo(!disableVideo)
    },
    changeOpenHumanBody() {
      setOpenHumanBody(!openHumanBody)
    },
    changeSubtitleState() {
      setSubtitleState(!subtitleState)
    }
  }

  return (
    <VideoChatContext.Provider value={context}>
      {children}
    </VideoChatContext.Provider>
  )
}

export const VideoChatProvider = CustomProvider
