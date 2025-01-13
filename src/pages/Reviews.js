import React from "react";
import Modal from 'react-modal';
import Container from 'react-bootstrap/Container';
import "../styles/reviews.css";
import "../styles/index.css";
import Button from 'react-bootstrap/Button';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Incredibles2 from '../images/filmImages/incredibles2.jpg';
import TheDM from '../images/filmImages/theDM.jpg';
import Ex from '../images/filmImages/exmachina.jpg';
import Am from '../images/filmImages/amelie.png';
import Pooh from '../images/filmImages/christopherRobin.jpg';
import Ten from '../images/filmImages/htlagitd.png';
import Good from '../images/filmImages/gwh.jpg';
import TheTh from '../images/filmImages/thinning.jpg';
import IG from '../images/filmImages/imitationGame.jpg';
import MPR from '../images/filmImages/MPR.jpg';
import solo from '../images/filmImages/solo.jpg';
import Ban from '../images/filmImages/bandersnatch.jpg';
import Bird from '../images/filmImages/birdbox.jpg';
import Aqua from '../images/filmImages/aquaman.jpg';
import Country from '../images/filmImages/noCountry.jpg';
import Dallas from '../images/filmImages/dallasBuyers.jpg';
import When from '../images/filmImages/whenWeFirstMet.jpg';
import Lego from '../images/filmImages/legoMovie2.png';
import Pool from '../images/filmImages/Deadpool2.jpg';
import Spider from '../images/filmImages/intoSpider.jpg';
import Lion from '../images/filmImages/lion.jpg';
import Star from '../images/filmImages/aStar.jpg';
import Pulp from '../images/filmImages/pulpFiction.jpg';
import Dumplin from '../images/filmImages/dumplin.jpg';
import Prison from '../images/filmImages/prison.jpg';
import Marvel from '../images/filmImages/captainMarvel.jpg';
import Endgame from '../images/filmImages/endgame.jpg';
import Extreme from '../images/filmImages/extremelyWicked.jpg';
import FFH from '../images/filmImages/SMFFH.jpg';
import About from '../images/filmImages/aboutTime.jpg';
import Rosie from '../images/filmImages/rosie.jpg';
import Tonya from '../images/filmImages/tonya.png';
import Shazam from '../images/filmImages/shazam.jpg';
import Top from '../images/filmImages/topGun.jpg';
import Romantic from '../images/filmImages/iRomantic.jpg';
import Secret from '../images/filmImages/secretObsession.jpg';
import Rocky from '../images/filmImages/rocky.jpg';
import Terminator from '../images/filmImages/terminator.jpg';
import Once from '../images/filmImages/onceHollywood.jpg';
import Glory from '../images/filmImages/inglourious.jpg';
import V from '../images/filmImages/vendetta.jpg';
import Conjuring from '../images/filmImages/conjuring.jpg';
import K from '../images/filmImages/kb1.jpg';
import Knives from '../images/filmImages/knives.jpg';
import StarWars from '../images/filmImages/roskywalker.jpg';
import Titans from '../images/filmImages/titans.jpg';
import Marriage from '../images/filmImages/marriage.jpg';
import Midsommar from '../images/filmImages/midsommar.jpg';
import After from '../images/filmImages/after.jpg';
import BP from '../images/filmImages/brightplaces.jpg';
import TS4 from '../images/filmImages/ts4.jpg';
import F2 from '../images/filmImages/frozen2.jpg';
import KB2 from '../images/filmImages/kb2.jpg';
import GoodDino from '../images/filmImages/gooddino.jpg';
import Onward from '../images/filmImages/onward.jpg';
import Soul from '../images/filmImages/soul.jpg';
import Inside from '../images/filmImages/inside.jpg';
import Tenet from '../images/filmImages/tenet.jpg';
import Luca from '../images/filmImages/luca.jpg';
import BlackWidow from '../images/filmImages/blackwidow.jpg';
import Arrietty from '../images/filmImages/arrietty.png';
import HMC from '../images/filmImages/hmc.jpg';
import Dune from '../images/filmImages/dune.jpg';
import ITW from '../images/filmImages/ITW.jpg';
import SC from '../images/filmImages/SC.jpg';
import PM from '../images/filmImages/PM.jpg';
import Eternals from '../images/filmImages/eternals.jpg';
import RN from '../images/filmImages/RN.jpg';
import NWH from '../images/filmImages/NWH.jpg';
import LP from '../images/filmImages/LP.jpg';
import Encanto from '../images/filmImages/encanto.jpg';
import AMC from '../images/filmImages/amonstercalls.jpg';
import TR from '../images/filmImages/turningred.jpg';
import NT2D from '../images/filmImages/nt2d.jpg';
import MIP from '../images/filmImages/mip.jpg';
import WSS from '../images/filmImages/wss.jpg';
import CIW from '../images/filmImages/ciw.jpg';
import JWD from '../images/filmImages/jwd.jpg';
import DSMM from '../images/filmImages/dsmm.jpg';
import EEAO from '../images/filmImages/eeao.jpg';
import MTC from '../images/filmImages/mtc.jpg';
import LY from '../images/filmImages/ly.jpg';
import Coco from '../images/filmImages/coco.jpg';
import Fair from '../images/filmImages/fair.jpg';
import Worry from '../images/filmImages/worry.jpg';
import Thor_Love from '../images/filmImages/thor_love.jpg';
import Royal from '../images/filmImages/royal.jpg';
import Wakanda from '../images/filmImages/wakanda.jpg';
import GOTGHS from '../images/filmImages/gotghs.jpg';
import Klaus from '../images/filmImages/klaus.jpg';
import Onion from '../images/filmImages/onion.jpg';
import Instant from '../images/filmImages/instant.jpg';
import Avatar2 from '../images/filmImages/avatar2.jpeg';
import Pnb2 from '../images/filmImages/pnb2.png';
import M3gan from '../images/filmImages/megan.jpg';
import Httyd from '../images/filmImages/httyd.jpg';
import Hotel from '../images/filmImages/hotel.png';
import BlackPhone from '../images/filmImages/black_phone.jpg';
import Sixth from '../images/filmImages/sixth.jpg';
import WallStreet from '../images/filmImages/wolf_of_ws.jpg';
import Moana from '../images/filmImages/moana.jpg';
import Fantastic from '../images/filmImages/fantastic.jpg';
import Shutter from '../images/filmImages/shutter.jpg';
import Reality from '../images/filmImages/reality.jpg';
import Budapest from '../images/filmImages/budapest.jpg';
import GOTG3 from '../images/filmImages/gotg3.jpg';
import Coraline from '../images/filmImages/coraline.jpg';
import Inisherin from '../images/filmImages/inisherin.jpg';
import Lorax from '../images/filmImages/lorax.jpg';
import Barbie from '../images/filmImages/barbie.jpg';
import Burn from '../images/filmImages/burn.jpg';
import Nightmare from '../images/filmImages/nightmare.jpg';
import Body from '../images/filmImages/body.jpg';
import Tron from '../images/filmImages/tron.png';
import DeathCure from '../images/filmImages/deathCure.jpg';
import Wish from '../images/filmImages/wish.jpeg';
import Vanilla from '../images/filmImages/vanilla.jpg';
import Birdman from '../images/filmImages/birdman.jpg';
import Wonka from '../images/filmImages/wonka.jpg';
import HGSongbirds from '../images/filmImages/ballad.png';
import BoysBoat from '../images/filmImages/boysboat.jpg';
import BoyHeron from '../images/filmImages/boyheron.jpg';
import Jurassic2 from '../images/filmImages/jurassicfallen.jpg';
import Dune2 from '../images/filmImages/dune2.jpg';
import PoorThings from '../images/filmImages/poorthings.jpg';
import DreamScenario from '../images/filmImages/dreamscenario.jpg';
import GodzillaVKong from '../images/filmImages/godzillavkong.jpg';
import Aquaman2 from '../images/filmImages/aquaman2.jpg';
import HalfBrothers from '../images/filmImages/halfbrothers.jpg';
import IdeaOfYou from '../images/filmImages/ideaofyou.jpg';
import IronClaw from '../images/filmImages/ironclaw.jpg';
import Cars3 from '../images/filmImages/cars3.jpg';
import UnderParis from '../images/filmImages/underparis.jpeg';
import GodzillaXKongNewEmpire from '../images/filmImages/gxk_newempire.jpg';
import AnyoneButYou from '../images/filmImages/anyonebutyou.jpg';
import MadameWeb from '../images/filmImages/madameweb.jpg';
import UnbearableWeight from '../images/filmImages/unbearableweight.jpg';
import WineCountry from '../images/filmImages/winecountry.jpeg';
import Alien from '../images/filmImages/alien.jpg';
import Her from '../images/filmImages/her.jpg';
import CinemaParadiso from '../images/filmImages/cinemaparadiso.jpg';
import LostInTranslation from '../images/filmImages/lostintranslation.jpeg';
import Furiosa from '../images/filmImages/furiosa.jpg';
import MamaMia from '../images/filmImages/mamamia.jpg';
import MamaMia2 from '../images/filmImages/mamamia2.jpg';
import AllTheBoys1 from '../images/filmImages/toalltheboys1.jpg';
import AllTheBoys2 from '../images/filmImages/toalltheboys2.jpg';
import AllTheBoys3 from '../images/filmImages/toalltheboys3.jpg';
import ChaosWalking from '../images/filmImages/chaoswalking.jpg';
import Paddington from '../images/filmImages/paddington.jpg';
import Moana2 from '../images/filmImages/moana2.jpg';
import Wicked from '../images/filmImages/wicked.jpg';
import OurLittleSecret from '../images/filmImages/ourLittleSecret.jpg';
import CarryOn from '../images/filmImages/carryOn.jpg';
import Challengers from '../images/filmImages/challengers.jpeg';
import StareAtGoats from '../images/filmImages/theMenWhoStareAtGoats.jpeg';
import WallaceAndGromit from '../images/filmImages/vengeance.jpg';
import TheGame from '../images/filmImages/theGame.jpg';
import TheVillage from '../images/filmImages/theVillage.jpg';
import FightClub from '../images/filmImages/fightClub.jpg';

import {Gallery} from 'react-grid-gallery';
import ReactStars from "react-rating-stars-component";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        marginTop: '2%',
        maxHeight: 'calc(100vh - 210px)',
        overflowY: 'auto',
        boxShadow: '0px 5px 5px #85A2A6',
        webkitBoxShadow: '0px 5px 5px #85A2A6',
        mozBoxShadow: '0px 5px 5px #85A2A6'
    },
};

