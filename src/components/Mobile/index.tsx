import clsx from 'clsx';
import React from 'react';
import { Close } from '../../icons/close';
import { Maximize } from '../../icons/maximize';
import { Minimize } from '../../icons/minimize';
import { Button } from '../button';
import { ITeamMember, TEAM, TeamMember } from '../team';
import {
  ITokenTeirPoint,
  ITokenomicPoint,
  TEIR_POINTS,
  TOKENOMIC_POINTS,
  TeirPoint,
  TokenomicPoint,
} from '../tokenomics';
import { Telegram } from '../../icons/telegram';
import { Twitter } from '../../icons/twitter';
import { Etherscan } from '../../icons/etherscan';

export const MobileScreen = () => {
  const handleClick = (e: any) =>{
    e.target.parentElement.nextElementSibling.classList.toggle('h-0')
  }

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-hidden bg-black font-po font-bold text-black">
      <div
        className={clsx(`flex h-full w-full flex-col bg-[#cac6cb] p-[4px]`)}
        style={{
          boxShadow:
            'rgb(70, 65, 71) -1px -1px 0px 0px inset, rgb(222, 220, 222) 1px 1px 0px 0px inset',
        }}
      >
        {/* HANDLE */}
        <div
          className="handle flex w-full flex-row items-center justify-between px-1"
          style={{
            background:
              'linear-gradient(90deg, rgb(43 70 255), rgb(159 155 255), rgb(84 84 219), rgb(105 96 255))',
          }}
        >
          <div className="flex flex-row items-center gap-2">
            <img
              src={'/icons/favicon-128.png'}
              className="h-[16px]"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="select-none font-bold tracking-[-1px] text-white">
              ZKTsunami \ $ZKT \ $PRICE
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Button
              style={{ width: '18px', height: '18px' }}
              onClick={() => {}}
            >
              <Close className={'h-3 w-3'} />
            </Button>
          </div>
        </div>
        {/* NAV */}
        <div className="flex flex-row items-center gap-2 px-2 text-sm">
          <a className="p-1" href={'#home'}>
            About
          </a>
          <a className="p-1" href={'#team'}>
            Team
          </a>
          <a className="p-1" href={'#tokenomics'}>
            Tokenomics
          </a>
          <a className="p-1" href={'#roadmap'}>
            Roadmap
          </a>
          <a
            className="p-1"
            href={
              'https://app.uniswap.org/#/swap?outputCurrency=0x76fca1adb104770b38581b64d55e67fa5a0f3966'
            }
            target="_blank"
          >
            Buy
          </a>
          <a>
            <Telegram className={'h-[14px] w-[14px]'} />
          </a>
          <a>
            <Twitter className={'h-[14px] w-[14px]'} />
          </a>
          <a>
            <Etherscan className={'h-[14px] w-[14px]'} />
          </a>
        </div>
        {/* CONTENT */}
        <div
          className="flex h-full w-full flex-col items-center overflow-scroll bg-black font-po text-sm font-normal text-white"
          style={{
            boxShadow:
              'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
          }}
        >
          {/*ABOUT*/}
          <div
            id={'about'}
            className="flex w-full flex-row items-center justify-around px-2"
          >
            {/* <img src={'/icons/favicon-128.png'} className="h-[32px] w-[32px]" />
            <h1 className="text-3xl font-bold">ZKTsunami</h1>
            <img src={'/icons/favicon-128.png'} className="h-[32px] w-[32px]" /> */}
          </div>
          <div className="flex w-full flex-col px-4 bg-hero">
            <h1 className="w-full text-center text-base font-bold">ZKT — Transforming DeFi into an Era of Utter Anonymity</h1>
            <span
              className={'max-w-full text-justify'}
              style={{
                textAlignLast: 'justify',
              }}
            >
              Welcome to ZKTsunami, where privacy takes center stage in the realm of decentralized finance (DeFi). Experience a revolutionary protocol that empowers you to transact with complete anonymity and security.
            </span>
            
            <div className=' w-11/12 text-black bg-white/60 p-2 my-10'>
              <article className='bg-white border border-dashed border-black p-2'>
                <h1 className="w-full text-center text-base font-bold">Data Breaches and Privacy Issues Are Major Concerns in Crypto:</h1>
                <span>
                  In the world of blockchain, anonymity and security should be inherent. However, the reality is far from perfect. Transaction details can be traced due to the transparent nature of on-chain data, posing significant threats to data safety and on-chain privacy. To achieve mainstream adoption, everyone must feel secure in utilizing cryptocurrencies.
                </span>
              </article>
            </div>
          </div>
          <div className="flex w-full flex-col px-4 py-8">
            <h1 className="w-full text-center text-base font-bold">
              Introduction
            </h1>
            <span
              className={'max-w-full text-justify'}
              style={{
                textAlignLast: 'justify',
              }}
            >
              Digital anonymity has been one of the core values of blockchain
              technology. As a result, various crypto protocols have imbibed
              this idea into their operating mechanism. Prime among these crypto
              protocols are some unique ones such as Zcash. They adopted a more
              stringent approach to achieving on-chain anonymity. Of course,
              this required them to research into more sophisticated
              cryptographic proofs and tools. With time, some of these protocols
              noticed the use cases of ZK SNARK in enhancing privacy. It did not
              take long before they realized that SNARK schemes have some
              peculiar limitations regarding on-chain identity and throughput.
              This issue lingered for a long time without no one willing to
              research and discover a better ZK scheme. We stood up to the task
              and discovered a more secure ZK scheme that guarantees 100%
              anonymity. The core technical contribution of ZKTsunami is the
              implementation and integration of state-of-the-art, setup-free,
              zero-knowledge, almost constant-size, succinct non-interactive
              argument of knowledge (ZK-AnonSNARK) schemes which can guarantee
              both sender and receiver anonymity, and the transaction amount
              confidentially. But before we delve into ZK-AnonSNARK, we shall
              distill ZK-SNARK first.
            </span>
          </div>
          {/*TEAM*/}
          <div
            className="z-1 flex w-full flex-col gap-4 bg-[#FBFF49] px-4 py-2 text-black"
            id={'team'}
            style={{
              boxShadow:
                'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
            }}
          >
            <h1 className="w-full text-center text-base font-bold">
              <img src='/meet_team.png' alt='Meet team' className='h-4 block mt-4 mx-auto' />
            </h1>
            {TEAM.map((member: ITeamMember) => (
              <div
                key={member.name}
                className="group flex w-full items-center justify-between gap-6 odd:flex-row-reverse even:flex-row"
              >
                <img src={member.image} className="h-16 w-16" />
                <TeamMember {...member} />
              </div>
            ))}
            <p className='leading-normal text-justify text-bold'>Together, our talented team combines technical prowess, economic analysis, strategic thinking, and trading expertise to deliver innovative solutions that prioritize privacy and security in the decentralized finance landscape.</p>
          </div>
          {/* UTILITIES  */}
          <div>
            <h1 className='text-base text-[#0eb3ff] font-bold text-center pt-4'>UTILITY</h1>
            <section className='mt-6 pb-4'>
              <ul className='flex flex-wrap justify-center'>
                <li className='py-4 px-2 md:px-6 w-1/2 md:w-1/3 shrink-0'>
                  <article className='text-center'>
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_5.gif" className='h-20 md:h-28 block mx-auto' alt="" />
                    <h4 className='font-semibold text-2xl'>ZKT DApp</h4>
                    <p className=''>Our all-in-one decentralized application allows you to perform on-chain activities securely and privately, thanks to our zero-knowledge underlying infrastructure.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-1/2 md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_3.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK VPN</h4>
                    <p> Maintain anonymity and location privacy with our ZK VPN, ensuring your presence remains untraceable on the blockchain.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-1/2 md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_4.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK SWAP</h4>
                    <p> Swap your assets securely with our ZK Swap protocol, protecting your personal and transactional data from public knowledge.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-1/2 md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK Wallet</h4>
                    <p>  Keep your identities and transactions anonymous and secure with our upcoming privacy-focused ZK Wallet, designed exclusively for Web3 interactions.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-1/2 md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_2.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK Browser</h4>
                    <p>Experience a friendly and 100% secure browsing environment with our ZK Browser, leveraging the anonymous ethos of zero-knowledge proofs.</p>
                  </article>
                </li>
              </ul>
            </section>
          </div>
          {/*TOKENOMICS*/}
          <div
            className="relative flex w-full flex-col gap-4 bg-black px-4 py-2 text-white"
            id={'tokenomics'}
            style={{
              boxShadow:
                'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
            }}
          >
            <img
              src={'/images/token-topper-v1.png'}
              className="absolute top-[2px] left-[2px] w-[99%]"
            />
            <div className="relative z-10 mb-8 flex flex-col gap-4">
              <h1 className="w-full text-center text-base font-bold">
                Tokenomics
              </h1>
              <span
                className={'max-w-full text-justify'}
                style={{
                  textAlignLast: 'justify',
                }}
              >
                The ZKTsunami DApp introduces a community-centric fee structure that reflects our commitment to the interests of our users. We believe in rewarding loyalty and providing incentives for privacy-conscious individuals.
                <br />
                <br />
                Unlock the benefits of holding $ZKT as it grants you exclusive discounts based on your investment:
              </span>
              <div className="flex w-full items-center">
                <h1 className="w-full text-center text-base font-bold">
                  Distribution
                </h1>
              </div>
              <div className="flex w-full items-center justify-center bg-white text-lg font-bold text-black">
                5,000,000 $ZKT
              </div>
              <div className="flex flex-row items-center justify-between">
                {TOKENOMIC_POINTS.map((point: ITokenomicPoint, index) => {
                  return <TokenomicPoint key={index} {...point} />;
                })}
              </div>
              <div className="flex w-full items-center">
                <h1 className="w-full text-center text-base font-bold">
                  Token Teir System
                </h1>
              </div>
              <div className="flex flex-col items-center justify-between">
                {TEIR_POINTS.map((point: ITokenTeirPoint) => {
                  return <TeirPoint key={point.amountRange} {...point} />;
                })}
              </div>
            </div>
            <img
              src={'/images/token-topper-v1.png'}
              className="absolute bottom-[2px] left-[2px] w-[99%] rotate-180"
            />
          </div>
          {/*ROADMAP*/}
          <div
            className="z-1 flex w-full flex-col gap-4 bg-white px-4 py-2 text-black"
            id={'roadmap'}
            style={{
              boxShadow:
                'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
            }}
          >
            <h1 className="w-full text-center text-base font-bold">Roadmap</h1>
            <div>
              <article className='w-[300px] mx-auto'>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Q2, 2023: ZK VPN Launch:</h4>
                  <p> Embark on the ZKTsunami journey with the launch of our groundbreaking ZK VPN. Experience unparalleled anonymity in terms of location as you bid farewell to concerns about traceability, ushering in a new era of privacy within the blockchain.</p>
                </div>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Q3, 2023: Mixer Launches:</h4>
                  <p>Witness the unveiling of ZKTsunami's innovative mixer, empowering you to mix and obscure your transactions. This milestone reinforces our commitment to revolutionizing privacy in DeFi, providing a secure haven for your financial activities.</p>
                </div>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Q4, 2023: Browser and Privacy Swap Launch:</h4>
                  <p>Prepare for the next wave of privacy solutions as ZKTsunami introduces its secure browser and privacy swap functionalities. Explore the web with confidence, knowing that your interactions are shielded from prying eyes. Seamlessly swap tokens while protecting your personal and transactional data from public knowledge.</p>
                </div>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Q4, 2024: Privacy Wallet Launch:</h4>
                  <p>Embrace the ultimate privacy-centric wallet as ZKTsunami unveils its state-of-the-art solution. With our wallet, your identities and transactions are rendered anonymous and secure, ensuring a truly decentralized and private experience within the Web3 ecosystem.</p>
                </div> 
              </article>
            </div>
          </div>
          {/*FAQ*/}
          <section
             className="relative flex w-full flex-col gap-4 pb-10 bg-black px-4 py-2 text-white"
             id={'tokenomics'}
             style={{
               boxShadow:
                 'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
             }}
          >
            <h1 className="w-full text-center text-base font-bold">FAQ</h1>
            <article className="faq">
              <div>
                <p className="question">In simple words, what exactly is ZKTsunami? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer h-0"> ZKTsunami is a secure blockchain platform that allows you to mix your crypto, ensuring maximum privacy and anonymity.</p>
              </div>

              <div>    
                <p className="question">What is the main essence of ZK in ZKTsunami? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer h-0">ZK stands for "zero-knowledge," a cryptography algorithm that enables verification without disclosing intricate details. It empowers you to prove ownership or knowledge without revealing specific transaction details.</p>
              </div>

              <div>    
                <p className="question">How does the tier system work on ZKTsunami? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer h-0">The tier system rewards $ZKT token holders with exclusive fee discounts. The more $ZKT you hold, the lower your transaction fees, providing enhanced benefits for your commitment to privacy.</p>  
              </div>

              <div>    
                <p className="question">Why should I use ZKTsunami instead of other mixers? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer  h-0">ZKTsunami stands out with its user-friendly interface, lightning-fast speed, uncompromising privacy, and optimal efficiency. Experience the unparalleled advantages of our privacy protocol, setting a new standard in the world of decentralized finance.</p>  
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};
