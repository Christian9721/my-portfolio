import Project from '../components/projects';
import Banner from '../components/banner'

//PET
import PetPoster from '../images/flutter/pet1.png';
import PetVideo from '../images/featured/pet.mp4';

//AMONG
import AmongPoster from '../images/unity/among_spikes/among1.png';
import AmongVideo from '../images/featured/among.mp4';

//LIX
import LixPoster from '../images/unity/lixenium/lixenium1.png';
import LixVideo from '../images/featured/lixenium.mp4';


function Featured(props)
{
        return(
            <div className="mainfeatured">
                {
                //    <Banner text="FEATURED" color="#141414" background="#e0e0e0"/>
                }
                <Project 
                    className = "Pet"
                    appname="PET FINDER"
                    description="PetFinder emerged as a project between two people with the aim of helping pet owners to recover their lost friends, the application has functions to register pets, generate pdfs, create posts and adheres to UX principles."
                    poster={PetPoster}
                    video = {PetVideo}
                    coverage="60"
                    image = {props.image}
                />
                <hr/>
                <Project 
                    className = "Among"
                    appname="AMONG SPIKES"
                    description="You rotate around a spiked sphere. accumulate points destroying enemies and enjoy the music. I hope you relax with this endless level !"
                    poster={AmongPoster}
                    video = {AmongVideo}
                    coverage="100"
                    image = {props.image}
                />
                <hr/>
                <Project 
                    className = "Lix"
                    appname="LIXENIUM"
                    description="Lixenium is an online multiplayer, play and destroy your enemies in a real time equalizer that adjusts to the music of each player. accumulate points, use power ups and chat !"
                    poster={LixPoster}
                    video = {LixVideo}
                    coverage="80"
                    image = {props.image}
                />
            </div>
        )
}

export default Featured;