const filmDetails = [
    {
        // https://film-grab.com/2010/11/14/fight-club/
        width: 420,
        height: 200,
        caption: "Fight Club",
        src: FightClub,
        date: "January 2025",
        rating: 3.0
    },
    {
        // https://film-grab.com/2020/02/25/the-village/
        width: 420,
        height: 200,
        caption: "The Village",
        src: TheVillage,
        date: "January 2025",
        rating: 4.0
    },
    {
        // https://theasc.com/articles/ac-gallery-the-game
        width: 420,
        height: 200,
        caption: "The Game",
        src: TheGame,
        date: "January 2025",
        rating: 3.5
    },
    {
        // https://www.pluggedin.com/movie-reviews/wallace-and-gromit-vengeance-most-fowl-2024/
        width: 420,
        height: 200,
        caption: "Wallace and Gromit: Vengeance Most Fowl",
        src: WallaceAndGromit,
        date: "January 2025",
        rating: 4
    },
    {
        // https://www.netflix.com/de-en/title/70117293
        width: 420,
        height: 200,
        caption: "The Men Who Stare at Goats",
        src: StareAtGoats,
        date: "January 2025",
        rating: 3
    },
    {
        // https://www.movieinsider.com/photos/714673
        width: 420,
        height: 200,
        caption: "Challengers",
        src: Challengers,
        date: "January 2025",
        rating: 2.5
    },
    {
        // https://www.netflix.com/tudum/articles/carry-on-taron-egerton-movie-info
        width: 420,
        height: 200,
        caption: "Carry On",
        src: CarryOn,
        date: "December 2024",
        rating: 2
    },
    {
        // https://www.whats-on-netflix.com/what-to-watch/our-little-secret-movie-review-is-lindsay-lohans-second-netflix-christmas-movie-worth-a-watch/
        width: 420,
        height: 200,
        caption: "Our Little Secret",
        src: OurLittleSecret,
        date: "December 2024",
        rating: 1
    },
    {
        // https://abcnews.go.com/GMA/Culture/wicked-part/story?id=112594219
        width: 420,
        height: 200,
        caption: "Wicked",
        src: Wicked,
        date: "November 2024",
        rating: 3
    },
    {
        // https://www.imdb.com/title/tt13622970/mediaindex/
        width: 420,
        height: 200,
        caption: "Moana 2",
        src: Moana2,
        date: "November 2024",
        rating: 4
    },
    {
        // https://editorial.rottentomatoes.com/gallery/24-certified-fresh-fantasy-movies-for-the-whole-family/paddington-bear-movie-new-images-3/
        width: 420,
        height: 200,
        caption: "Paddington",
        src: Paddington,
        date: "October 2024",
        rating: 4
    },
    {
        // https://www.ign.com/slideshows/chaos-walking-images
        width: 420,
        height: 200,
        caption: "Chaos Walking",
        src: ChaosWalking,
        date: "October 2024",
        rating: 1
    },
    {
        // https://www.imdb.com/title/tt10676012/
        width: 420,
        height: 200,
        caption: "To All the Boys: Always and Forever",
        src: AllTheBoys3,
        date: "October 2024",
        rating: 2
    },
    {
        // https://ew.com/movies/2020/02/07/lana-condor-preview-to-all-the-boys-ps-i-still-love-you/
        width: 420,
        height: 200,
        caption: "To All the Boys: P.S. I Still Love You",
        src: AllTheBoys2,
        date: "October 2024",
        rating: 2
    },
    {
        //https://www.teenvogue.com/story/to-all-the-boys-ive-loved-before-sequel-ps-i-still-love-you-release-date-netflix
        width: 420,
        height: 200,
        caption: "To All the Boys I Loved Before",
        src: AllTheBoys1,
        date: "October 2024",
        rating: 3
    },
    {
        // https://m.imdb.com/title/tt6911608/mediaviewer/rm716791040/
        width: 420,
        height: 200,
        caption: "Mama Mia! Here We Go Again",
        src: MamaMia2,
        date: "September 2024",
        rating: 3
    },
    {
        // https://m.imdb.com/title/tt0795421/mediaviewer/rm2762256384/
        width: 420,
        height: 200,
        caption: "Mama Mia!",
        src: MamaMia,
        date: "September 2024",
        rating: 4
    },
    {
        // https://screenanarchy.com/2023/12/furiosa-giving-the-heroine-a-prequel-plays-a-dangerous-game.html
        width: 420,
        height: 200,
        caption: "Furiosa: A Mad Max Saga",
        src: Furiosa,
        date: "September 2024",
        rating: 4
    },
    {
        // https://www.thedailybeast.com/sofia-coppola-discusses-lost-in-translation-on-its-10th-anniversary
        width: 420,
        height: 200,
        caption: "Lost in Translation",
        src: LostInTranslation,
        date: "September 2024",
        rating: 1
    },
    {
        // https://m.imdb.com/title/tt0095765/mediaindex/
        width: 420,
        height: 200,
        caption: "Cinema Paradiso",
        src: CinemaParadiso,
        date: "September 2024",
        rating: 5
    },
    {
        // https://www.imdb.com/title/tt1798709/
        width: 420,
        height: 200,
        caption: "Her",
        src: Her,
        date: "August 2024",
        rating: 1
    },
    {
        // https://www.imdb.com/title/tt0078748/mediaindex/
        width: 420,
        height: 200,
        caption: "Alien",
        src: Alien,
        date: "August 2024",
        rating: 4.5
    },
    {
        // https://www.netflix.com/title/80194950
        width: 420,
        height: 200,
        caption: "Wine Country",
        src: WineCountry,
        date: "August 2024",
        rating: 2
    },
    {
        // https://medium.com/70-mm/review-the-unbearable-weight-of-massive-talent-fc0d57e93fc3
        width: 420,
        height: 200,
        caption: "The Unbearable Weight of Massive Talent",
        src: UnbearableWeight,
        date: "August 2024",
        rating: 4
    },
    {
        // https://www.picturehouses.com/movie-details/000/HO00014271/madame-web
        width: 420,
        height: 200,
        caption: "Madame Web",
        src: MadameWeb,
        date: "July 2024",
        rating: 1
    },
    {
        // https://www.koimoi.com/reviews/hollywood-movie-reviews/anyone-but-you-movie-review-sydney-sweeney-glen-powell-look-beautiful-in-this-new-rom-com-but-that-is-not-enough/
        width: 420,
        height: 200,
        caption: "Anyone But You",
        src: AnyoneButYou,
        date: "July 2024",
        rating: 1
    },
    {
        // https://www.gippslandtimes.com.au/news/2024/04/03/godzilla-x-kong-the-new-empire-review-from-slog-to-strength/
        width: 420,
        height: 200,
        caption: "Godzilla X Kong: The New Empire",
        src: GodzillaXKongNewEmpire,
        date: "July 2024",
        rating: 1
    },
    {
        // https://www.npr.org/2024/06/15/nx-s1-5006140/under-paris-review-sharks
        width: 420,
        height: 200,
        caption: "Under Paris",
        src: UnderParis,
        date: "July 2024",
        rating: 2
    },
    {
        // https://www.imdb.com/title/tt3606752/
        width: 420,
        height: 200,
        caption: "Cars 3",
        src: Cars3,
        date: "March 2024",
        rating: 3.5
    },
    {
        //https://www.imdb.com/title/tt21064584/
        width: 420,
        height: 200,
        caption: "The Iron Claw",
        src: IronClaw,
        date: "March 2024",
        rating: 5
    },
    {
        // https://ew.com/the-idea-of-you-author-reacts-movie-changed-ending-not-the-story-i-wanted-to-tell-8643327
        width: 420,
        height: 200,
        caption: "The Idea of You",
        src: IdeaOfYou,
        date: "May 2024",
        rating: 3.5
    },
    {
        // https://www.socialnews.xyz/2020/10/08/half-brothers-movie-hd-posters-and-stills/
        width: 420,
        height: 200,
        caption: "Half Brothers",
        src: HalfBrothers,
        date: "April 2024",
        rating: 4
    },
    {
        // https://people.com/jason-momoa-aquaman-and-the-lost-kingdom-featurette-exclusive-8403368
        width: 420,
        height: 200,
        caption: "Aquaman and the Lost Kingdom",
        src: Aquaman2,
        date: "April 2024",
        rating: 2
    },
    {
        // https://www.imdb.com/title/tt5034838/
        width: 420,
        height: 200,
        caption: "Godzilla vs. Kong",
        src: GodzillaVKong,
        date: "April 2024",
        rating: 2
    },
    {
        // https://www.bam.org/film/2023/dream-scenario
        width: 420,
        height: 200,
        caption: "Dream Scenario",
        src: DreamScenario,
        date: "March 2024",
        rating: 3
    },
    {
        // https://www.polygon.com/24006971/poor-things-yorgos-lanthimos-interview-emma-stone
        width: 420,
        height: 200,
        caption: "Poor Things",
        src: PoorThings,
        date: "March 2024",
        rating: 4
    },
    {
        // https://www.reddit.com/r/AustinButlerLand/comments/136rp85/some_stills_of_austin_from_the_dune_part_two/
        width: 420,
        height: 200,
        caption: "Dune: Part 2",
        src: Dune2,
        date: "March 2024",
        rating: 5
    },
    {
        // https://www.imdb.com/title/tt4881806/
        width: 420,
        height: 200,
        caption: "Jurassic World: Fallen Kingdom",
        src: Jurassic2,
        date: "January 2023",
        rating: 3
    },
    {
        // https://www.esquire.com/entertainment/movies/a46067663/the-boy-and-the-heron-hayao-miyazaki-review/
        width: 420,
        height: 200,
        caption: "The Boy and the Heron",
        src: BoyHeron,
        date: "December 2023",
        rating: 4
    },
    {
        // https://www.siff.net/cinema/in-theaters/boys-in-the-boat
        width: 420,
        height: 200,
        caption: "Boys in the Boat",
        src: BoysBoat,
        date: "December 2023",
        rating: 4
    },
    {
        // https://www.supercutmagazine.com/posts/thebestlooksfromtheballadofsongbirdsandsnakestrailer
        width: 420,
        height: 200,
        caption: "The Hunger Games: The Ballad of Songbirds and Snakes",
        src: HGSongbirds,
        date: "December 2023",
        rating: 3.5
    },
    {
        // https://www.imdb.com/title/tt6166392/
        width: 420,
        height: 200,
        caption: "Wonka",
        src: Wonka,
        date: "December 2023",
        rating: 4
    },
    {
        // https://www.nyfa.edu/student-resources/best-cinematography-look-birdman/
        width: 420,
        height: 200,
        caption: "Birdman",
        src: Birdman,
        date: "November 2023",
        rating: 3.5
    },
    {
        // https://www.imdb.com/title/tt4500922/mediaindex
        width: 420,
        height: 200,
        caption: "Maze Runner: The Death Cure",
        src: DeathCure,
        date: "November 2023",
        rating: 3.0
    },
    {
        // https://www.rogerebert.com/reviews/vanilla-sky-2001
        width: 420,
        height: 200,
        caption: "Vanilla Sky",
        src: Vanilla,
        date: "November 2023",
        rating: 4.5
    },
    {
        // https://ew.com/movies/nightmare-on-elm-street-movies-ranked/
        width: 420,
        height: 200,
        caption: "Nightmare on Elm Street",
        src: Nightmare,
        date: "October 2023",
        rating: 1.0
    },
    {
        // https://allears.net/2023/09/28/full-cast-for-disneys-brand-new-movie-wish/
        width: 420,
        height: 200,
        caption: "Wish",
        src: Wish,
        date: "October 2023",
        rating: 4.0
    },
    {
        // https://www.imdb.com/title/tt0887883/
        width: 420,
        height: 200,
        caption: "Burn After Reading",
        src: Burn,
        date: "September 2023",
        rating: 3.5
    },
    {
        // https://www.elle.com/culture/movies-tv/a36979981/barbie-movie-release-date-cast-news-spoilers/
        width: 420,
        height: 200,
        caption: "Barbie",
        src: Barbie,
        date: "August 2023",
        rating: 4.0
    },
    {
        // https://moviesanywhere.com/movie/tron-legacy
        width: 420,
        height: 200,
        caption: "Tron: Legacy",
        src: Tron,
        date: "July 2023",
        rating: 4.5
    },
    {
        // https://www.fastcompany.com/90436163/the-animated-netflix-film-i-lost-my-body-is-a-deeply-moving-heros-journey-for-a-severed-hand
        width: 420,
        height: 200,
        caption: "I Lost My Body",
        src: Body,
        date: "June 2023",
        rating: 4.5
    },
    {
        // https://www.mlive.com/movies/2012/03/the_lorax_dr_seuss_animation_i.html
        width: 420,
        height: 200,
        caption: "The Lorax",
        src: Lorax,
        date: "June 2023",
        rating: 4.0
    },
    {
        // https://www.npr.org/2022/10/21/1129518751/the-banshees-of-inisherin-film-review-colin-farrell-martin-mcdonagh
        width: 420,
        height: 200,
        caption: "The Banshees of Inisherin",
        src: Inisherin,
        date: "May 2023",
        rating: 2.0
    },
    {
        // https://seahawkseye.org/4231/features/for-a-kids-movie-coraline-is-surprisingly-ghoulish/
        width: 420,
        height: 200,
        caption: "Coraline",
        src: Coraline,
        date: "May 2023",
        rating: 3.0
    },
    {
        // https://www.space.com/guardians-of-the-galaxy-vol-3-review
        width: 420,
        height: 200,
        caption: "Guardians of the Galaxy Volume 3",
        src: GOTG3,
        date: "May 2023",
        rating: 5.0
    },
    {
        // https://lithub.com/in-praise-of-wes-andersons-finest-film-the-grand-budapest-hotel/
        width: 420,
        height: 200,
        caption: "The Grand Budapest Hotel",
        src: Budapest,
        date: "May 2023",
        rating: 5.0
    },
    {
        // https://www.cnn.com/2023/05/29/entertainment/reality-hbo-review/index.html
        width: 420,
        height: 200,
        caption: "Reality",
        src: Reality,
        date: "May 2023",
        rating: 3.5
    },
    {
        // https://www.imdb.com/title/tt1130884/
        width: 420,
        height: 200,
        caption: "Shutter Island",
        src: Shutter,
        date: "April 2023",
        rating: 4.5
    },
    {
        // https://www.imdb.com/title/tt0432283/
        width: 420,
        height: 200,
        caption: "Fantastic Mr. Fox",
        src: Fantastic,
        date: "April 2023",
        rating: 4.0
    },
    {
        // https://www.thedailybeast.com/the-revolutionary-moana-disneys-most-unapologetically-feminist-princess-yet
        width: 420,
        height: 200,
        caption: "Moana",
        src: Moana,
        date: "April 2023",
        rating: 4.5
    },
    {
        // https://www.biography.com/movies-tv/the-wolf-of-wall-street-movie-facts
        width: 420,
        height: 200,
        caption: "The Wolf of Wall Street",
        src: WallStreet,
        date: "March 2023",
        rating: 2.0
    },
    {
        // https://www.digitalspy.com/movies/a40359216/the-black-phone-true-story-inspiration-joe-hill/ 
        width: 420,
        height: 200,
        caption: "The Black Phone",
        src: BlackPhone,
        date: "March 2023",
        rating: 3.5
    },
    {
        //https://www.imdb.com/title/tt0167404/
        width: 420,
        height: 200,
        caption: "The Sixth Sense",
        src: Sixth,
        date: "March 2023",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "Hotel Transylvania",
        src: Hotel,
        date: "February 2023",
        rating: 3.8
    },
    {
        width: 420,
        height: 200,
        caption: "How to Train Your Dragon",
        src: Httyd,
        date: "January 2023",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "M3GAN",
        src: M3gan,
        date: "January 2023",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "Puss in Boots: The Last Wish",
        src: Pnb2,
        date: "January 2023",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "Avatar: The Way of Water",
        src: Avatar2,
        date: "December 2022",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "Guardians of the Galaxy: Holiday Special",
        src: GOTGHS,
        date: "December 2022",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "Klaus",
        src: Klaus,
        date: "December 2022",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "Glass Onion: A Knives Out Mystery",
        src: Onion,
        date: "December 2022",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Instant Family",
        src: Instant,
        date: "December 2022",
        rating: 3.0
    },
    {
        width: 420,
        height: 200,
        caption: "Thor: Love and Thunder",
        src: Thor_Love,
        date: "December 2022",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "Don't Worry Darling",
        src: Worry,
        date: "November 2022",
        rating: 3.0
    },
    {
        width: 420,
        height: 200,
        caption: "Wakanda Forever",
        src: Wakanda,
        date: "November 2022",
        rating: 3.8
    },
    {
        width: 420,
        height: 200,
        caption: "The Royal Tenenbaums",
        src: Royal,
        date: "November 2022",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "We're All Going to the World's Fair",
        src: Fair,
        date: "October 2022",
        rating: 3.0
    },
    {
        width: 420,
        height: 200,
        caption: "Coco",
        src: Coco,
        date: "September 2022",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Marcel The Shell With the Shoes On",
        src: MTC,
        date: "July 2022",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "Lightyear",
        src: LY,
        date: "July 2022",
        rating: 3.4
    },
    {
        width: 420,
        height: 200,
        caption: "Jurassic World: Dominion",
        src: JWD,
        date: "June 2022",
        rating: 2.0
    },
    {
        width: 420,
        height: 200,
        caption: "Dr. Strange in the Multiverse of Madness",
        src: DSMM,
        date: "May 2022",
        rating: 3.0
    },
    {
        width: 420,
        height: 200,
        caption: "Everything Everywhere All at Once",
        src: EEAO,
        date: "April 2022",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "The Cabin in the Woods",
        src: CIW,
        date: "April 2022",
        rating: 1.0
    },
    {
        width: 420,
        height: 200,
        caption: "Midnight in Paris",
        src: MIP,
        date: "March 2022",
        rating: 3.9
    },
    {
        width: 420,
        height: 200,
        caption: "West Side Story (2021)",
        src: WSS,
        date: "March 2022",
        rating: 3.2
    },
    {
        width: 420,
        height: 200,
        caption: "No Time to Die",
        src: NT2D,
        date: "March 2022",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "Turning Red",
        src: TR,
        date: "March 2022",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "A Monster Calls",
        src: AMC,
        date: "February 2022",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Encanto",
        src: Encanto,
        date: "January 2022",
        rating: 4.2
    },
    {
        width: 420,
        height: 200,
        caption: "Licorice Pizza",
        src: LP,
        date: "January 2022",
        rating: 2.0
    },
    {
        width: 420,
        height: 200,
        caption: "Spider-Man: No Way Home",
        src: NWH,
        date: "December 2021",
        rating: 5.0
    },
    {
        width: 420,
        height: 200,
        caption: "Red Notice",
        src: RN,
        date: "December 2021",
        rating: 1.5
    },
    {
        width: 420,
        height: 200,
        caption: "Eternals",
        src: Eternals,
        date: "October 2021",
        rating: 3.6
    },
    {
        width: 420,
        height: 200,
        caption: "Princess Mononoke",
        src: PM,
        date: "October 2021",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Into The Wild",
        src: ITW,
        date: "October 2021",
        rating: 4.7
    },
    {
        width: 420,
        height: 200,
        caption: "Dune",
        src: Dune,
        date: "October 2021",
        rating: 3.7
    },
    {
        width: 420,
        height: 200,
        caption: "Howl's Moving Castle",
        src: HMC,
        date: "September 2021",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Shang-Chi and the Legend of the Ten Rings",
        src: SC,
        date: "September 2021",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "The Secret World of Arrietty",
        src: Arrietty,
        date: "August 2021",
        rating: 3.2
    },
    {
        width: 420,
        height: 200,
        caption: "Luca",
        src: Luca,
        date: "July 2021",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Black Widow",
        src: BlackWidow,
        date: "July 2021",
        rating: 4.4
    },
    {
        width: 420,
        height: 200,
        caption: "Bo Burnham: Inside",
        src: Inside,
        date: "June 2021",
        rating: 4.5
    },
    {
        width: 420,
        height: 200,
        caption: "Tenet",
        src: Tenet,
        date: "May 2021",
        rating: 3.7
    },
    {
        width: 420,
        height: 200,
        caption: "Soul",
        src: Soul,
        date: "December 2020",
        rating: 4.1
    },
    {
        width: 420,
        height: 200,
        caption: "Onward",
        src: Onward,
        date: "June 2020",
        rating: 3.7
    },
    {
        width: 420,
        height: 200,
        caption: "The Good Dinosaur",
        src: GoodDino,
        date: "June 2020",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "Kill Bill Vol. 2",
        src: KB2,
        date: "May 2020",
        rating: 4.2
    },
    {
        width: 420,
        height: 200,
        caption: "Frozen 2",
        src: F2,
        date: "March 2020",
        rating: 4.0
    },
    {
        width: 420,
        height: 200,
        caption: "Toy Story 4",
        src: TS4,
        date: "March 2020",
        reviewp1: "I really thought that Toy Story 3 would be the last installment of this franchise, but I was wrong. Disney Pixar chose to bring Buzz, Woody, and all of the beloved characters of Toy Story back to the big screen one last time, and I think with good reason. While not as moving (and gut wrenching) as Toy Story 3, Toy Story 4 brought about a happy, fantastic concluding story to the series.",
        reviewp2: "I’d like to take a moment to recognize the artistry of this film. It is rather mind boggling to go back and look at the animation of the original Toy Story compared to this film, and speaks to how far digital and computational art and animation has come in only a few years. This is something that I love and have always been interested in, so getting to see this evolution has been really, really exciting. I appreciate all of the masterful animating skills behind this film, and it has been incredible to see the artistic journey and story of these characters grow over time, as well.",
        reviewp3: "Toy Story 4 picks up where Toy Story 3 leaves off, but with an important backstory about Bo Peep. She and Woody had a difficult departure when she got donated 9 years ago. After Andy went off to college and gave all of the toys to Bonnie, Woody has a hard time with his new life, as he is no longer the favorite toy. One day, Bonnie and her family go on a road trip.  Coincidentally, all of the toys get separated from Bonnie on this trip, and their new adventure reunites Bo Peep and Woody, where they begin to learn who they are after so many years.",
        reviewp4: "I couldn’t help but feel a bit old as I watched this movie. I grew up watching Toy Story, and I remember crying in the theater when I thought all of the toys were going to die in the garbage chute in Toy Story 3. This story was a bittersweet end to the screen time of the characters, and I appreciated the conclusion. However, I am a bit sad that the story is now truly over. I would watch this movie again, however, I would definitely watch Toy Story 2 first.",
    },
    {
        width: 420,
        height: 200,
        caption: "All The Bright Places",
        src: BP,
        date: "March 2020",
        reviewp1: "Before I begin this review, I’d like to preface it by saying that this film was based on the book All the Bright Places that I haven’t read, written by Jennifer Niven. My opinions on this film are based on the movie itself rather than the contents of the book paired with the film, in which cases I normally find that the book is better. Typically, the author can go further in depth with the characters that they create, and that exploration generally cannot be accurately compressed into a two hour film successfully. This was my general thought about All the Bright Places, and I honestly wish that I had read the book first.",
        reviewp2: "All the Bright Places tells the story of Violet, a high school student who is struggling with the loss of her older sister in a car accident that she was also involved in. Early on into the film Violet’s teacher assigns her and another student, Theodore, to a group project where they have to go explore different places around their home town of Indiana. Their encounters soon lead to a romance, similar to many other teen romance movies. What sets it apart is the clear heaviness and impact of the subject matter and how it is handled on screen, with talented actors and a devastating finale.",
        reviewp3: "The overall message of the story is clear in my eyes that life has a way of ensuring that things happen for a reason, as well as addressing the extreme challenges that accompany loss and trauma. However, even though the film itself was impactful, I found it to be lacking in many areas. I don’t think that the movie went in depth and explored the characters enough for me to feel emotionally invested in them. I was able to grasp the difficulties that the characters were facing to an extent, however, the overall effect of not exploring Violet and Theodore’s separate experiences left a sense of disappointment in my mind. The film does explore and mention the difficulties of the characters and the struggles that accompany their traumatic experiences, yet, I still felt that if I had known the book’s backstory of the characters then I would have understood the events that took place throughout the film much more. I would like to mention, though, that the acting of both Elle Fanning and Justice Smith did bring to light the message behind the film as much as possible, and they both did an incredible job.",
        reviewp4: "Unfortunately, I don’t have much more to add to my opinion on this film. The heart wrenching conclusion of All the Bright Places, paired with Elle Fanning’s stunning performance, was enough to bring me to tears. Yet, this movie, although powerful, is not one that I would watch again.",
    },
    {
        width: 420,
        height: 200,
        caption: "After",
        src: After,
        date: "March 2020",
        reviewp1: "Not worth one second of a watch. I unfortunately sat through the whole thing, and cannot remember a single redeeming quality. I have nothing else to say."
    },
    {
        width: 420,
        height: 200,
        caption: "Midsommar",
        src: Midsommar,
        date: "February 2020",
        reviewp1: "Disturbing. Disturbing. DISTURBING. I knew that this movie was going to leave a lasting impact on me before I watched it, but still. DISTURBING. Midsommar’s plot follows the story of Dani, a girl who is grappling with a struggling sister and terrible boyfriend, all while still attempting to maintain her own life and aspirations. Her boyfriend’s name is Christian, a rotten and spiteful character who is too afraid of change to realize that Dani deserves to heal from all of the challenges in her life, rather than have to deal with his constant lack of care and empathy. Similar to Christian are the majority of his friends, who each have the emotional range of a metal fork and lack any kind of basic human decency. Thus, Dani and Christian’s relationship is hanging on by a thread and neither of them are brave enough to give it up. Things get worse when Dani’s sister has a mental breakdown, killing herself and her parents. ",
        reviewp2: "The eeriness of the first five minutes of the film hint at what the audience will be feeling for the rest of the movie. A long, panning shot of Dani’s parent’s house follows from a running car in the garage to a bedroom. Dani’s parents are fast asleep, but a pipe is pumping carbon monoxide into their room, killing them as they lie in bed. Down the hall, Dani’s sister sits with a tube duct taped to her mouth, her dead body sitting limp with her eyes wide open. The creepiness of this scene leaves the audience terrified as to what could possibly come next.",
        reviewp3: "I won’t discuss too much of the plot of the movie aside from that Dani, along with Christian and his friends, travel to the Midsommar festival in a small Swedish town. Little does Dani know at the time, but the colony that they travel to has a very different way of life, ultimately serving as a way for Dani to find comfort from the trauma she has faced in the past few months, as well as her damaging relationship with Christian. I actually was on YouTube and the creators of this film posted some extra and deleted scenes. Watching those after I had already seen the movie creeped me out even more, and they also made me hate Christian as a character even more than I already did. ",
        reviewp4: "Aside from the disturbing plot, the cinematography of this film was absolutely beautiful. The beauty and natural feel of the shots, in addition to the sunlight present in the majority of the scenes, offset some of the horrifying elements of the film, which I enjoyed. However, even the most unsettling scenes were cinematically stunning. The beauty of the flowers at the Midsommar festival and the artwork foreshadowing essentially the entire plot of the film dominate many frames throughout the film, and there is a unique sort of calmness amongst the chaos when this beauty shines through. Even the death at the end of the film has a sort of symmetry and feeling of balance, even while characters are burning to death.",
        reviewp5: "While this movie is inherently unsettling, there is also a twisted form of empowerment that I took from it. Dani’s pain from the loss of her family, (SPOILER) as well as Christian at the end of the film, was ultimately how she found comfort in a completely new way of life. Unpredictably, Dani found a new home and new community of women through her pain and suffering. Midsommar is definitely a new form of horror that I haven’t seen anything like before, so I would highly recommend taking the time to watch this film."
    },
    {
        width: 420,
        height: 200,
        caption: "Marriage Story",
        src: Marriage,
        date: "January 2020",
        reviewp1: "I have a lot of conflicting feelings about \n\nthis movie. Now, I’d first like to address how much attention this movie got. There were plenty of internet memes about this one, from Scarlett Johnanson’s dancing to Pluto and Mickey voiceovers of the fight scene. Aside from that, it was nominated for a total of six Oscars, including Best Motion Picture of the Year and Best Screenplay. Not only was it recognized for its filmic achievements, but the cast itself was incredible. Starring Scarlett Johnanson, Adam Driver, and Laura Dern (all three of which were nominated for Oscars), it told the story of a modern failing marriage. To make matters worse, the two main characters, Nicole (Johnanson) and Charlie (Driver), have a son together who must also endure the challenges that the divorce brings.\n I’d first like to address that I’ve never had a divorce. I’ve never been married, either. In addition, I’ve never had much firsthand experience with divorces. It’s fair to say that I don’t know much about the emotions presented in this film, or how accurate they are to real peoples’ lives. Thus, I can’t speak to that, and I don’t have much input on it. However, I will say that I was pretty disturbed by the way this movie twisted the actions of the characters. Clearly, the divorce lawyers wanted to paint the opposing party as a villain, bringing out the worst in both Charlie and Nicole.",
        reviewp3: "The acting in this film was very impressive. There is definitely a reason why the actors gained so much attention at the Oscars for it. Charlie and Nicole’s dramatic fight, ending with Charlie punching a wall and saying that he wished that Nicole was dead, was quite disturbing and unsettling. It made me feel as if I was watching a real mental breakdown, showing the talent of both Driver and Johannson. It seemed that divorce brought the worst out of both of these characters.",
        reviewp4: "I do feel a bit strange about watching this film, though. It seems that there are big transitions onto platforms like Netflix and Hulu to make movies, but they seem to be evolving. It was critically acclaimed with a rockstar cast. I don’t remember a movie on Netflix getting this much attention before at award shows, and part of me doesn’t understand why. Sure, it’s a devastating story of a broken marriage, but I really didn’t feel like I got anything out of this movie. Now, this opinion may just be because I don’t fully understand what is being portrayed, yet it felt somewhat… underwhelming to me. Yes, there were emotionally fueled and upsetting scenes, but I think that many other films got undercut at the Oscars. I also think that Hollywood likes to give attention to the same people over and over, with new artists getting recognized.",
        reviewp5: "Honestly, I liked this movie, but I also think that it’s not one that people NEED to watch.",
    },
    {
        width: 420,
        height: 200,
        caption: "Remember the Titans",
        src: Titans,
        date: "January 2020",
        reviewp1: "I’m convinced that there are certain movies that everyone should be required to see. This is one of them. There’s a reason why it won eight different film awards, because it was that good. I honestly don’t want to say too much about this movie, as it’s one of those ones that I think people should just watch.",
        reviewp2: "The story is about a high school football team in Virginia and their lasting racism in the white community. A new African American coach, Herman Boone, gets hired, and has to work with the former head coach Bill Yoast. Racial divides ignite in the community, the high school, the football team staff, and the team itself. However, as time goes on the team learns to work together, and it changes the community forever.",
        reviewp3: "The acting in this movie was stellar. Funny and poignant moments ran throughout, but there were also very important scenes regarding the United States’ history with racism and its lasting effects. The message of this film is its most special component, as it teaches of friendship and love.",
        reviewp4: "I think that this movie is very important, and it also leaves the viewer with a lasting feeling of “good.” Sure the ending left me in tears, but they were tears of happiness. Love is what dominates the main theme of this film, and I think that it’s a really important message nowadays. So, whether with family or friends, I think that Disney made a great film here that is a special gem from the early 2000s."
    },
    {
        width: 420,
        height: 200,
        caption: "Star Wars: The Rise of Skywalker",
        src: StarWars,
        date: "December 2019",
        reviewp1: "There was a lot of controversy surrounding this film as to whether or not people enjoyed it. I know my fair share of friends who absolutely hated it. Others thought that it had its flaws, but it still concluded Rey and Kylo Ren’s story well. Even others loved it. In my case, I remember walking out of the movie theater and thinking “wow, I really didn’t like that very much.” After talking about it a bit with my family who liked it more than I did, I recognized some of the good parts that I had missed. However, it still was pretty disappointing for someone who watched the Star Wars films for the first time when they were nine years old. I can only imagine what it was like for fans who saw the first Star Wars in 1977. It felt forced, clunky, and somewhat inconclusive in tying together all of its complicated and moving components.",
        reviewp2: "I was always a big fan of Kylo Ren and Rey’s relationship. Clearly, The Last Jedi showed that in the first encounter between Rey and Kylo, they were considering their relationship as an option. However, even better would have been if they didn’t get involved in Rey’s romantic life at all. I think the franchise did an excellent job of creating her as a strong, independent, and powerful character. So why did they decide to have her kiss Kylo Ren at all? Why not leave her love life out of it? I don’t remember everything from my experience in the movie theater but I CLEARLY recall rolling my eyes when the two kissed. I think it would have been a much stronger message to leave the relationship between Kylo and Rey as mutual respect without romantic involvement. Given the horrific nature of Kylo’s past (killing his dad, being the main command for the First Order, etc.), he probably needed some time to process, anyways.",
        reviewp3: "In addition, I had a big issue with the entire concept of the last action sequence. I understand the whole “working together to defeat the evil” thing, but there is NO WAY that the ragtag team of rebels would be able to logically destroy all of Palpatine’s Final Order. I mean, did anyone else see how many ships they had in their fleet? On top of that, can someone tell me how the hell Palpatine even came back to life? It was like the filmmakers just seemed to bring him back for convenience’s sake, not to mention that it undermines the ENTIRE finale in Return of the Jedi. Seriously? Darth Vader didn’t die for nothing, but that’s what these creators are making it seem like. Ugh.",
        reviewp4: "My general issues with this franchise could go on for a while longer (Luke’s death, Finn’s weird romantic involvement, etc.), I decided it’s probably better to talk about the parts of this movie that I enjoyed. So, when it comes to visuals, this movie was astoundingly beautiful. Kylo and Rey’s fight scene in the water was epic—from the choreography to the acting to the intense nature of the scene. That was one part of the movie that I really, really liked. I also felt that the death of Leia, although the circumstances of her death were flawed, was still heart wrenching. The simplicity of the way that she went was what made it so sad to me, and if the filmmakers were attempting to create a tearjerker, they succeeded.",
        reviewp5: "Overall, I think that this whole franchise of Star Wars episodes VII-VIIII could have been vastly improved. I’m not saying the original movies were all perfect (obviously episodes I and II weren’t great), but there was something compelling about them. It’s disappointing because there are really solid components to these films that made me happy to see Star Wars on the big screen."
    },
    {
        width: 420,
        height: 200,
        caption: "Knives Out",
        src: Knives,
        date: "Winter 2019",
        reviewp1: "This was one hell of a rollercoaster. Clever, thrilling, and engaging, I think that Knives Out was a solid twist on mystery films. Falling into certain tropes of the genre—secretive investigator, “more to the story”, twists, and turns, it still managed to add something new and unique that left me feeling content.",
        reviewp2: "The story follows the Drysdale family following the death of Harlan Thrombey, a novelist, on his 85th birthday party. Detective Benoit Blanc is a private investigator who is sent to uncover the secrets behind the murder. Similar to a game of Clue, Blanc works with the family and its workers to find out what actually happened, which is what makes the movie interesting. Blame and false accusations ensue, and no one is safe. The film also adds its own poignant and perfectly-timed comedy that is never expected, making it that much more special.",
        reviewp3: "The cast of this film is stellar. One of my all time favorites, Daniel Craig, nails his accent and convincingly plays Blanc. Chris Evans, Jamie Lee Curtis, and Michael Shannon all play their characters eloquently, each with their own secrets and lies. However, the real gem of this movie is Ana de Armas, who plays Marta Cabrera. She is the nurse and friend of Harlan Thrombey, and knows more about his death than the Drysdales originally expected. What makes Ana de Armas’ performance is that it is so genuine. She accurately demonstrates Cabrera’s confusion, guilt, and fear of the insane situation, making her character seem the most grounded and believable.",
        reviewp4: "Another component of this film that I loved was the cinematography. Led by Steve Yedlin, who has also worked on projects including Looper and Star Wars: The Last Jedi, the shots, angles, and characters all have more meaning than what the viewer sees at first glance. Yedlin himself stated in a Studio Daily interview that “One thing Rian and I did discuss in our brief references phase of Knives Out was the [Robert] Altman style of weaving characters together in a space with a fluid, evolving camera that combines dolly moves, zooms and pans.” One object that stood out to me was the knife circle on the wall, which served a central importance in the film. Constantly putting characters in the epicenter of the knives, it was a circle of guilt, lies, and blame. I loved it. It almost reminded me of Game of Thrones’ throne of swords, except inverted.",
        reviewp5: "I definitely recommend this movie. It’s quirkiness, uniqueness, and genuine audience appeal made it fun and enjoyable. I’d watch it again if I had the opportunity, as well."
    },
    {
        width: 420,
        height: 200,
        caption: "Kill Bill Vol. 1",
        src: K,
        date: "Fall 2019",
        reviewp1: "I’m ashamed to say that it took me so long to finally get myself to watch this movie. Maybe I didn’t notice it, or maybe I just wasn’t paying attention, but it finally appeared on Hulu one day. I definitely procrastinated on my homework to watch it, too.",
        reviewp2: "I’ve seen most of the Tarantino films, and after I watched this one, I’d say that it falls VERY close to the top of my list. I think that I’d put Inglourious Basterds at the top, with Once Upon a Time and Pulp Fiction up there also. I think that the violence and edge of Kill Bill Vol. 1 shows a different side of Tarantino’s artistry following his hits like Pulp Fiction and Jackie Brown. He, similar to the gunshot in the car of Pulp Fiction, doesn’t hide away from violence, rather, he basks in it. Almost as if he enjoys it.",
        reviewp3: "I thought Kill Bill Vol. 1 was just so...badass...albeit no better way to describe it. Obviously, the plot itself is so sick and twisted, but that’s Tarantino for you. Obviously, the main theme of the film centered around revenge, yet I felt that Uma Thurman’s character had much more depth than just a bloodthirsty killer. Certain scenes almost resemble that of a dead child, such as when The Bride is on her final hunt to find and kill O-Ren Ishii. She walks out of the house and into the pristine, delicate snowfall, bright red shining on her back. Not only is this representative of the trail of blood that she has just left behind, but also the trail of blood Bill has caused due to the supposed death of her child.",
        reviewp4: "Another iconic portion of this film is The Bride’s yellow jumpsuit. After researching a bit, I found out that this was one of Tarantino’s famous 'copies.' He “stole” the jumpsuit from Bruce Lee in a film called Game of Death that Lee never actually released. Now, I’ve only seen Kill Bill Vol. 1 once, and I think it’s safe to say that Tarantino likely incorporated his fair share of 'stolen material' into this film, as he always does. To research and discuss all of them here would likely be a very long discussion, so I’m going to leave that one for another day.",
        reviewp5: "In all honesty, I think that this is a cinematic masterpiece. There are very few movies that keep me on the edge of my seat in the way that this one did, and I absolutely loved it. The cinematography was beautiful despite the violent nature of the film, especially when The Bride was fighting, only her black silhouette visible, with a blue background. It was ruthless and compelling, and I know I will be watching it again soon."
    },
    {
        width: 420,
        height: 200,
        caption: "The Conjuring",
        src: Conjuring,
        date: "Fall 2019",
        reviewp1: "Those of you who may know me know that I am NOT a fan of horror movies. However, I remember deciding to watch this on Halloween to get some spooky vibes. To be honest, I was surprised reading how critically acclaimed this movie was. It followed all of the same tropes and pitfalls expected in any horror film - nothing truly creative or inventive that had me thinking 'wow, I wasn’t really expecting that.' That being said, I don’t have too much to say about this one.",
        reviewp2: "Did it have some solid jump scares? Yeah. Frightening visuals? Sure. Character development? Not really. Was it anything excellent? No.",
        reviewp3: "This is what I think about the modern horror genre in general. A lot of them are pretty much the same, even when they have different plots and characters. That being said, if you’re looking for a horror movie, this one would be pretty fun to watch with some friends."
    },
    {
        width: 420,
        height: 200,
        caption: "V for Vendetta",
        src: V,
        date: "Summer 2019",
        reviewp1: "V for Vendetta left me feeling very confused and somewhat unsatisfied. There were times as I was watching where I was interested in how the plot would play out, but I also had a few 'why?' moments that didn't feel balanced by the impressive parts. It was entertaining, but I didn't think it had a conclusive ending given the circumstances of the authoritarian state of the government in the film.",
        reviewp2: "V for Vendetta had beautiful cinematography, especially when playing with shadows. When V trapped Evie in his home and framing it as the government, the shadows that the filmmakers used were clever. They cast shadows on V's appearance, making it seem as if he was the authoritarian prison guard that his ultimate goal was to destroy. These techniques were also applied to some of the fighting scenes, which also were beautifully shot. I thought there were also interesting hints that revealed parts of V's background without giving away his actual identity. This included when he removed his gloves and when he took off his mask after Evie left him. Overall, I thought that the cinematography was an artistic addition to this film.",
        reviewp3: "However, I struggled with many of the events that took place in the plot, which ultimately was the downfall of this film. There wasn't a sequel, so I will never know any of the unanswered questions that I still have about V's plan and actions. I didn't understand V's obsession with Evie, as well as Evie's nonchalance with her circumstances. The idea that they fell in love with each other was forced, not to mention that it appeared to be an example of Stockholm Syndrome (similar to Beauty and the Beast). I was also confused as to how so much of Britain's population became involved and compliant in V's plan to blow up Parliament simply because he sent them all masks that looked like his. Before this happened, all they felt was fear. In the final lines, I began to roll my eyes when Evie discussed who V was. It was just corny.",
        reviewp4: "Overall, V for Vendetta wasn't one of my favorite films, which was a bummer because I wanted to like it. It got muddled with the relationship between Evie and V, and it lacked character development. It had the potential to be thought-provoking and reflective, but it ultimately fell short."
    },
    {
        width: 420,
        height: 200,
        caption: "Inglourious Basterds",
        src: Glory,
        date: "Summer 2019",
        reviewp1: "I have complicated feelings about this film. I've been watching a lot of Tarantino movies and catching up on all that I've been missing recently. Inglourious Basterds was another masterpiece filled with trademark Tarantino violence and beautiful cinematography that is unlike anything else in modern cinema. That being said, this movie was difficult for me to watch. As with most movies about World War II, some components go against morality and treatment of other human beings, specifically related to Germany's treatment of Jews. Tarantino did not shy away from the antisemitism pulsating through the Nazi party before and during World War II. This made it much more challenging to watch in comparison to some of the other Tarantino films that I've seen. Spoilers will follow.",
        reviewp2: "Tarantino began the film by introducing the principal antagonist of the film, Hans Landa, who is portrayed by Christoph Waltz. It is no surprise to me that he won the Oscar for Best Performance by an Actor in a Supporting Role for his work in Inglourious Basterds. His performance was chilling. One of the most disturbing parts of his acting was his laughter. The way that he chuckled and burst out laughing was downright creepy, and it made me feel as if his character always knew more than what he let on. His character arc was also very interesting. What ultimately led to his demise was his belief that he had beat the system. This leads me to Brad Pitt and his performance as Aldo Raine. He serves as the polar opposite of Landa, with disregard of the rules and the politics behind Landa's actions. Raine is the brutal leader of the 'basterds', a group made up of mostly Jewish Americans who skin the heads of Nazis that they kill. His killing of Landa proves that he doesn't care about the trickery and cleverness behind Landa's actions. This film is extremely violent and does not hold back in its sharp dialogue between characters who clearly dislike each other. The edge of the script adds unique theatrical components to the film itself, despite the looming shadow of the reality of World War II.",
        reviewp3: "Without a doubt, Shosanna was my favorite character in this film. Her grit and determination to capitalize on the opportunity to destroy those who took away her family was unwavering. I also felt that her death was noble, even though she was killed by a Nazi war hero. What made this movie even more compelling was the idea that to kill all of the Nazis in the movie theater, Shosanna had to destroy the nitrate film that stored countless stories and movies. It makes me wonder what stories stored in the films were lost to the destruction of the Nazi elites. In the end, Inglourious Basterds is a fictional film about the fictional killing of Hitler and many other Nazis during World War II, and to do so, nitrate film had to be terminated. I'm curious to know if Tarantino had a greater message behind the choice to burn the nitrate film. It makes me think it was a metaphor to represent the countless stories and lives that could have survived if the Nazi party didn't exist.",
        reviewp4: "The final component I'd like to talk about in this film was the use of the color red. Red was one of the principal colors of the Nazi party that was explicit in many scenes throughout Inglourious Basterds. Red also appeared when the Nazis were scalped by the Basterds, in the many appearances of blood throughout the film, in Shosanna's dress at the German film's premiere, and blended together with the fire as the building was burning. While it was a color that represented the power of the Nazi party, Tarantino also cleverly represented it as their downfall. Visually, the film was stunning in terms of the usage of color.",
        reviewp5: "This movie was very rattling and disturbing. It maintains the Tarantino style while depicting the fictional downfall of the powerful Nazi leadership. In a similar manner to Once Upon a Time in Hollywood, the ending does not align what actually happened in real life. What this means to me is that Tarantino is making a statement that his moviemaking doesn't necessarily tell the truth about history. He twists it to his directorial vision."
    },
    {
        width: 420,
        height: 200,
        caption: "Once Upon a Time in Hollywood",
        src: Once,
        date: "Summer 2019",
        reviewp1: "I'd wanted to see this movie since I saw a trailer for it a few months before it was released. I've seen a few of Quentin Tarantino's films, and I'm sad to say that I haven't watched more. However, you can check out my review on Pulp Fiction below. Like a lot of the movies I've watched, I knew absolutely nothing going into the theater about this film. In all honesty, I didn't even know what century it was taking place in at first. Thank goodness the dialogue clarified this for me. I didn't even know that it was supposedly based on reality (with a twist at the end). Now, I have a lot to say about this movie. I will talk about spoilers below, so please be warned!",
        reviewp2: "I'd first like to talk about the mysterious nature of the plot itself. As I learned after I watched the movie, Once Upon a Time in Hollywood was based on the Tate murders perpetrated by the infamous Charles Manson. Sharon Tate, played by Margot Robbie, is one of the victims in this brutal murder. That was just one of the many moving components in this film. The movie starts with a brief introduction to Rick Dalton and Cliff Booth in the 1950s, an actor and a stunt double, who later attempt to find a place in the ending Golden Age in Hollywood (1969). For the duration of the movie, these characters seem completely separate, aside from the fact that they are neighbors. Dalton also mentions that Tate is married to Roman Polanski, who is a director, and that a conversation with him could change the future of his career. At the end of the film, this ends up happening. Polanski invites Dalton over to his house for drinks and concludes the film. This is when the 'Once Upon A Time' portion of the movie's title comes to life, as in real life Tate is the one who is attacked by Manson's followers. This doesn't happen in the film. Movies are based on imagination and bending reality, which serves as Tarantino's underlying message in Once Upon a Time in Hollywood.",
        reviewp3: "There are other components to the plot that go unresolved and add to the chaos compiled in Tarantino's vision. One such example is the death of Booth's wife, as well as the story behind the young girl who Dalton works with. Unlike other movies where the plotline is rather simple and gets muddled down by random side stories, this film masterfully combines the disorder of the characters' lives to the story. The result is a feeling of controlled chaos that works well with the uniqueness of the film itself.",
        reviewp4: "Another aspect of this film that I loved was the cinematography. A shot that stands out in my mind is when the creators placed a camera on top of the hood of a car, focused on the car's hood ornament. The background is blurred as the car comes to a stop. I don't even remember the context of the shot, but it stood out in my mind. I also remember the similarity of the shots as characters drove out of Dalton and Tate's driveway. Both Booth and Polanski tear out of the long driveway, distinguishing the two characters only through the car that they own. Booth's old blue car doesn't compare to Polanski's expensive convertible. Yet, Booth seems content watching over Dalton, driving his expensive car, fixing his problems, and listening to Dalton's hilarious breakdowns. Yet, one of my favorite parts of this movie was Brandy, who was Booth's tough pitbull. She proves to be a very important (and violent) character at the end of the film, which makes her even more epic.",
        reviewp5: "This movie is awesome. I walked out of this movie and immediately thought of Pulp Fiction's violence, convoluted plotline, and quippy dialogue. Tarantino has created another unique 'Tarantinoesque' classic that is embedded with creative visual messages. I would have to watch this movie many times before I caught even close to the number that he incorporated over the three hours. Once Upon a Time in Hollywood is violent and requires intense focus, but it's worth the watch. I'd also recommend reading about the history behind the movie before watching it because there were some places where references went completely over my head."
    },
    {
        width: 420,
        height: 200,
        caption: "The Terminator",
        src: Terminator,
        date: "Summer 2019",
        reviewp1: "I don't frequently choose the movies I want to watch based on directors, but Titanic and Avatar are both films that I loved. The common denominator between them was James Cameron. Disclaimer: The Terminator is one of my dad's favorite movies, so the fact that he loved it so much probably had an impact on my opinion. All aspects considered, I thought that the Terminator was an entertaining action-packed thriller. It had me on edge almost the entire time, and it makes sense why it is such a fan-favorite for so many.",
        reviewp2: "Something that stood out to me in The Terminator was that the plotline was simply two characters the pursuit of a woman. One wanted to kill her and one wanted to save her. The boiled-down plot is very simple, which I think tends to make a movie much stronger. The music paralleled the simplicity of the plot in this movie, which also stood out to me. When the Terminator was searching for Sarah Connor there was a short, four-drumbeat melody that resembled a heartbeat. Its bareness built the tension in many of the scenes in the movie. In effect, Cameron masterfully created tense scenes and didn't hold back in terms of violence inflicted on various characters. The Terminator's ruthlessness made the danger that Sarah was in much more convincing.",
        reviewp3: "Despite the technological limits of when this movie was made, I thought that the visual effects of The Terminator were sufficient enough to be believable. Although the blue lightning was slightly unrealistic, it still got the job done. I also thought that the ending fight between Sarah, Kyle, and the Terminator was impressive. The film did well as a science fiction flick, which makes me want to watch the films that follow.",
        reviewp4: "Even though The Terminator was somewhat predictable once the audience learned more about Kyle, I think that it was an entertaining film. It wasn't my favorite out of all of the James Cameron films I've seen, but it was a thrill to watch. I also enjoyed that it wasn't excessively long. Many movies today are overwhelming in their sheer length, and I enjoyed not having to find three or more hours to sit through The Terminator."
    },
    {
        width: 420,
        height: 200,
        caption: "Rocky",
        src: Rocky,
        date: "Summer 2019",
        reviewp1: "Like with Top Gun, I'm also embarrassed that this was my first time watching Rocky. I mean, everyone has seen Rocky, right? I was the only one who hadn't. What a movie! I knew that it won Best Picture at the Oscars, but I didn't realize it also won Best Director AND Best Editing. Scanning the IMDb page, I saw that this also got nominated for SEVEN other Oscars, not to mention all the Golden Globe and BAFTA nominations. So obviously, it was good.",
        reviewp2: "What struck me most about Rocky was how organic it felt. I honestly thought I was watching Sylvester Stallone train for a fight, no characters or fake plot involved. In my opinion, that's what made it so much more powerful. After I watched this movie, I learned that Stallone is pretty much a mirror of the character, which makes complete sense. It seemed like he wasn't even acting, which appeared effortless to the audience. Also, the relationship between Rocky and Adrian was subtle, but it served to be a major plot point at the end of the film. Adrian and Rocky served as each others' opposites. Adrian was shy and Rocky was outgoing, as Rocky discussed. Yet, that didn't change how they felt about each other. The organic nature of the film made this almost corny relationship appear natural, which served to strengthen the plot.",
        reviewp3: "This film also had a few very striking compositional shots. What stands out most in my mind is the night before the fight when Rocky went to the ring where he would fight the next day. It was completely empty, yet Apollo's poster towered over him in the background. It signified an even greater metaphor when Rocky saw his own poster, which depicted his shorts in reverse colors. Rocky visually became the underdog in the fight, even though no character actually said that he was. They simply describe him as getting a shot to fight for the title as a Philadelphia native, and Rocky went home after that thinking that he would never win. It minimized the likelihood that he would win as if he never stood a chance in the first place.",
        reviewp4: "I thought that Rocky was a unique movie in that it was simple and powerful. I had somewhat of a dislike of boxing movies before this because I didn't enjoy Raging Bull at all. However, Rocky changed my mind. It is a classic that isn't very long but has an awesome story all the same."
    },
    {
        width: 420,
        height: 200,
        caption: "Secret Obsession",
        src: Secret,
        date: "Summer 2019",
        reviewp1: "I genuinely don't even want to write a full review for this movie. I disliked it that much. If you even want to know what this movie is about (which I don't recommend) you can go ahead and watch the trailer. It tells you pretty much everything that is going to happen. Secret Obsession was predictable and subpar. There seemed to be a serious lack of effort when it came to scriptwriting and plot design. It seemed more like a futile attempt to condense the plot of Netflix's You into two hours. 100% NOT worth the watch."
    },
    {
        width: 420,
        height: 200,
        caption: "Isn't It Romantic",
        src: Romantic,
        date: "Summer 2019",
        reviewp1: "I can honestly say I've never seen such a satirical movie before (or maybe I have and I just haven't been paying attention). I enjoyed it! Despite its predictability, I think it did a much better comedy job than romantic comedies often do. I've never been much of a romantic comedy fan anyways. I'd much rather watch a romantic drama. I have a few reviews below about romantic dramas, like About Time, and I think that they have so much more value than romantic comedies. I'm sorry to those of you that love romantic comedies. They just aren't my favorite.",
        reviewp2: "This movie was interesting because it was a romantic comedy making fun of a romantic comedy. It was a little confusing because the creators were, in effect, making fun of what they were creating. Quite paradoxical if I do say so myself. I'll start by saying that I've always loved Rebel Wilson's acting. I just think she's so funny, and I love watching her act. I also thought it was hilarious how Rebel Wilson and Adam Devine were the main love interests. It reminded me of how great and fun Pitch Perfect was, and I always thought that their chemistry onscreen was realistic. I found myself saying 'aweee' more than once when I was watching this film with my friend. There wasn't anything overly-impressive regarding editing, camerawork, etc., but I will say that the set design was one of the most satirical components of the film.",
        reviewp3: "This movie is funny and goes how you would expect, but I wouldn't say that it's a must-watch. If you have the time, however, then go for it!"
    },
    {
        width: 420,
        height: 200,
        caption: "Top Gun",
        src: Top,
        date: "July 2019",
        reviewp1: "I'm embarrassed that I haven't seen this movie until now. It's a classic! Then again, I haven't seen many classics, but I'm trying hard to catch up! I'm getting there, slowly but surely. I found out soon after I watched it that Top Gun 2 is coming out next year. I will be watching in theaters because I enjoyed this movie overall. It wasn't perfect, but I thought that the flying scenes were beautiful and also slightly disorienting; likely what actual fighter pilots experience in the air.",
        reviewp2: "For some reason, I've been watching a lot of Tom Cruise movies recently. Yesterday I watched Minority Report and a few days before I watched Mission Impossible: Ghost Protocol. There is a reason why he always plays the protagonist in action movies. He is VERY good at it. Something about his demeanor comes off to the audience as very mysterious. Sometimes, you want to root for him, whereas other times he leaves you questioning why in the world he's even a protagonist. I was going back and forth between these emotions in Top Gun. In all honesty, I was rooting more for Goose than I was for Maverick. Yeah...that didn't work out.",
        reviewp3: "One of my problems with this movie was the relationship between Maverick and Charlie. It seemed more forced than anything else, not to mention that Maverick went into a bathroom to follow her around. Talk about creepy. The movie would have been so much better if their awkward relationship wasn't included at all. If they'd focused more on developing the plot, more of Maverick and Goose working together as a team, more of explaining what was going on at the camp from day to day life (aside from a single volleyball game).",
        reviewp4: "Top Gun is an entertaining movie, although it did have many flaws. I think that its strengths outweighed them, but it's a close call. Not to mention that it is probably completely inaccurate and Maverick wouldn't be allowed near a plane without a thorough mental health investigation. Yet, I think that it's fun and worth the time."
    },
    {
        width: 420,
        height: 200,
        caption: "Shazam",
        src: Shazam,
        date: "July 2019",
        reviewp1: "This movie was geared towards family, and that was evident from the trailers and marketing. Anyone watching this movie would have to understand this audience, which was mostly made up of children and parents. I think that this movie presented a solid balance the goofiness expected in a children's movie with the stakes of superheroes. Despite its faults, Shazam was a lighthearted and fun film that reminds viewers of the importance of family and finding love.",
        reviewp2: "To start, I think that one of the most prominent flaws of Shazam was its scriptwriting. I physically cringed at points in this film because of the stupid lines that Shazam had. It also frustrated me that Billy would never say the cheesy-one liners that the scriptwriters included for Shazam's lines. It was probably an attempt to try to relate' to their younger audience, but in reality, it was just annoying and unnecessary.",
        reviewp3: "I thought that other elements of the film were much more appropriate and made sense in the context of their audience. The plot was creative and reminiscent of most origin stories for superheroes, but I also thought his connection to his mother and their relationship serving as a major plot point elevated the film. I'm not familiar with the Shazam comics, but this was probably an important part of his backstory. I think this related to the 'family' component of the film, while also suggesting a reason as to why Billy is so insecure and fears to get close to people.",
        reviewp4: "Overall, I think Shazam was successful. It was much lighter than many of the other D.C. films, which I appreciated. This wasn't the best superhero movie in the world, but it was a breath of fresh air in the D.C. universe."
    },
    {
        width: 420,
        height: 200,
        caption: "I, Tonya",
        src: Tonya,
        date: "July 2019",
        reviewp1: "This movie was one wild ride. Whether it was the graphic domestic violence or the horrendous emotional cruelty of a mother on her daughter, the entire movie left me feeling very shaken and disturbed. The most mind-blowing part to me was that this was all based on reality. I watched I, Tonya with my mom, and she told me about how she remembers all of the events in the movie taking place. It was, in reality, pretty mind-boggling. What was even crazier to me was that Tonya recently appeared on Dancing With The Stars, which I went and watched on YouTube after I finished the movie.",
        reviewp2: "I wouldn't ever watch this movie again. It was worth the watch once, but I think that there were so many disturbing elements that I didn't find it enjoyable. The entire time, I was concerned about the next terrible event that was coming. However, I watched a video about how the VFX team created the impressive routines based upon Tonya Harding's actual performances. I didn't realize how challenging that appeared to be, which I also thought was the most interesting part of the entire movie. Her performances, despite the controversy that surrounded her life, were stunning and beautiful. Those were the only portions of the film that I truly enjoyed watching, although Margot Robbie's acting was also very strong.",
        reviewp3: "Overall, I think that this movie was okay. The creators of this film included elements filled with comedy, which I didn't necessarily like. I think, however, that they did this intentionally to make the audience confused about whether to laugh or to cry. For example, Tonya's mother wouldn't let her go to the bathroom when she was skating. Then, she went on the icerink. For me, however, the underlying idea that this entire film was based on reality sucked any element of comedy away and made my feelings very conflicted about whether or not I liked it. That does not mean that I didn't think it was well made or interesting. To put it simply, the movie was good, but I didn't like it very much."
    },
    {
        width: 420,
        height: 200,
        caption: "Love, Rosie",
        src: Rosie,
        date: "July 2019",
        reviewp1: "I remember that I watched About Time and then Love, Rosie back to back. I was clearly in the mood for some dramatic and romantic movies, and I thought that both of them were great. They were both very different, yet they both had plots that were simple and endearing. Love, Rosie was full of tearjerking moments that made me simultaneously upset and happy because I knew what the result would be. I had seen short clips of this film before, yet I hadn't watched it in its entirety. I finally got around to it now, and I'm so glad that I did.",
        reviewp2: "For me, it was clear from the beginning that Rosie and Alex would end up together, despite all the impediments to their relationship. I found it raw, poignant, and emotional in terms of how life changes and takes everyone in different directions. Yet, it also showed that no matter what, some feelings, emotions, and behaviors never do change. Although the plot itself was slightly unrealistic, I think that the chemistry between Sam Claflin and Lily Collins made up for it. They both are strong actors, and I think that together they made the romance between Rosie and Alex believable despite the circumstances. I don't think that this movie was meant to have a story that showed realism. I think that the cast and crew were aiming to make the audience relate to the characters, and in my opinion, they succeeded.",
        reviewp3: "Side note: I just saw that this movie got a 33% on Rotten Tomatoes. I disagree with this completely. Sometimes I get so angry with sites like that because they can make people not want to see movies simply because Top Critics dislike them. Another example is the Great Gatsby with Leonardo DiCaprio, which I thought was pretty good. Same with the Greatest Showman and the Bourne Legacy, which both also received a 56% splat. I suppose that it's just more opinions weighted against the movies than for it, but I don't think that should mean that all movies that have gotten a splat should automatically be ruled out of anything of quality. And, sometimes they do get it right. With all that being said, I appreciated Love, Rosie and I would recommend it, despite some of its reviews."
    },
    {
        width: 420,
        height: 200,
        caption: "About Time",
        src: About,
        date: "July 2019",
        reviewp1: "I cried my way through this movie for sure. Don't get me wrong, I am a fan of romantic comedies. However, I always think that movies like these impact me much more. I'm not talking about most of the Nicolas Sparks book based movies that are leaning more towards corny than anything else. This one was very different than those films, and I think that made it so much more beautiful.",
        reviewp2: "What I liked the most about this movie was that the idea seemed so... simple. Well, the idea of time travel isn't necessarily simple. But for some reason, the production was so well done that it was 100% believable. The film was happy and somehow realistic, which I appreciated. I also really enjoyed the sentiment that the About Time achieved. It made me cry and cry, even though simplicity and calmness ran throughout the plot. The plot was about a quirky and awkward man attempting to find love, and he was given a magical gift that helped him to achieve it. That's it. The way that the magic was introduced into the plot was so nonchalant that it seemed normal, which gave the entire film an element of uniqueness.",
        reviewp3: "However, the one idea of this movie that wasn't necessarily my favorite was that Tim simply got do-overs with his life. I mean, that's kind of the point of time travel. But, it frustrated me when Tim would say something embarrassing or do something wrong and he wouldn't have to face the consequences because he could simply do it over. Although, the conclusion of the film completely made up for this slight frustration of mine.",
        reviewp4: "Overall, this movie was completely endearing and adorable. There were many sad moments, yet I think it was beautifully created and the acting was stellar. I would recommend this movie."
    },
    {
        width: 420,
        height: 200,
        caption: "Spider-Man: Far From Home",
        src: FFH,
        date: "July 2019",
        reviewp1: "I've been writing a lot of Marvel reviews recently, but I've been waiting to talk about this one for a while. Since I saw Avengers: Endgame, I was hoping that Marvel would steer away from the heavy and sad films for a bit. I couldn't take another one of those after the death of Iron Man. In all honesty, Spider-Man: Far From Home is one of my favorite Marvel movies ever. In terms of all of the Spider-Man movies that I've watched as a kid, this is also one of my favorites. I think it parallels to the epic Spider-Man 2 in the Toby Maguire Spider-Man movies (not so much The Amazing Spider-Man 2, unfortunately). I'll get into the many reasons why I love it, and also why I think it was so successful following Endgame.",
        reviewp2: "Not only was it fun and entertaining, but Spider-Man: Far From Home propelled the MCU into its next direction with Spider-Man in a major role. I thought it was very powerful how the creators put REAL stakes into this movie aside from just a villain. They mixed Peter's love life into the conflict of the movie, which unarguably was one of the reasons why I loved it so much. One of my favorite parts of this Spider-Man cast is MJ, who is played by Zendaya. Her chemistry with Peter onscreen, quippy comments and awkwardness as a character make their relationship so much more believable and adorable. I think what I loved most about their relationship was that it felt almost like a well-made romantic comedy that is surrounded by unlikely and dangerous circumstances, which I thought was unique.",
        reviewp3: "Another part of this movie that I loved was that they showed the impact that Tony Stark's death had on Spider-Man, yet they didn't make it the main focus of the film. Peter was struggling because he just lost his father figure. He had to balance his life as Spider-Man and his life as a normal person who suffered from the effects of the Blip, which altogether would be extremely difficult for anyone to manage. Now I'll go into some spoilers, but I want to say them anyway because I thought everything I'm going to talk about was brilliant. Anyone in the theater audience could see that Mysterio wasn't going to end up being a good person. Yet, Peter was looking for someone to trust. He was alone, away from Aunt May, and had nowhere else to turn. It makes complete sense that he would believe in the one person who seems to be fighting real villains. Although it was infuriating to watch his trust get betrayed, it made total sense why he did it and gave away EDITH. He was hurting, and his mistakes reflect his innocence as a character.",
        reviewp4: "I now want to discuss what everyone has been talking about: the post-credit scenes. It sent a chill down my spine when I saw the USB drive and a person taking data. I thought that would be a hint for a different conflict in an upcoming movie. I might have been wrong, as the Daily Bugle released the video with Mysterio, but that could be something else entirely. What makes me the most confused is that the audience never saw him make the video. Was Mysterio telling the truth about multiverses? Is that where he made the video? Is Mysterio dead? Does this have anything to do with the post-credit scene in Spider-Man: Homecoming? Did Peter's identity get released, or was it fake? Did anyone else notice that BP were the initials on Peter's luggage? Does all of this have something to do with Peter's dad? The second post-credit scene got me thinking even more. Is anyone else a Skrull? Where is Nick Fury, and why is he gone? Those two scenes left me with so many questions that I didn't know what to do. All I know is that I can't wait to find out.",
        reviewp5: "I would recommend this movie to anyone, anywhere. It was entertaining, endearing, and thought-provoking in terms of the power of drones and how people believing everything that they see and read. After Endgame, it was a breath of fresh air without forgetting all of the impacts that it had on the characters in the MCU. I loved it!"
    },
    {
        width: 420,
        height: 200,
        caption: "Extremely Wicked, Schockingly Evil and Vile",
        src: Extreme,
        date: "2019",
        reviewp1: "Dis-tur-bing. This movie was creepy beyond belief. It seems like Netflix has a persistent need to keep creating content about serial killers, especially Ted Bundy. Honestly, this movie was so disturbing to me that I couldn't sleep the night after I watched it. I know that I've never liked scary movies, but this movie wasn't like generic horror. It was more psychologically unsettling than anything else, especially because everyone watching already knows that Ted Bundy is a convicted serial killer.",
        reviewp2: "First off, it was a little strange seeing Zach Efron playing this role. And kudos to him, he played the part very well. However, the entire time that I was watching, I still couldn't get the image of him as Troy Bolton singing 'Getcha' Head in the Game' from High School Musical out of my head. I also thought that Lily Collins did an incredible job playing Liz. The most upsetting scene in this entire movie was when Liz meets Ted after he has been put in jail. They have a phone call, Liz questions how Ted killed a woman in the forest. He never confesses, but he writes 'hacksaw' in the condensation of the window that separates them. The editing builds up the scene, cutting back and forth quickly and increasing the noise in the background as if Ted is reliving his horrific actions as he is looking at Liz. It freaked me out to my core.",
        reviewp3: "The creepiness of this movie cannot be understated, and I honestly wish that I hadn't ever watched it. It had no benefit, and all it did was make me scared."
    },
    {
        width: 420,
        height: 200,
        caption: "Avengers: Endgame",
        src: Endgame,
        date: "May 2019",
        reviewp1: "Of course, I loved this movie. I've been waiting for a film like this ever since I saw the first Iron Man with my dad when I was ten years old. As I'm sure others felt, I left the theater with a sense of closure and new beginnings for the MCU. As a warning, I will say that I'm going to be discussing spoilers throughout this review, so proceed with caution if you haven't seen Endgame yet.",
        reviewp2: "Marvel Studios, as I discussed in my Captain Marvel review, has one of the most impressive visual effects teams in the entire world. I learned after the film that the time travel suits were completely CGI, rather than handmade. They were very impressive, especially because the movie itself was packed with epic visual effects that couldn't possibly be real, like Captain Marvel flying through the sky. However, the suits could have been real. The fact that they weren't made the expertise of the visual effects team clear. Another component of this movie that I absolutely loved was the cinematography. One of my favorite shots in the whole movie was when the snapped characters began reappearing to fight against Thanos' army, running together as they had in Infinity War in Wakanda. The shot was massive, with hundreds of characters flooding in at once through portals. That shot alone probably had most avid Marvel fans crying, smiling, or cheering.",
        reviewp3: "I'd also like to talk about the more emotional side to Endgame. 'I love you 3000' has been a common statement of fans and cast members alike, as I'm sure you've seen on social media. This sentence refers to Tony Stark and his daughter, yet is now used by Marvel fans as a way to express their love and appreciation for Robert Downey Jr., the original Avengers cast, and the franchise itself. I think this speaks to the impact that films in general, but Marvel specifically, can have on an audience. Most people I know have seen at least one Marvel movie, and I don't know anyone that dislikes the franchise. Marvel truly has created a legacy, and Robert Downey Jr. represents the beginning. When Iron Man died, his character arc from billionaire a-hole to caring, loving, and burdened father was finally complete. Although it was devastating to see Peter lose his father figure minutes after being reunited, there was a sense of finality and peace associated with his end. The same goes for Captain America, who very similarly represents a beginning for the MCU. I think that the Russo Brothers gave the fans exactly what they needed to see for characters who had been fighting for so long. It was respectful, heartbreaking, and necessary.",
        reviewp4: "One other character arc that we will learn more about soon is Black Widow. Specifically, her history with Clint and her upbringing. The Marvel Universe creators hinted at her spy training in Age of Ultron, but as fans, we don't know all that much. To this day, I'm still interested to hear about what happened in Budapest, which Natasha mentioned in The Avengers. However, her ending was a little frustrating, as they both knew that they were going to Vormir and that Thanos killed Gamora there to obtain the Soul Stone. Yet, it was emotional all the same.",
        reviewp5: "Endgame only made me more excited for the future of the MCU and Phase 4 (SDCC is coming up on July 17-19, 2019!! ANNOUNCEMENTS!!). I hope that Thor has an epic recovery, Hulk, Captain Marvel, and Black Panther get future movies (or at least appearances in some for Hulk), and so much more. I can't wait to watch the Wanda and Vision show, the Winter Soldier and Falcon show, and the Loki show. I absolutely loved this movie and I can't wait to see what Marvel does soon (upcoming VERY soon is Spider-Man: Far From Home)."
    },
    {
        width: 420,
        height: 200,
        caption: "Captain Marvel",
        src: Marvel,
        date: "March 2019",
        reviewp1: "Okay. So anyone who knows me knows that I am a huge Marvel fan, as I've probably said before. And yes, I really did enjoy this movie also, even though it wasn't my favorite one that Marvel Studios has made. The only Marvel movie that I really didn't enjoy was Iron Man 2, and I won't get into why.",
        reviewp2: "To start, I'd like to say that the VFX artistry for this film was beautiful. I'm always impressed at the scale of effects that Marvel packs into their films, but I thought that Captain Marvel had an equal balance of not over-VFXing this movie. There were some really cool fight scenes that had awesome choreography, such as the one at the beginning between Carol and Yon-Rogg (I had to look up Jude Law's character name). The creators also included a plethora of tasteful references to the 90s that had my parents laughing more than me, but I appreciated all the same. I think that Captain Marvel had a wide audience that it was trying to capture, from children to average adults to hardcore comic book fans, and it did so successfully for those who were willing to watch with an open mind.",
        reviewp3: "However, the movie had a few flaws that made it good, but not fantastic. One aspect of this film that stood out to me was that the scriptwriters clearly attempted to throw in as many quippy comments from Carol as they could. There were times in the film where Carol was fighting aliens or having a conversation with someone, and seemingly out of nowhere, she would reply with a witty one-liner. To me, this was just distracting and annoying. It's like they were trying to make Captain Marvel serious and sarcastic at the same time, and it seemed a little off. One other problem that I had with this movie contains a spoiler, so if you haven't seen it yet you can skip to the next paragraph. In the final battle between Carol and Yon-Rogg, there was a point where one of the Skrulls got shot and I thought he had died. His family was there, as well, and I thought it was emotional while also adding real stakes to Carol's coming of age story. Yet, in a matter of minutes, the Skrull that got shot seemed to be fine. Maybe I need to rewatch that scene, but it felt like a lead-on for an emotional moment that would motivate Carol to do better and fight harder. The fact that he didn't die made the entire event feel unnecessary.",
        reviewp4: "To conclude, I really did enjoy this movie. It wasn't my absolute favorite Marvel movie ever, but it definitely didn't deserve to get slammed in the way that some people on IMDb and Rotten Tomatoes were making it seem. It's family friendly and fun, and it also has a strong, good message that I enjoyed."
    },
    {
        width: 420,
        height: 200,
        caption: "The Stanford Prison Experiment",
        src: Prison,
        date: "2018",
        reviewp1: "Meh. I don't have too much to say about this movie because it honestly wasn't one of my favorites. The events that actually took place with this experiment were terrifying and made me want to cry. However, this documentary-style movie honestly didn't strike me as the most engaging or successful way to portray the experiment. I think I would have rather watched an actual documentary.",
        reviewp2: "I say that I would rather watch a documentary for many reasons, one being that I didn't know what was real and what had been fabricated to make the film more shocking. Honestly, the scary part is that most of it was probably real. But, for some reason, it felt strange watching actors play the men who underwent so much violence and psychological damage rather than learning about the real men who suffered through it. Another reason why I didn't really like this movie has nothing to do with the filmmakers or anyone else. It was because the event itself made me feel rather ill. The fact that this took place and the scientist who designed the 'study' got no punishment made me so upset that it made me dislike the movie. I know, that's probably unfair. But still, it was one of the reasons why I am writing this review.",
        reviewp3: "So, I'd say that if you want to learn about this experiment, it would probably better if you found a documentary or YouTube video about it. This was downright disturbing. But, I guess if you like that and you're really interested, you could check this film out."
    },
    {
        width: 420,
        height: 200,
        caption: "Dumplin",
        src: Dumplin,
        date: "2018",
        reviewp1: "Oh, teen movies. So adorable. So cute. They will get me every time. Well, not every time, but a lot of the time. I don't know why movies like this always make me so happy, but they do! Netflix has been cranking films out that have relatively similar premises for the last few years, a few of which are great (To All The Boys I've Loved Before) and some of which...aren't (Sierra Burgess is A Loser, The Kissing Booth, F the Prom). I think that the common denominator of the ones that I actually enjoyed a lot is that they were based on YA novels (aside from The Kissing Booth, which was also based off of a book). I haven't read Dumplin or To All the Boys I've Loved Before, but it seems to help Netflix a bit... But anyways, moving on to Dumplin and why I enjoyed it.",
        reviewp2: "There was nothing extra spectacular about the cinematography or editing of this film, which I wouldn't have necessarily expected in this genre. Yet, something about this movie just made me want to smile. I think that it has the ability to make anyone and everyone happy with who they are, which I really enjoyed. Netflix tried to do this with Sierra Burgess is a Loser, but it fell short in many different ways. I think that the director and writers showed Willowdean's growth towards self-love and acceptance as a character in a very cheerful and sometimes goofy way, which I really appreciated.",
        reviewp3: "Some of my feelings about Dumplin also come from the casting, which was very well done. Danielle Macdonald portrayed Willowdean exceptionally well, and Jenifer Aniston fit the part of an overbearing beauty pageant mom to a T. Their acting, alongside an endearing and enjoyable storyline resulted in a borderline corny but somehow exceptional teen movie. It wasn't necessarily the most dramatic or shocking movie. In fact, it was quite the opposite. It was very predictable. But, in my eyes, it didn't really matter. I loved the message behind it and I am very glad that I spent my time watching it. Heck, I would do it again at any time. I would also recommend this movie who anyone who enjoys this genre or wants to smile!"
    },
    {
        width: 420,
        height: 200,
        caption: "Pulp Fiction",
        src: Pulp,
        date: "2018",
        reviewp1: "Uma Thurman was a name that I'd heard many times before as a pop culture reference and icon. She was referenced constantly in everything from songs to posters in random comic book stores, mostly for her interesting dance skills. I finally got to see what everyone was talking about when I sat down and watched this movie, which I genuinely could not look away from for its entirety. It was THAT engaging for me, and as the movie unfolded I felt that I was watching Tarantino put a puzzle together in real time. I mean, he is one of the most recognized directors of all time for a good reason",
        reviewp2: "I feel like I can't say that I 'love' Pulp Fiction simply because it is unlovable. That does NOT mean that I didn't truly enjoy it and would watch it again in a heartbeat. What I mean by that is that there is so much violence, so much WRONG and BAD engrained in the plot itself that I think it would be strange to say that I 'love' it in the same way that I loved other movies that I've seen. The 'incident' with Mia is a prime example.",
        reviewp3: "One scene that I found to be especially striking was at the beginning of the film when Vincent and Jules were interrogating the man who was supposed to be working for Mr. Wallace. The entire time, I felt like I knew what was going to happen. I knew that the poor guy was going to die. However, the editing made you question that fact. Despite all odds against him, the scene still had suspense. This was due in part to Jules' chilling reciting of the Bible, highlighting a powerful motif of vengeance that runs throughout the film, but also because of the looming figure of Vincent in the background. It's a textbook rule of thirds, yet is done so crisply that it is entirely effective. Vengeance finally reigns down on the man, with loud gunshots and bright orange lights flashing in the scene, in some ways reminding me of the mysterious briefcase at the end of the film.",
        reviewp4: "I could talk for hours about the briefcase, as many of other movie critics and fans have speculated and questions. But, I will end with this. Pulp Fiction is gruesome, raw, and stimulating. I wouldn't recommend this film to those who can't handle gore and other mature content, yet it is a totally epic movie with a rockstar cast that those who are able to should definitely add to their personal watchlists."
    },
    {
        width: 420,
        height: 200,
        caption: "A Star Is Born",
        src: Star,
        date: "2018",
        reviewp1: "I happened to be on a roll when it came to picking movies that would make me cry on airplanes on the particular trip that I was on. Similar to Lion, which I watched on the plane ride to my destination and you can read my review of below, I knew very little about this film. I knew that Lady Gaga was in it, WHO I LOVE, and Bradley Cooper, who I also love in his portrayal of Rocket in Guardians of the Galaxy. Unfortunately, I was under the impression that this was going to be a happy movie. I was very, very wrong.",
        reviewp2: "I hadn't expected the chemistry between Cooper and Gaga to be so powerful and convincing. Nor had I expected the storyline to be borderline fanfiction. However, I think that this was okay given the incredible acting and the way that the story was portrayed on screen. With other actors, it probably would have gotten very corny very quickly. In addition, as the movie continued it began to move away from the fanfiction realm and towards a more raw and emotional relationship between Ally and Jack. This made me virtually forget about the improbable encounter between the two main characters. Overall, the story was beautiful and gutwrenching, which I absolutely was not expecting. On the plane, I had to hold back my sobs as the movie came to an end.",
        reviewp3: "I'd also like to talk about the color red associated with symbolism in this film, which I can't do without discussing spoilers. So, if you haven't seen this movie yet and want to, please don't continue reading and skip to the last paragraph. Red was the color glaring on Ally's face as she looked at Jack while performing for the first time. Red was the color highlighting Ally as she performed 'Shallow' as Jack committed suicide. Red was the only color in Ally and Jack's house as police arrived after he had died. Red, ultimately, is a symbol that nothing could save Jack from his addiction, not even the woman that he loved the most. It represented their love, yet also that their time was limited and would burn out.",
        reviewp4: "Wow, I wrote a lot more about this movie than I thought I would. Clearly, it had an impact on me and I thought it was well done. It is a very sad story that shows the true dangers associated with drug addiction and how it can damage those around you. A Star is Born has a heartbreaking conclusion, so if you want to watch this be sure that you are prepared."
    },
    {
        width: 420,
        height: 200,
        caption: "Lion",
        src: Lion,
        date: "2018",
        reviewp1: "I knew virtually nothing about this movie when I began watching it. I was on an airplane, and I knew that it had gotten great reviews. Aside from that, I was going in with no expectations.",
        reviewp2: "I will say that this was one of the most emotional and moving films that I had seen in a long time. The story itself was beautiful, which made it that much more impactful. I think it would be very interesting to be a filmmaker that gets to make a movie based on reality, as the storyline and how to tell it has to be approached in an appropriate and interesting way. Lion successfully achieved this with their story. I found that the chemistry between Saroo and Lucy to be quite believable and I was emotionally invested very quickly. I felt that Dev Patel did an incredible job portraying his character, which is one of the major reasons as to why I cried so much on the plane ride. Not only was the acting incredible, but the cinematography was as well. *SPOILERS AHEAD, BEWARE* The way that the cinematographers and editors brought to life the process of Saroo remembering his past and his home after so long made it feel almost unbelievable; yet it actually happened in real life.",
        reviewp3: "The biggest tearjerker in this film was at the very end when, like many other movies based on reality (The Impossible, I, Tonya, etc.), they showed the real people that the story was based on. Those scenes often end up making me cry, and this movie was no exception. I appreciate the beautiful story that the filmmakers told with Lion, and I would recommend it to anyone if they are prepared with a few tissues."
    },
    {
        width: 420,
        height: 200,
        caption: "Spider-Man: Into the Spider-Verse",
        src: Spider,
        date: "2018",
        reviewp1: "Anyone who knows me knows that I am a huge Spider-Man fan, so it is no surprise that I loved this movie. There are countless reasons as to why this film is so successful on so many different fronts, from the artistry to the storyline. I know that there has been a loud chorus of applause for this film, and I figured that I would add to it in this review.",
        reviewp2: "First off, I'd like to talk about the unique animation. It is clear from the beginning that this isn't an average animated film; its style is interesting and inventive. I was watching a short clip about the animation on YouTube, and the VFX artists were discussing how they took inspiration from the Spider-Man comic artists to create the character movements in such a way that if the viewer paused the film any point, it would look like a real comic image. This idea on its own struck me as so different from other animated films. The movements aren't fluid; they jump from movement to movement which is visually striking. Honestly, it took me a few minutes to try to get used to, but the creative measures taken by the artists to make this film are beyond impressive. I could watch this movie with no sound and still find it stunning.",
        reviewp3: "The visual effects alone make this film beautiful. However, the story itself is what makes it that much better. I'm not going to spoil anything, but there were so many twists and turns that I honestly wasn't expecting. I love superhero movies because they take impossible scenarios and somehow make them relatable to viewers despite being filled with magic and imagination. I think that this film goes the extra mile on that front, making it more engaging and entertaining than many other films that I've seen (other Marvel ones included). It's one of those movies that I watch over and over and never get sick of, which is a very short list.",
        reviewp4: "So, for anyone that has a mild interest in any movie ever, I would recommend this one in a heartbeat. It is fun, family friendly, and worth a watch (or five)."
    },
    {
        width: 420,
        height: 200,
        caption: "Deadpool 2",
        src: Pool,
        date: "2018",
        reviewp1: "This movie was hilarious. And epic. To be completely honest, I hadn't even seen the first Deadpool; I thought it looked boring and explicit. Apparently, I didn't even need to watch it because I understood this movie just fine without it! And I'm glad I did because although the comedy was totally inappropriate at times, it made me laugh throughout almost the entire film.",
        reviewp2: "I really enjoyed that it didn't necessarily follow the common archetype of all action films, either. There were elements of the hero facing adversity and learning in the process, but there were also times when Deadpool simply made fun of 'coming of age' and 'recovery'. It was pretty refreshing and unique, especially because I had recently seen Avengers: Infinity War (a heartbreaker).",
        reviewp3: "The special effects were another really interesting element of this film. The creators did some really interesting visual techniques with CGI that were really cool, especially with Josh Brolin's character.",
        reviewp4: "Finally, I thought that the balance between sentiment and comedy in this film was awesome. Although I was laughing throughout pretty much the whole movie, I also cried because of sad events that took place. That speaks to the scriptwriters, as well as the actors. So, I recommend this movie for those who can handle explicit and vulgar content, but also like to laugh."
    },
    {
        width: 420,
        height: 200,
        caption: "The Lego Movie 2",
        src: Lego,
        date: "2018",
        reviewp1: "This movie was adorable!!! I've always been a sucker for the Lego Movies, I just think that they're so cute and always have an awesome message. This film was no exception, and I ended up listening to some of the playlist songs on Spotify later that night (even though my friends thought they were annoying).",
        reviewp2: "First off, I love everything about the way that the creators of these films animate. Some people may know that I'm really interested in how computer science and film overlap and interact, so I think it's one of the coolest things to get to see something that I may one day get to work on. Of course, I also think Chris Pratt is super awesome. One of the three Chrises (Chris Pratt, Chris Evans, Chris Hemsworth) AND from Washington!! And a Seahawks fan!! That has nothing to do with his acting (which is also awesome) but I also think he's just a cool guy. Anyways...",
        reviewp3: "The message behind this film was also really great, especially for its target audience. I won't give any spoilers but the idea was that you should be nice to your family, especially your siblings. In terms of movie messages, that is a pretty good one for a younger audience. So, for anyone who is a fan of Legos, good messages, lighthearted comedy, and/or Chris Pratt, check out this movie!"
    },
    {
        width: 420,
        height: 200,
        caption: "When We First Met",
        src: When,
        date: "2018",
        reviewp1: "Not only was this film completely uninspired, but it was also downright creepy and weird. I don't really see the need to save the spoilers, but if you want to watch it go ahead and stop reading here.",
        reviewp2: "I totally understand that Netflix is constantly trying to come out with new content that is unique and creative. Inevitably, some of those films will be cheesy 'chick flicks' that are fun to sit and watch with friends, although they are often times not the richest content that the cinematic world has to offer. However, this movie was like an odd combination of a chick-flick and time traveling. I was unimpressed by the plot's standard 'boy has crush on girl but girl loves someone else' framework. Yet, what I found more weird was the decision by the creators to have the main character then fall in love with the girl's best friend only AFTER he realized that he wasn't in love with the original girl AND he had many do-overs (with the time travel). This made absolutely no sense to me and made me very uncomfortable, as he was obsessed with the original girl and only realized much later that he wanted to be with the best friend. Weird.",
        reviewp3: "The acting was...fine... not terrible but not awesome either. I think that likely accompanies the overall plot of the film, which was this movie's major downfall. I wouldn't even recommend this film as a 'watch when I'm really bored film'... I just don't think it's worth the time."
    },
    {
        width: 420,
        height: 200,
        caption: "Dallas Buyers Club",
        src: Dallas,
        date: "2018",
        reviewp1: "What an incredible movie. To be completely honest, it has been a few months since I've seen this movie yet I still remember how amazing, raw, and heartwrenching it was.",
        reviewp2: "I always think that movies such as this are very important, especially when the roles are played by such well-known actors like Matthew McConaughey. Side note: it is no surprise to me that he won Best Actor at the Oscars for this role; he definitely deserved it. Anyways, films including this one tell adaptions of true stories, and they do it in such a way that it is engaging while simultaneously informative and accurate. Especially with such saddening and heavy material like the AIDS epidemic, these stories are important to hear and should be told to wide audiences",
        reviewp3: "I'd also like to note that I thought that the cinematography in this film was stunning. One particular scene that stood out was the butterfly scene when Ron looks at peace for once throughout the entire film. So, in conclusion, 100% recommend that everyone watch this film and recognize its importance to American society."
    },
    {
        width: 420,
        height: 200,
        caption: "No Country for Old Men",
        src: Country,
        date: "2018",
        reviewp1: "When it comes to intense movies, I tend to be a little bit squeamish. No Country for Old Men took my freaking-out to a whole new level. I'm not sure if it was in a good way or a bad way.",
        reviewp2: "Obviously with a movie like this the acting is going to be incredible. Javier Bardem has always had the ability to embody his characters in a way that impresses me, whether it's a dark and disturbing film like this or an emotional, heartbreaking one like Mar Adentro. Yet, even with the rockstar cast, I couldn't feel any emotional attachment to the characters. I had no desire for Josh Brolin's character (I don't even remember his name) to live 1) because I didn't believe in the relationship between him and his wife and 2) he seemed like a dry and uninspiring character in general. Maybe that was the intent that the Coen's were going for; I'm not sure. Either way, I was uninspired by their motives in the film.",
        reviewp3: "I also, throughout the entire movie, felt that there really wasn't a plot. I didn't fully understand why Bardem's character had such a need to hunt down and murder Brolin, or why he had to kill his wife in the process. Yet, while this was true, I still appreciated how throughout the entire movie I was scared that something was going to happen. This speaks to the genius of the directors and editors in building suspense from a relatively simple storyline."
    },
    {
        width: 420,
        height: 200,
        caption: "Aquaman",
        src: Aqua,
        date: "2018",
        reviewp1: "Anyone who knows me at least a little knows that I am a huge Marvel fan. Aside from Wonder Woman, DC has recently been letting me down with Dawn of Justice and Justice League. They had potential, but they just weren't the best. However, I decided to give Aquaman the benefit of the doubt because my parents said it was fun to watch and I wanted to see a movie.",
        reviewp2: "I will say I think that the casting crew did an awesome job of choosing Jason Momoa to be the next Aquaman. Not only does he fit the role, but I hadn't seen him in anything since (SPOILER!) Kahl Drogo's death in Game of Thrones. I wasn't disappointed with his character in Justice League, and DC had been hinting at his appearance in their cinematic universe for many years. So when I was watching this movie in the theaters, I actually really enjoyed it. There were some moments, though, that made me want to go to DC HQ and question who thought it was a good idea to include that.",
        reviewp3: "One of the most interesting parts of the movie for me was how the production crew made the underwater scenes. It was so unique and visually impressive, and I think it was my favorite part of the movie. Of course, Aquaman was a predictable origin story when a kingdom/crown is involved, but I would still say that it is worth the watch if you have some free time. But beware, there are some moments that I thought were laughable they were so corny."
    },
    {
        width: 420,
        height: 200,
        caption: "Birdbox",
        src: Bird,
        date: "2018",
        reviewp1: "Birdbox was a huge hit on the Netflix platform; I'm pretty sure that it was the most viewed Netflix-produced film since its creation. I, like most people, saw a ton of memes about the film and decided that it seemed like it was worth the watch. My first mistake was that I started the movie at about 11:00 PM. I've never really been a fan of horror movies, either, so I barely got ten minutes in before I decided that I was too scared.",
        reviewp2: "I tried watching again during the day, consistently having to take pauses and breaks when it got intense. There wasn't a moment in the movie where I wasn't at least a little bit on edge, and I'm not sure if I liked that very much. This is more of a personal preference, but I enjoy films where I can actually watch it all without wanting to close my eyes and hope nothing bad happens. Most avid horror fans would probably be rolling their eyes right now; Birdbox probably isn't very scary compared to the other horror movies that are out there (yes, I've seen The Exorcist so I know there are other terrifying horror movies).",
        reviewp3: "I was really impressed with Sandra Bullock's acting, and I also thought that the cinematography was very impressive. If you're a horror fan, you may enjoy this movie. But in all honesty, it didn't really live up to the hype for me and I wish that I could have enjoyed it more. I think I'm just a bit of a baby when it comes to horror movies with jump scares. I would prefer to watch a different genre in general."
    },
    {
        width: 420,
        height: 200,
        caption: "Bandersnatch",
        src: Ban,
        date: "2018",
        reviewp1: "I remember when I was younger and I would always play the Choose Your Own Adventure books. To be honest, I would have never intentionally read one myself; I was more interested in the trilogies where I followed the same characters for many installments (Harry Potter, Percy Jackson, Cinder, etc.). However, I still did enjoy them when I read them, or more commonly when someone read them to me and I chose the pathway. Bandersnatch was completely different.",
        reviewp2: "I looked on my Twitter the morning that it was released and everyone was talking about the new interactive Netflix episode. I'd never even thought it was possible. So that night, I went on my Netflix and decided to 'play.' The episode began like most of the Black Mirror episodes: confusing, disorienting, and somewhat unclear. I didn't even realize the first time that the episode had me choose something that that is what it was telling me to do. The prompts blended so seamlessly with the show itself that I never knew when the next selection that I would have to make would come. I'm not going to lie, though. The plotline was not my favorite that I've seen. I didn't really understand Stefan's main motive, he was just a kid making a game. Maybe I just didn't relate to him very much, or maybe the production crew put more effort into the creation of the various pathways than actual character development.",
        reviewp3: "In addition, when I played I ended up getting stuck in a loop that I wasn't sure how to escape. I think I just ended up exiting the episode, which is likely what other viewers had to do as well. However, that doesn't mean that I didn't have a ton of fun playing. I think that Bandersnatch has the potential to totally change how viewers interact with movies; it's almost like a new frontier. So, despite its flaws, I think that Netflix has been extremely creative in what they are showing their audience and if they continue to perfect the work that they have begun with Bandersnatch, I will be a big fan of these interactive movies in the future."
    },
    {
        width: 420,
        height: 200,
        caption: "Solo",
        src: solo,
        date: "2018",
        reviewp1: "I know that I am not the most knowledgeable Star Wars fan that ever existed, but I watched all of the films when I was younger (yes, beginning with A New Hope!) and I've gone to the theaters to see J.J. Abrams' work with the series. In all honesty, I've really enjoyed what he's done so far. I did enjoy The Force Awakens much more than The Last Jedi (which, by the way, was not directed by Abrams). I mean, Kylo Ren needs to calm down a bit and figure out his personal life before going insane. But I also know that the Star Wars fandom is quite toxic and may not agree with my opinions about this film.",
        reviewp2: "I didn't really have much interest in seeing Solo, because I did what I shouldn't have. I judged the movie based on the few trailers that I saw, and I didn't think that they did a good job of convincing me to watch the movie. I didn't believe Alden Ehrenreich's performance based on the trailer, so I just assumed that he wouldn't be a good Solo. My family and I decided to wait and purchase the movie rather than going and seeing it in theaters, and my parents watched it without me. They said that they loved it and recommended that I see it, even though I still wasn't entirely convinced. When I finally got around to it, I decided to suspend my judgment and see what it had to offer.",
        reviewp3: "I was taken aback by how much I enjoyed it. I wasn't expecting to get emotionally attached to Han and Qi'ra's relationship. In addition, I hadn't thought of Emilia Clarke in any other role aside from Daenerys Targarian (huge Game of Thrones fan also) and it was refreshing. Not to mention that I was completely wrong about Ehrenreich, he did Harrison Ford justice. Visual elements, like with all of the other new Star Wars films, are epic. In addition, I thought that this film had a few good twists and turns that I wasn't expecting.",
        reviewp4: "So, this is a great action movie that I would recommend watching (unless you're a Star Wars fan who critiques everything and can't find the good parts of any movie)."
    },
    {
        width: 420,
        height: 200,
        caption: "Mary Poppins Returns",
        src: MPR,
        date: "2018",
        reviewp1: "I'd like to preface this review by saying that I was a big Mary Poppins fan when I was younger, so much so that I knew all of the lyrics to 'A Spoonful of Sugar' and 'Super‐cali‐fragil‐istic‐expi‐ali‐docious' (Um-dittle-ittl-um-dittle-I). So, I will say that the casting to this film was absolutely perfect. I don't think that they could have picked a better actress to play Julie Andrews' iconic character aside from Emily Blunt; not only does she look the part but she also embodies Mary Poppins perfectly. In addition, it did have many of the elements that I love most about the original movie, from dancing to catchy music to a magical plotline",
        reviewp2: "There were portions in the film that I thought were really impressive visually, such as when the children and Ms. Poppins went 'into' fine China and when they explored the underwater world. However, there were parts of this movie that even the visual elements could not redeem. I think my biggest issue with the movie itself was that I didn't believe the story to begin with. I feel like I've seen this plotline of a struggling family so many times that I already knew what was going to happen. The Greatest Showman, Fantastic Beasts and Where to Find Them (not to say I don't like this movie, on the contrary, but it did have the same idea of Mr. Kowalski's lack of money), and It's A Wonderful Life, to name a few. And I think that this movie brought nothing memorable to the table, aside from Mary Poppins' painted, exquisite costumes and (SPOILER!) Dick Van Dyke's dancing towards the end.",
        reviewp3: "It is a family-friendly movie that I appreciate and think it is worth the watch if you have some free time. However, I would say its more of a one-night rental than a purchase."
    },
    {
        width: 420,
        height: 200,
        caption: "The Imitation Game",
        src: IG,
        date: "2018",
        reviewp1: "I don't have that much to say about this movie, simply because it was so well written that I don't want to ruin or spoil anything for anyone that hasn't yet seen it. But wow. This is one of the best films based on a true story that I've seen in a while.",
        reviewp2: "I've been a big fan of Benedict Cumberbatch ever since I started watching Sherlock (the BBC version, although I also enjoyed the RDJ films) and couldn't stop. I couldn't have been any more excited when I learned that he would be playing Doctor Strange, meaning that he would play a vital role in many of the MCU movies for at least eight years. However, in this movie, I think that audiences saw a more vulnerable, emotional side to Cumberbatch's acting talents. Yes, there were elements that were closely related to Dr. Strange: the arrogant doctor, smart beyond belief, etc., but towards the end of the film that all began to disappear (no spoilers, though).",
        reviewp3: "In addition, I think that one of the reasons why I liked this movie so much was because it didn't feel like a boring historical documentary to me. It felt compelling; like it was worth watching 1. because I didn't know the history behind the Turing Machine and 2. I had no idea what the end result was going to be. That isn't to say that you shouldn't watch historically based films because you do know the history behind them. However, it was one of the reasons why I couldn't take my eyes off of the screen.",
        reviewp4: "So, I guess I had more to say about this film than I thought that I did. But if you're in the mood for an emotional, raw, and important movie, I completely recommend Imitation Game."
    },
    {
        width: 420,
        height: 200,
        caption: "The Thinning",
        src: TheTh,
        date: "2018",
        reviewp1: "I'll begin this review by saying that I was really just looking for a cheap movie that I could laugh about when I rented this. I knew that it was going to be absolutely terrible from the beginning, but that isn't to say that it was completely boring. I had seen PLENTY of YouTube advertisements before the videos that I actually wanted to watch about The Thinning, and it looked awful. However, my friends and I figured that it could be funny to laugh about how bad it was, so we rented it for the night. If you don't want to read spoilers, please stop reading here because I figured that this movie isn't worth keeping a secret.",
        reviewp2: "Like every teen post-apocalyptic movie, the youth were at risk of death by their superiors. And, of course, one of the main characters had a father who was involved in the maintenance of the program that puts the kids at risk. And the son lost his lover to said system. And, the heroine and the son team up to fight the system and overcome their near-death journey, ending in a plot twist at that perfectly sets up a sequel so that a corporation can possibly make more money. Of course, they also set up a love triangle. Huh. Sound familiar? Divergent? The Hunger Games? The Darkest Minds? Just about any teen post-apocalyptic movie? This is like one of those, but a worse version.",
        reviewp3: "So, this has me wondering why I watched it in the first place. I sat through the whole thing. I think it was because, even though I knew what was going to happen, I watched it anyways. It honestly was pretty funny to watch it, so if you want a corny movie that would be funny to watch with your friends, you should check out The Thinning!"
    },
    {
        width: 420,
        height: 200,
        caption: "Good Will Hunting",
        src: Good,
        date: "2018",
        reviewp1: "I had seen snippets of this movie from various videos on the internet, yet I didn't really know what to expect when I started watching. I had no concept of what the plot was going to be, only that Robin Williams was in it and he is one of my favorite childhood actors (thanks, Ms. Doubtfire). When it finally came out on Netflix (or when I finally noticed that it was there) I decided that I should probably watch it, simply because it seemed like such a good movie.",
        reviewp2: "I'd like to make it clear that this is one of the best movies that I've seen in a very long time. It was one of those films that you wish could have been longer, if only by five minutes, just to know what happened next. However, it was also annoyingly emotional. All that I recognized Matt Damon for were his more recent films; The Bourne Trilogy, The Martian, Elysium. This was a different Damon than I've ever seen before. His acting was raw, and frankly, heartwrenching.",
        reviewp3: "I don't want to say too much about this movie because I don't want anyone to have any preconceptions going in, which is what happened to me. I think that is part of what this movie so moving and pure. Something about its simplicity of the plot made the complexities of Will's emotions that much stronger. This is then reflected in the relationship that he shares with Sean. The words that I will remember most from this movie are 'it's not your fault', the emotional climax of the entire film.",
        reviewp4: "For anyone who is looking for a GOOD movie, I completely recommend Good Will Hunting."
    },
    {
        width: 420,
        height: 200,
        caption: "How to Lose a Guy in 10 Days",
        src: Ten,
        date: "2018",
        reviewp1: "When I think of romantic comedies, I either think of a Netflix Movies or I think of films like this. Happy, cheesy, predictable. Corny, funny, enjoyable. It is definitely worth the watch as long as you are prepared for a predictable film.",
        reviewp2: "In all honesty, I wasn't expecting much from this movie. The characters were somewhat one-dimensional, from Andie's attempts to impress her boss and Ben's patriarchal pursuit in an attempt to prove that he can get any girl. My feminist side was upset that Ben felt the only way to prove his masculinity was through potentially hurting a girl who could have genuinely cared for him, no matter if he had feelings for her or not. However, Andie's intentions were not much better. And also, the plot is completely impossible. There is no chance that Andie and Ben, both with exterior motives, would meet, hit off their relationship, and have a ten-day expiration date. It just isn't possible.",
        reviewp3: "Despite the impossibility of the film and its frustrating conclusion, I still felt that it had qualities that were admirable. One of my favorite parts of the film was when Andie went to Ben's house and played the card game Bullshit, simply because my family plays the exact same game. I could relate to that.",
        reviewp4: "The comedy and acting from Matthew McConaughey and Kate Hudson convinced me that the movie was worth watching."
    },
    {
        width: 420,
        height: 200,
        caption: "Christopher Robin",
        src: Pooh,
        date: "2018",
        reviewp1: "I knew walking into the theater for this movie that I was going to be emotional. Winnie the Pooh played a huge role in my childhood; I remember running around my house singing the Heffalump and Woozles song and crying when Tigger found out that his family didn’t actually exist. The Winnie the Pooh ride was also one of my favorites at Disneyland when I was five. So yeah, there are a lot of emotional ties to this movie for me. However, I wasn’t expecting to cry in the first five minutes. Disney has a way of making me cry no matter what.",
        reviewp2: "I'd first like to talk about how most of the Winnie the Pooh character life-like animations were spot on. However, it did make me sad that Kanga, Roo, Rabbit, and Owl all received only minimal screen time. I felt that the plotline was fairly strong: Christopher grows up, forgets his friends from when he was young, disappoints his family, etc. However, I wish that they had developed his relationship with his daughter more before showing what a let down he was by prioritizing work. I didn't feel a connection to the daughter in the way that I felt the connection between Pooh and Christopher.",
        reviewp3: "However, as always with Ewan McGregor, the acting was strong. He has a way of captivating his audience, whether it is as a father trying to save his family in The Impossible or as Obi-Wan Kenobi in Star Wars. This movie did not disappoint.",
        reviewp4: "Overall, I felt that this movie had a strong message about family and the most important people in life. Despite Christopher Robin's small flaws, it was a feel-good film that is perfect for families and friends alike."
    },
    {
        width: 420,
        height: 200,
        caption: "Amélie",
        src: Am,
        date: "2018",
        reviewp1: "Quirky, simple, kind, and lovely, Amélie is definitely a movie I want to watch again. This film was released in 2001 and received smashing successes from both IMDb and Rotten Tomatoes. I finally had the opportunity to watch it when I realized that it was on Netflix because it (annoyingly) wasn't on my recommended list. I didn't know much about it, but I had been considering it as a film for my IB Extended Essay for quite some time. Color is one of my favorite parts of film, and I knew when starting the movie that there would be no lack of cinematography and color beauty. As I started watching, I felt an odd similarity between the style of direction by Jean-Pierre Jeunet and Baz Luhrmann's Romeo and Juliet. Something about the energy, editing, and characterization (oh and, of course, color) reminded me of the complex chaos of the twist on Shakespeare's classic with a much more calm and simple tone.",
        reviewp2: "Now I'd like to talk about my thoughts on the film. I would need to watch Amélie at least 5 more times to be able to catch a fair amount of metaphors and mis-en-scene that I love to find, but it was so refreshing to watch such an intricate film with a sweet, painless conclusion that didn't feel diluted or cheesy. What struck me the most was that there were so many characters whose names I didn't even know, but I was able to connect to something visual, like the Cigarette Lady or the Mean Store Man. It makes me wonder what exactly Jeunet was thinking throughout the filmmaking process and why each character was designed the way that they were. Such detail and precision is something that I think can sometimes get lost in mainstream Hollywood films today, so I have a deep appreciation for Amélie and all of its beauty."
    },
    {
        width: 420,
        height: 200,
        caption: "Ex Machina",
        src: Ex,
        date: "2018",
        reviewp1: "OKAY. WOW. So I didn't have too many expectations with this movie, I just saw it on my recommendations list on Netflix. I then asked my Dad if he had watched it, to which he responded with an unequivocal YES! and explained how he really enjoyed its complexity. After that, I figured it would be worth viewing. From the beginning, I noticed how beautiful and intricate the cinematography was. I am always willing to watch science fiction, but science fiction PLUS exquisite set design and detailed mis-en-scene? That is something special.",
        reviewp2: "I am no genius when it comes to Artificial Intelligence, not even close, but I always find it really interesting when movies conceptualize what the possible future of the field is. Ava was no exception. Her acting, her appearance, everything about it felt absolutely real, even though she wasn't. The film really got me thinking about what it would be like if robots and technology were able to achieve true AI. Another thing that I found interesting was the use of music employed throughout the movie. Slightly eerie, slightly mechanical, it always lied ominously in the background of scenes, which frankly made me very uneasy. However, nothing could compare to the rattling and stunning conclusion after an hour of progressive buildup and tense foreshadowing. So, to anyone who has an interest in mind-blowing films, I would definitely recommend this one."
    },
    {
        width: 420,
        height: 200,
        caption: "The Darkest Minds",
        src: TheDM,
        date: "2018",
        reviewp1: "In all honesty, I thought that I was going to hate this movie. I was expecting another post-apocalypse snoozefest with cheesy romance and subpar acting, resulting in another just-successful-enough series that can syphon enough money to create two more installments. So why did I end up not hating it, let alone finding that I enjoyed it and I look forward to the sequel? I don't think I've been so confused walking out of a theater in a very long time...",
        reviewp2: "So the movie started off pretty much like any other in its genre; very Divergent, Hunger Games, Maze Runner-esque. However, The Darkest Minds felt slightly different as the action started to pick up and Ruby meets her inevitable love interest, Liam. They of course added cheesy romantic tension and development, awkward one liners, and teens who choose to go to the dumbest place possible in a world where older adults want to kill them: the mall. As I was watching this movie I was still questioning: why do I like this at all? I realized the answer to my question as the film came to a conclusion. That answer was Amanda Stenberg and Harris Dickinson. I know nothing about their relationship as actors, however what made the movie so enjoyable for me was getting to see the relationship that they created as it blossomed on screen. I guess my reaction to the film is a testament to my hopeless romantic side (who doesn't like a Nicholas Sparks novel every once and a while?). However, I don't think that this movie is worth only a 5.5 on IMDb and was unnecessarily attacked by film critics who don't recognize who the film was intended for. Who would have thought that an adaption of a novel for young adults would get panned by film critics who are generally in the forty plus age range? Shocker...",
        reviewp3: "Maybe I'm slightly bitter that this film didn't get better reviews, yet I was walking in expecting it would be terrible simply because I saw the splat on Rotten Tomatoes. I guess I should ignore the reviews more often, I may see some other hidden (and slightly cliche) gems."
    },
    {
        width: 420,
        height: 200,
        caption: 'The Incredibles 2',
        src: Incredibles2,
        date: "2018",
        reviewp1: "In the long awaited sequel to the animated hit The Incredibles, Disney and Pixar again prove that an extended amount of time for a film, even fourteen years, is worth it. Although slightly predictable, The Incredibles 2 reminds viewers of the importance of family and unity in an extraordinary setting, even in a family of superheroes. Brad Bird, the director of The Incredibles and The Incredibles 2 had hinted at the long-desired sequel for many years, finally releasing a formal announcement in 2014. After four years, jittery adults (and children) ran into theaters with their popcorn in hand. When watching the film, it becomes clear that the idea of the superhero is challenged. This lies in the established plot regarding the strong female lead (who is also a rock star mother) and a loving family having to face adversity separately.",
        reviewp2: "By the time the film was in production, superheroes were dominating the big screen, smashing box office records left and right. Even more interesting is the purchase of Marvel Entertainment by Disney in 2009, landing in between the release of The Incredibles and The Incredibles 2 . Despite the basic superhero model in many films released by the MCU, and for that matter, Warner Bros., The Incredibles 2 is able to differentiate itself from the archetype not only because of animation but because of underlying messages and themes. The strength of The Incredibles 2 does not lie in its quippy action sequences and hero vs. villain plotline, but the interaction and relationship of the Parr family. Mr. Incredible clearly struggles when trying to understand Violet's boy-situation, in many instances doing every possible wrong action. However, even with family struggle, the film ends on a loving note that the Parr family will never be broken, even with evil villians attempting to break them apart. This message results in the film's success and my personal appreciation. I'm happy to share that as I walked out of the theater I couldn't help but feel a bit of nostalgia from a movie that was just about Incredible."
    }
]

