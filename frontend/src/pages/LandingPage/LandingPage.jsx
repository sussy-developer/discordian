import './LandingPage.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StartSection from './components/StartSection/StartSection';
import BigCard from './components/BigCard/BigCard';
import ParallaxWrapper from './components/ParallaxWrapper/ParallaxWrapper';
import MarqueeBanner from './components/MarqueeBanner/MarqueeBanner';
import EndSection from './components/EndSection/EndSection';
import Footer from './components/Footer/Footer';

// Assets for Cards
import card1Video from '../../assets/card1video.mp4';
import card2Video from '../../assets/card2video.mp4';
import partyGif from '../../assets/party.gif';
import bluredEgg from '../../assets/blured_egg.webp';
import bluredDisc from '../../assets/blured_disc.webp';
import starBg from '../../assets/starbg.webp';
import card1Bg from '../../assets/card1.png';
import card2Bg from '../../assets/card2.png';
import card3Bg from '../../assets/card3.png';
import card4Bg from '../../assets/card4.png';
import card5Bg from '../../assets/card5.png';
import card6Bg from '../../assets/card6.png';
import card3Video from '../../assets/card3video.mp4';
import card4Video from '../../assets/card4video.mp4';
import card5Video from '../../assets/card5video.mp4';
import card6Video from '../../assets/card6video.mp4';
import capcard3 from '../../assets/capcard3.webp';
import carrot from '../../assets/carrot.webp';
import coin from '../../assets/coin.webp';
import rightFig from '../../assets/right_fig.webp';
import girl from '../../assets/girl.webp';
import pan from '../../assets/pan.webp';

export default function LandingPage() {
  return (
    <div className="main-cont">
      <Navbar />
      <Hero />
      <StartSection />
      
      {/* First Big Card */}
      <BigCard 
        bgImage={card1Bg}
        videoSrc={card1Video}
        gradientClass="gradient-pink"
        title={
          <>
            MAKE YOUR<br />
            GROUP CHATS<br />
            MORE FUN
          </>
        }
        description={
          <>
            Use custom emoji, stickers, soundboard<br />
            effects and more to add your personality<br />
            to your voice, video, or text chat. Set your<br />
            avatar and a custom status, and write your<br />
            own profile to show up in chat your way.
          </>
        }
      >
        <img src={partyGif} alt="Party character" className="party-gif" />
        <ParallaxWrapper speed={-0.1}>
          <img src={bluredEgg} alt="Blurred Egg" className="blured-egg" />
        </ParallaxWrapper>
      </BigCard>

      <div className="middle-stars-container">
        <img src={starBg} alt="Stars" className="middle-stars-bg" />
      </div>

      {/* Second Big Card */}
      <BigCard 
        bgImage={card2Bg}
        videoSrc={card2Video}
        gradientClass="gradient-green"
        reverseLayout={true}
        title={
          <>
            STREAM LIKE<br />
            YOU'RE IN THE<br />
            SAME ROOM
          </>
        }
        description={
          <>
            High quality and low latency streaming<br />
            makes it feel like you're hanging out on<br />
            the couch with friends while playing a<br />
            game, watching shows, looking at<br />
            photos, or idk doing homework or<br />
            something.
          </>
        }
      >
        <ParallaxWrapper speed={-0.1}>
          <img src={bluredDisc} alt="Blurred Disc" className="blured-disc" />
        </ParallaxWrapper>
      </BigCard>

      <div className="middle-stars-container">
        <img src={starBg} alt="Stars" className="middle-stars-bg" />
      </div>

      <div style={{ height: '100px' }}></div> {/* Spacer gap between 2nd and 3rd card */}

      {/* Third Big Card */}
      <BigCard 
        bgImage={card3Bg}
        videoSrc={card3Video}
        gradientClass="gradient-blue"
        title={
          <>
            HOP IN WHEN<br />
            YOU'RE FREE,<br />
            NO NEED TO<br />
            CALL
          </>
        }
        description={
          <>
            Easily hop in and out of voice or text<br />
            chats without having to call or invite<br />
            anyone, so your party chat lasts<br />
            before, during, and after your game<br />
            session.
          </>
        }
      >
        <img src={capcard3} alt="Capcard" className="capcard" />
      </BigCard>

      <div className="middle-stars-container">
        <img src={starBg} alt="Stars" className="middle-stars-bg" />
      </div>

      <MarqueeBanner />

      {/* Fourth Big Card */}
      <BigCard 
        bgImage={card4Bg}
        videoSrc={card4Video}
        gradientClass="gradient-dark-pink"
        reverseLayout={true}
        title={
          <>
            SEE WHO'S<br />
            AROUND TO<br />
            CHILL
          </>
        }
        description={
          <>
            See who's around, playing games,<br />
            or just hanging out. For supported<br />
            games, you can see what modes or<br />
            characters your friends are playing and<br />
            directly join up.
          </>
        }
      >
        <img src={coin} alt="Coin" className="coin-img" />
      </BigCard>

      <div className="middle-stars-container">
        <img src={starBg} alt="Stars" className="middle-stars-bg" />
      </div>

      <div style={{ height: '100px' }}></div> {/* Spacer gap between 4th and 5th card */}

      {/* Fifth Big Card */}
      <BigCard 
        bgImage={card5Bg}
        videoSrc={card5Video}
        gradientClass="gradient-dark-green"
        title={
          <>
            ALWAYS HAVE<br />
            SOMETHING TO<br />
            DO TOGETHER
          </>
        }
        description={
          <>
            Watch videos, play built-in games, listen<br />
            to music, or just scroll together and<br />
            spam memes. Seamlessly text, call,<br />
            video chat, and play games, all in one<br />
            group chat.
          </>
        }
      >
        <img src={carrot} alt="Carrot" className="carrot-img" />
        <img src={girl} alt="Girl character" className="girl-img" />
        <img src={rightFig} alt="Right figure character" className="right-fig-img" />
      </BigCard>

      <div className="middle-stars-container">
        <img src={starBg} alt="Stars" className="middle-stars-bg" />
      </div>

      <div style={{ height: '100px' }}></div> {/* Spacer gap between 5th and 6th card */}

      {/* Sixth Big Card */}
      <BigCard 
        bgImage={card6Bg}
        videoSrc={card6Video}
        gradientClass="gradient-dark-blue"
        reverseLayout={true}
        title={
          <>
            WHEREVER YOU<br />
            GAME, HANG OUT<br />
            HERE
          </>
        }
        description={
          <>
            On your PC, phone, or console, you can<br />
            still hang out on Discord. Easily switch<br />
            between devices and use tools to<br />
            manage multiple group chats<br />
            with friends.
          </>
        }
      >
        <img src={pan} alt="Pan" className="pan-img" />
      </BigCard>

      <EndSection />
      <Footer />
    </div>
  )
}
