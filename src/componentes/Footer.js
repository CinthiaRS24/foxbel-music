import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackwardStep, faForwardStep, faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import s from './Footer.module.css'

export default function Footer () {

    const dispatch = useDispatch();

    const trackSelected = useSelector(state => state.track);
    const play = useSelector(state => state.play);

    const [volumeValue, setVolumeValue] = useState(1)
    const trackAudio = useRef(null)


    useEffect(() => {
        if (play) {
            trackAudio.current.currentTime = 0
            trackAudio.current.volume = volumeValue / 10
            trackAudio.current.play();            
        }
    }, [trackSelected])


    const updateVolume = (e) => {
        setVolumeValue(e.target.value)
        trackAudio.current.volume = e.target.value / 10
    }

    const mute = () => {
        if (volumeValue === "0") {
            setVolumeValue("5")
            trackAudio.current.volume = 5 / 10
        } else {
            setVolumeValue("0")
            trackAudio.current.volume = 0 / 10
        }
    }

    

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

            <audio ref={trackAudio} src={trackSelected.url} />

                <div className={s.divIcons}>
                    <button>
                        <FontAwesomeIcon icon={faBackwardStep} className={s.buttons} color='white'  />
                    </button>

                    {
                        play? 
                            <button onClick={() => {
                                    dispatch ({
                                        type: 'PAUSE_TRACK',
                                    });
                                    trackAudio.current.pause()
                                }}
                            >    
                                <FontAwesomeIcon icon={faPause} color='white' className={s.buttons} />
                            </button>
                        :
                            <button onClick={() => {
                                    dispatch ({
                                        type: 'RESUME_TRACK',
                                    });
                                    trackAudio.current.play()
                                }}
                            >    
                                <FontAwesomeIcon icon={faPlay} color='white' className={s.buttons} />
                            </button>
                    }
                    

                    <button>
                    <FontAwesomeIcon icon={faForwardStep} color='white' className={s.buttons} />
                    </button>
                </div>
                
            <div className={s.volume}>
                <input className={s.volumeRange} value={volumeValue} onChange={(e) => updateVolume(e)} type='range' min='0' max='10' />
                {
                    volumeValue === "0"?
                        <button className={s.volumeBtn} onClick={() => mute()}>
                            <FontAwesomeIcon icon={faVolumeXmark} color='white' />
                        </button>
                    :
                        <button className={s.volumeBtn} onClick={() => mute()}>
                            <FontAwesomeIcon icon={faVolumeOff} color='white' />
                        </button>
                }
            </div>   
        </div>
    )
}

