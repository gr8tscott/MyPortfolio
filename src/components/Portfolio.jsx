const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio page</h1>
      <div className="projects">
        <div className="project-card">
          <h3>Stonks Trader</h3>
          <img src="https://i.imgur.com/upKuRHo.png"></img>
          <p className="deployedLink">
            {' '}
            <a className="here" href="https://techtinder.herokuapp.com/">
              Deployed App
            </a>
          </p>
          <p className="githubLink">
            {' '}
            <a className="here" href="https://github.com/gr8tscott/MattTrader">
              GitHub Frontend
            </a>
          </p>
          <p className="githubLink">
            {' '}
            <a
              className="here"
              href="https://github.com/gr8tscott/Stonks-Trader-Backend"
            >
              GitHub Backend
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3>Tech-Tinder</h3>
          <img src="https://github.com/anovick1/Tech-Tinder-Front/raw/main/images/mobile_matches.png"></img>
          <p className="deployedLink">
            {' '}
            <a className="here" href="https://techtinder.herokuapp.com/">
              Deployed App
            </a>
          </p>
          <p className="githubLink">
            {' '}
            <a
              className="here"
              href="https://github.com/anovick1/Tech-Tinder-Front"
            >
              GitHub Frontend
            </a>
          </p>
          <p className="githubLink">
            {' '}
            <a
              className="here"
              href="https://github.com/anovick1/Tech-Tinder-Backend"
            >
              GitHub Backend
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3>Weeb Manga</h3>
          <img src="https://camo.githubusercontent.com/232fc938391ae4e66948afa57fe257c71a9d92f00c5f6cc4b50bb366b68366b3/68747470733a2f2f692e696d6775722e636f6d2f767533734d496d2e706e67"></img>
          <p className="deployedLink">
            {' '}
            <a className="here" href="https://weebmanga.herokuapp.com/">
              Deployed App
            </a>
          </p>
          <p className="githublink">
            {' '}
            <a className="here" href="https://github.com/gr8tscott/WeebManga">
              GitHub
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3>Blackjack</h3>
          <img src="https://github.com/gr8tscott/Blackjack/raw/main/screenshotofgame.png"></img>
          <p className="deployedLink">
            {' '}
            <a className="here" href="https://matts-blackjack.surge.sh/">
              Deployed App
            </a>
          </p>
          <p className="githublink">
            {' '}
            <a className="here" href="https://github.com/gr8tscott/Blackjack">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
