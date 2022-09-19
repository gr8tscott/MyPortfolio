const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="projects-all">
        <div className="project-card">
          <div className="project-title">
            <h3>Stonks Trader</h3>
          </div>
          <div className="project-container reverse">
            <p className="project-description">description</p>
            <img
              src="https://i.imgur.com/upKuRHo.png"
              className="project-image"
            />
          </div>
          <div className="project-links">
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
                href="https://github.com/gr8tscott/MattTrader"
              >
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
        </div>
        <div className="project-card">
          <div className="project-title">
            <h3>Tech-Tinder</h3>
          </div>
          <div className="project-container">
            <p className="project-description">description</p>
            <img
              src="https://i.imgur.com/BZLzV0u.png"
              className="project-image"
            />
          </div>
          <div className="project-links">
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
        </div>
        <div className="project-card">
          <div className="project-title">
            <h3>Weeb Manga</h3>
          </div>
          <div className="project-container reverse">
            <p className="project-description">description</p>
            <img
              src="https://camo.githubusercontent.com/232fc938391ae4e66948afa57fe257c71a9d92f00c5f6cc4b50bb366b68366b3/68747470733a2f2f692e696d6775722e636f6d2f767533734d496d2e706e67"
              className="project-image"
            />
          </div>
          <div className="project-links">
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
        </div>
        <div className="project-card">
          <div className="project-title">
            <h3>Blackjack</h3>
          </div>
          <div className="project-container">
            <p className="project-description">description</p>
            <img
              src="https://github.com/gr8tscott/Blackjack/raw/main/screenshotofgame.png"
              className="project-image"
            />
          </div>
          <div className="project-links">
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
    </div>
  )
}

export default Portfolio
