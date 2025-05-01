const LearnPage = () => {
    return (
      <div className="learn-page-container">
        <div className="d-flex">
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center">

            <div className="d-flex gap-3 p-3">

        <div className="learn-page-card1 learn-page-blogs">
          <h2>BLOGS <span role="img" aria-label="writing">✍️</span></h2>
          <p>Dive deeper into root causes & all things wellness.</p>
          <button className="learn-page-button">&gt;</button>
        </div>
        <div className="learn-page-card1 learn-page-recipes">
          <h2>RECIPES <span role="img" aria-label="food">🍽️</span></h2>
          <p>Try these easy and quick recipes with No-Nonsense Plant Protein.</p>
          <button className="learn-page-button">&gt;</button>
        </div>

        </div>



        <div className="learn-page-card2 learn-page-mythbusters ">
          <h2>MYTHBUSTERS <span role="img" aria-label="check">❌✅</span></h2>
          <p>Let's debunk some wellness myths!</p>
          <button className="learn-page-button">&gt;</button>
        </div>



        </div>
        <div className="d-flex flex-column gap-3">
                 <div className="learn-page-card learn-page-glossary">
          <h2>COSMIX GLOSSARY <span role="img" aria-label="book">📖</span></h2>
          <p>New to our world? Learn the buzzwords, the jargon and the complete A-Z of Cosmix.</p>
          <button className="learn-page-button">&gt;</button>
        </div>
        <div className="learn-page-card learn-page-flavour">
          <h2>FLAVOUR FINDER <span role="img" aria-label="hourglass">⏳</span></h2>
          <p>Confused about which protein flavour is right for you? Take this 30-second quiz and we'll suggest one that's meant for you!</p>
          <button className="learn-page-button">&gt;</button>
        </div>
        <div className="learn-page-card learn-page-challenge">
          <h2>NO-NONSENSE CHALLENGE <span role="img" aria-label="game">🎮</span></h2>
          <p>Play the game to find out what makes your protein truly "no-nonsense".</p>
          <button className="learn-page-button">&gt;</button>
        </div>

        </div>
        </div>
      
        
      </div>
    );
  };
  
  export default LearnPage;