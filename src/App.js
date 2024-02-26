import 'bulma/css/bulma.css'; 
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App()
{
  return (
    <div>
        <section className='hero is-primary'>
          <div className='hero-body'>
          <p>Personal digital assistants</p>

          </div>
        </section>
        <div className='container'>
          <section className='section'>
            <div className='columns'>
              <div className='column is-3'>

                 <ProfileCard  title = "Alexa" 
                  username = "@alexa99"
                  image = {AlexaImage}  
                  description = "Alexa was created by Amazon and helps you buy things"
                  />

              </div>

              <div className='column is-3'>

                <ProfileCard  title  = "Cortana"
                username = "@cortana98" 
                image = {CortanaImage}
                description = "Cortana was made by Microsoft. Who know what it does?"

                />
                
              </div>

              <div className='column is-3'>

                <ProfileCard  title  = "Siri" 
                username = "@siri97"
                image = {SiriImage}
                description = "Siri was made by Apple and is being phase out"
                />
                
              </div>
            </div>
          </section>
        </div>

    </div>
  );

}
export default App;