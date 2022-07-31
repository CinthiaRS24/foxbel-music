import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faEllipsisV, faBackwardStep, faForwardStep, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import s from './Footer.module.css'

export default function Footer () {

    const trackSelected = useSelector(state => state.track);
    const play = useSelector(state => state.play);

    const [volumeValue, setVolumeValue] = useState(1)
    const [duration, setDuration] = useState(null)
    const [trackAudio, setTrackAudio] = useState(null)
    const [time, setTime] = useState(0)
    const [playTime, setPlayTime] = useState(false)

    const updateVolume = (e) => {
        setVolumeValue(e.target.value)
        trackAudio.volume = e.target.value / 10
    }
  
    useEffect(() => {
        if (trackAudio) {
            trackAudio.currentTime = 0
            trackAudio.volume = volumeValue / 10
            if (play) {
                trackAudio.play()
            }
        }
      }, [trackSelected])

    console.log('trackSelected', trackSelected)
    if (!trackSelected.url) {
       return null; 
    }
    return(
        <div className={s.divGeneral}>
            
            <div className={s.divInfo}>
                <img className={s.imgFooter} src={trackSelected.img}/>
                <div className={s.divText}>
                    <h3 className={s.titleMusic}>{trackSelected.title}</h3>
                    <h4 className={s.artistName}>{trackSelected.artist}</h4>
                </div>
            </div>

            <audio ref={(audio) => {setTrackAudio(audio)}} src={trackSelected.url} />

                <div className={s.divIcons}>
                    <button>
                        <FontAwesomeIcon icon={faBackwardStep} className={s.buttons} color='white'  />
                    </button>

                    {
                        play? 
                            <button>    
                                <FontAwesomeIcon icon={faPause} color='white' className={s.buttons} />
                            </button>
                        :
                            <button>    
                                <FontAwesomeIcon icon={faPlay} color='white' className={s.buttons} />
                            </button>
                    }
                    

                    <button>
                    <FontAwesomeIcon icon={faForwardStep} color='white' className={s.buttons} />
                    </button>
                </div>
                
            <div className={s.volume}>
                <input className={s.volumeRange} value={volumeValue} onChange={(e) => updateVolume(e)} type='range' min='0' max='10' />
                <FontAwesomeIcon icon={faVolumeOff} color='white' size="3x" />
            </div>
            
        </div>
    )
}