const Reviews = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState(0);


    function openModal(index) {
        setIsOpen(true);
        setCurrentImage(index)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "rgb(155, 219, 200)", paddingTop: "70px", paddingBottom: "50px", marginBottom: "40px" }}>
                <h1>Movie Reviews</h1>
            </div>
            <Container style={{ marginBottom: "10px"}}>
                <div>
                    <Modal
                        scrollable={true}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        closeTimeoutMS={1000}
                    >
                        <Container style={{backgroundColor: "rgb(155, 219, 200)", paddingTop: "10px"}}>
                            <h1>{filmDetails[currentImage].caption}</h1>
                            <h3 >Date: {filmDetails[currentImage].date}</h3>
                        </Container>
                        {filmDetails[currentImage].rating ? 
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <ReactStars
                                    value={filmDetails[currentImage].rating}
                                    isHalf={true}
                                    size={50}
                                    edit={false}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                />
                        </div>
                        :
                        <div>
                            <p>{filmDetails[currentImage].reviewp1}</p>
                            <p>{filmDetails[currentImage].reviewp2}</p>
                            <p>{filmDetails[currentImage].reviewp3}</p>
                            <p>{filmDetails[currentImage].reviewp4}</p>
                            <p>{filmDetails[currentImage].reviewp5}</p>
                        </div>
                        }
                        <p>{filmDetails[currentImage].reviewp1}</p>
                        <p>{filmDetails[currentImage].reviewp2}</p>
                        <p>{filmDetails[currentImage].reviewp3}</p>
                        <p>{filmDetails[currentImage].reviewp4}</p>
                        <p>{filmDetails[currentImage].reviewp5}</p>
                    <Button style={{float: 'right'}} variant="outline-info" onClick={closeModal}>X</Button>
                    </Modal>
                </div>
            <Gallery images={filmDetails}
                backdropClosesModal={true}
                enableImageSelection={false}
                enableLightbox={true}
                onClick={openModal}
            />
            </Container>
            <Footer />
        </div>
    );
}

export default Reviews;