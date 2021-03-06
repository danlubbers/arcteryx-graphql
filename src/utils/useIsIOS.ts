import {useState, useEffect} from 'react';
import moment from 'moment';

const checkForIOS = () => {

  // @ts-ignore
  if(navigator.standalone) return false;

  const today = moment(new Date(), "ddd MMM DD YYYY HH:mm:ss Z+HHmm").toDate().toString();
  const lastPrompt = moment(localStorage.getItem("installPrompt"), "ddd MMM DD YYYY HH:mm:ss Z+HHmm");
  const days = moment(today, "ddd MMM DD YYYY HH:mm:ss Z+HHmm").diff(lastPrompt, 'days');

  const ua = window.navigator.userAgent;
  const webkit = !!ua.match(/WebKit/i);
  const isIPad = !!ua.match(/iPad/i);
  const isIPhone = !!ua.match(/iPhone/i);
  const isIOS = isIPad || isIPhone;
  const isSafari = isIOS && webkit && !ua.match(/CriOS/i); 
  const prompt = ((isIOS && isSafari)) && (isNaN(days) || days > 1);
  
  if (prompt && 'localStorage' in window) {
    localStorage.setItem('installPrompt', today);
  }

  return { isIOS, isSafari, prompt };
}


  export default function useIsIOS() {
    const [isIOS, setIsIOS] = useState({});

    useEffect(() => {
      setIsIOS(checkForIOS());
    }, [])
  return isIOS;
  }
