import Socials from './Socials'

const Home = () => {
  return (
    <div className="home">
      <div className="project-container">
        <div>
          <img
            // style={{ display: 'block', maxWidth: '100%' }}
            src="https://i.imgur.com/sr4kmXa.jpg?2"
            alt="logo"
            className="prof-image"
          />
          <Socials />
        </div>
        <div className="project-description">
          <h1>Hi, I'm Matthew Scott</h1>
          <h2>
            I'm a Full-Stack Software Engineer with a background in Financial
            Services.
          </h2>
          <h2>
            With my past experience working as a stock broker in front-end
            brokerage services I can leverage my knowlege of the pain points
            faced by users on both the customer and professional side of Fintech
            to improve business processes and UI.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home
