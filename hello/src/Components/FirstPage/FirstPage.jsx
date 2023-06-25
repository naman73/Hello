import './FirstPage.css';
import React, {useState} from 'react';

function FirstPage() {
  const [idk, setIdk] = useState(false);
  const [talk, setTalk] = useState(false);  
  const [showFirstPage, setShowFirstPage] = useState(true);
  const [noAngryPage, setNoAngryPage] = useState(false);
  const [yesAngryPage, setYesAngryPage] = useState(false);
  const [askingForgivenesspage, setAskingForgivenesspage] = useState(false);  
  const [congrats, setCongrats] = useState(false);  


  const handleTalkie = () => {
    setTalk(true);
    setShowFirstPage(false)
    setIdk(false);
    setNoAngryPage(false)
    setYesAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(false)
  };

  const handleIdk = () => {
    setTalk(false);
    setShowFirstPage(false)
    setIdk(true);
    setNoAngryPage(false)
    setYesAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(false)
  };

  const handleTalkTryAgain = () => {
    setTalk(false);
    setShowFirstPage(true)
    setIdk(false);
    setNoAngryPage(false)
    setYesAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(false)
  };

  const handleNoAngry = () => {
    setNoAngryPage(true)
    setIdk(false);
    setShowFirstPage(false)
    setTalk(false)
    setYesAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(false)
  };

  const handleYesAngry = () => {
    setYesAngryPage(true)
    setIdk(false);
    setShowFirstPage(false)
    setTalk(false)
    setNoAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(false)
  };

  const handleForgiveness = () => {
    setYesAngryPage(false)
    setIdk(false);
    setShowFirstPage(false)
    setTalk(false)
    setNoAngryPage(false)
    setAskingForgivenesspage(true)
    setCongrats(false) 
  };

  const handleShoot = () => {
    setYesAngryPage(false)
    setIdk(false);
    setShowFirstPage(false)
    setTalk(true)
    setNoAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(false)
  };
  const handleCongrats = () => {
    setYesAngryPage(false)
    setIdk(false);
    setShowFirstPage(false)
    setTalk(false)
    setNoAngryPage(false)
    setAskingForgivenesspage(false)
    setCongrats(true)
  };

  return (
    <div className="App-header">
     {showFirstPage &&<> <h1 className='heading'>whatchu want???</h1>
      <div className='buttonContainer'> <button className='button' onClick={handleTalkie}>Talkie talkie</button>
      <button className='button' onClick={handleIdk}>hmmmmmm idkkk</button></div></>}
     
      {idk &&<> <h1>we dont entertain indecisiveness :( tri again</h1>
      <div className='buttonContainer'> <button className='button' onClick={handleTalkTryAgain}>Try again</button>
      </div></>}

      {talk &&<> <h1>did you get angry towards your boyfren for no reason today</h1>
      <div className='buttonContainer'> <button className='button' onClick={handleNoAngry}>Noo</button>
      <button className='button' onClick={handleYesAngry}>hmmm okk somewhat</button>
      </div></>}

      {yesAngryPage &&<> <h1>you want forgiveness? (rare chance)</h1>
      <div className='buttonContainer'> <button className='button' disabled={true}>dheet ho? No ka option dhudh rhi ho</button>
      <button className='button' onClick={handleForgiveness}>YUP</button>
      </div></>}

      {noAngryPage &&<> <h1>Our servers have detected that you are lying :0</h1>
      <div className='buttonContainer'>
      <button className='button' onClick={handleShoot}>shooot</button>
      </div></>}

      {askingForgivenesspage &&<> <h1>please send your pictures to your boyfren for a shot at forgiveness</h1>
      <div className='buttonContainer'>
      <button className='button' onClick={handleCongrats}>I will :(</button>
      </div></>}

      {congrats &&<> <h1>You have been forgiven! 🥳🎉 (Picture bhejne ke baad, also forgiven sahi grammar hai?)</h1>
      </>}
    </div>
  );
}

export default FirstPage;
