import React from 'react';
import dog from './images/dog.png'

function App() {
  return (
    <div className="homepage">
      <div className="intro">
        <div className="subtext">
          <p>Welcome to my site! My name is Joyce and I'm a software engineer. I'm working on some cool <a target="_blank" href="https://github.com/joyceyskwon">projects</a> and writing <a target="_blank" href="https://medium.com/@joycekwon">blogs</a>.
          
          I used to work at Some of the things I like are cello's solo in the 3rd movement of <a target="_blank" href="https://www.youtube.com/watch?v=UvsD3IXTQvc&ab_channel=MenahemPressler-Topic&t=0m7s">Schumann's Piano Quartet in E Flat</a>, funny quarantine <a target="_blank" href="https://medium.com/@joycekwon/top-10-coronavirus-memes-to-help-you-get-through-quarantine-860a1a9ef873">memes</a>, all of which you can send to <a href="mailto:joyceyskwon@gmail.com">this address</a>. You might also find me on <a target="_blank" href="https://twitter.com/tinyjoyceee">Twitter</a>, <a target="_blank" href="https://www.linkedin.com/in/imjoycekwon/">LinkedIn</a>, or <a target="_blank" href="https://www.youtube.com/watch?v=y26lwZysxW0&t=21s">Youtube</a>.</p>
        </div>

        <iframe src="https://open.spotify.com/embed/album/06mXfvDsRZNfnsGZvX2zpb?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

      </div>
      <img src={dog} alt="dog-img" className="dog-text-art" />
    </div>
  );
}

export default App;
