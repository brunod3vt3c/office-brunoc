import { useState, useEffect } from "react";
import styles from '../../container/Body/styles.module.scss';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HeaderImg from "../../assets/img/HeaderImg";
import headerImg from "../../assets/img/svg/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import Image from 'next/image';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Full Stack Developer", "Mobile Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {clearInterval(ticker)};
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <>
      <div className="flex flex-row items-center w-full ml-6 sm:items-center sm:ml-20">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn flex flex-col gap-2" : "flex flex-col gap-2 justify-center"}>
              <div className="flex gap-2">
                <div className="w-[150px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-600"/>
              </div>
              <div className="flex gap-2 ml-4">
                <div className="w-[100px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
                <div className="w-[150px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
              </div>
              <div className="h-2" />
              <div className="flex gap-2 ml-4">
                <div className="w-[100px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
                <div className="w-[100px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-600"/>
              </div>
              <div className="flex gap-2 ml-8">
                <div className="w-[50px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
                <div className="w-[150px] h-4 bg-gradient-to-r from-blue-500 to-green-600"/>
              </div>
              
                <div className="ml-20">
                  <h1 className={`text-3xl sm:text-6xl text-gray-100`}>
                    {`Hi! I'm Bruno`}
                    <br/>
                    <span className="txt-rotate" data-rotate='[ "Web Developer", "Full Stack Developer", "Mobile Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                </div>

              {/* <div className="ml-20">
                <h1 className={`${styles.typing} text-3xl sm:text-6xl text-gray-100`}>Bruno Costa</h1>
                <p className={`${styles.typing} text-lg sm:text-2xl text-gray-100 pl-2`}>Web Developer</p>
              </div> */}
              
              <div className="flex gap-2 ml-8">
                <div className="w-[100px] h-4 bg-gradient-to-r from-blue-500 to-green-600"></div>
                <div className="w-[50px] h-4 bg-gradient-to-r from-blue-500 to-green-600"></div>
              </div>
              <div className="flex gap-2 ml-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-600"></div>
              </div>
              <div className="h-2" />
              <div className="flex gap-2 ml-4">
                <div className="w-[100px] h-4 bg-gradient-to-r from-blue-500 to-green-600"></div>
                <div className="w-[50px] h-4 bg-gradient-to-r from-blue-500 to-green-600"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-600"></div>
              </div>
            </div>
          }
        </TrackVisibility>
      </div>
      <div className="items-center justify-center hidden w-full h-full lg:flex-col lg:flex">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <Image src={headerImg} alt=""/>
            </div>}
        </TrackVisibility>
      </div>
    </>
  )
}

export default Banner