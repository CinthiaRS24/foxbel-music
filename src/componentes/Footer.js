import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackwardStep, faForwardStep, faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import s from './Footer.module.css'

export default function Footer () {

    const trackSelected = useSelector(state => state.track);
    const play = useSelector(state => state.play);
    const [showBtn, setShowBtn] = useState(null)

    const [volumeValue, setVolumeValue] = useState(1)
    const trackAudio = useRef(null)


    useEffect(() => {
            
        if (play) {
            setShowBtn(true)
            trackAudio.current.currentTime = 0
            trackAudio.current.volume = volumeValue / 10
            trackAudio.current.play();            
        }
    }, [trackSelected])


    const updateVolume = (e) => {
        setVolumeValue(e.target.value)
        trackAudio.current.volume = e.target.value / 10
        console.log(trackAudio.current.volume)
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
                        showBtn && showBtn === true? 
                            <button onClick={() => {
                                    trackAudio.current.pause()
                                    setShowBtn(false)
                                }}
                            >    
                                <FontAwesomeIcon icon={faPause} color='white' className={s.buttons} />
                            </button>
                        :
                            <button onClick={() => {
                                    trackAudio.current.play()
                                    setShowBtn(true)
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
                        <button className={s.volumeBtn}>
                            <FontAwesomeIcon icon={faVolumeXmark} color='white' />
                        </button>
                    :
                        <button className={s.volumeBtn}>
                            <FontAwesomeIcon icon={faVolumeOff} color='white' />
                        </button>
                    
                }
                
                
            </div>
            
        </div>
    )
}

