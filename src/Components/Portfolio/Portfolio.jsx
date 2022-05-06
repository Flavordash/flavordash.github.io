import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/frog.gif'
import IMG2 from '../../assets/musit.gif'
import IMG3 from '../../assets/naive.png'
import IMG4 from '../../assets/vote.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
           <img src={IMG1} alt="" />
         </div>
         <h3>Coin Asset Management & Information Provision Website</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/imysh578/FrogTeam" className='btn'>Github</a>
         <a href="https://github.com/imysh578/FrogTeam/archive/refs/heads/main.zip" className='btn btn-primary'>Download</a>
         </div>
        </article>
        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
           <img src={IMG2} alt="" />
         </div>
         <h3>Musit X Millim:X ETH NFT Platform</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/webwebweb3/musit_nft" className='btn'>Github</a>
         <a href="https://www.notion.so/aa58a42722a54bc9ad5cc70ddaf86ed0" className='btn btn-primary'>Notion</a>
         </div>
        </article>
        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
           <img src={IMG3} alt="" />
         </div>
         <h3>WebSocket and PoW Website: Training for understanding Blockchain Mining and Transaction process</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/Flavordash/blockchainPJ_2201" className='btn'>Github</a>
         <a href="https://github.com/Flavordash/blockchainPJ_2201/archive/refs/heads/main.zip" className='btn btn-primary'>Download</a>
         </div>
        </article>
        <article className='portfolio__item'>
         <div className='portfolio__item-image'>
           <img src={IMG4} alt="" />
         </div>
         <h3>Solidity Voting App</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/webwebweb3/voting" className='btn'>Github</a>
         <a href="https://www.notion.so/Voting-Page-e854a72829b0485191e0433d070f8802"className='btn btn-primary'>Notion</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio