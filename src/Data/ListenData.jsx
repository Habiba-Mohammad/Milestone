import cat from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/cat.wav"
import dog from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/dog.wav"
import cow from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/cow.wav"
import sheep from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/cardinal-37075.mp3"
import elephant from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/elephant.mp3"
import owl from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/owl.mp3"
import crow from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/crow1-5986.mp3"
import duck from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/duck.mp3"
import rooster from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/rooster-cry-173621.mp3"
import horse from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/horse-123780.mp3"
import lion from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/lion.wav"
import monkey from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/monkey.wav"
import frog from "../ListenMainpage/srclistenTOme/AudioSounds/AnimalSounds/frog.mp3"
/////////////////
import MaincarImage from "../images/AnimalsImages/plane-112_256.gif"
import MainanimalImage from "../images/AnimalsImages/monkey-7751_256.gif"
//////////////////
import dogImage from "../images/AnimalsImages/dog.jpg"
import cattImage from "../images/AnimalsImages/cattt.jpg"
import sheepImage from "../images/AnimalsImages/sheep.jpg"
import cowImage from "../images/AnimalsImages/cow.jpg"
import owlImage from "../images/AnimalsImages/owl.jpg"
import crowImage from "../images/AnimalsImages/crow.jpg"
import duckImage from "../images/AnimalsImages/Duck.jpg"
import roosterImage from "../images/AnimalsImages/Rosster.jpg"
import lionImage from "../images/AnimalsImages/lion (1).jpg"
import monkeyImage from "../images/AnimalsImages/monkey.jpg"
import frogImage from "../images/AnimalsImages/frog.jpg"
import dMan from "../images/AnimalsImages/3d-man.png"
import horseImage from "../images/AnimalsImages/horse.jpg"
import FarmAnimals from "../images/AnimalsImages/farmAnimals.png"
import elephantImage from "../images/AnimalsImages/elephant.jpg"
//transport data
import bike from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/bike-bell-100665.mp3"
import boat from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/boat.mp3"
import rocket from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/rocket.mp3"
import train from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/train-and-train-coming-signal-106407.mp3"
import truck from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/truck-horn-96668.mp3"
import ambulance from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/ambulance.mp3"
import car from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/car-horn-155026.mp3"
import police from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/police.mp3"
import motorCycle from "../ListenMainpage/srclistenTOme/AudioSounds/transportSounds/police.mp3"
//objectsAidio 
import knockingDoor from "../ListenMainpage/srclistenTOme/AudioSounds/objectsSounds/knocking.wav"
import Keys from "../ListenMainpage/srclistenTOme/AudioSounds/objectsSounds/Keys.wav"
import Bell from "../ListenMainpage/srclistenTOme/AudioSounds/objectsSounds/door-bell-sound-99933.mp3"
//objectsImages
import KnockImage from "../images/ObjectsImages/KnockImage.jpg"
import KeyImage from "../images/ObjectsImages/KeyImage.png"
import BellImage from "../images/ObjectsImages/doorbell.jpg"

//transportationsImages
import carImage from "../images/transportationsImages/car.jpg"
import boatImage from "../images/transportationsImages/ship.jpg"
import rocketImage from "../images/transportationsImages/rocket.jpg"
import trainImage from "../images/transportationsImages/train.jpg"
import truckImage from "../images/transportationsImages/truck.jpg"
import policeImage from "../images/transportationsImages/police.jpg"
import ambulanceImage from "../images/transportationsImages/ambulance (1).jpg"
import motorCycleImage from "../images/transportationsImages/pexels-pixabay-163789.jpg"
import bikeImage from "../images/transportationsImages/bike.jpg"

//street Images
import streetImage from "../images/AnimalsImages/street.jpg"
export const MainPageData=[{
    title:"حيوانات ",
    name:"أصوات الحيوانات ",
    image:MainanimalImage,
    Game: "هيا بنا نلعب ",
    link:'/audio'


    
},
{
    title:"المنزل ",
    name:"  أصوات داخل المنزل ",
    image:KeyImage,
    Game:'هيا بنا نلعب ',
    link:'/ObjectAudio'
    
},
{
    title:"الشارع",
    image:streetImage, 
    name:  "أصوات خارج المنزل "
},
{
    title:"مواصلات ",
    image:MaincarImage,
    name:"أصوات المواصلات ",
    Game:'هيا بنا نلعب ',
    link:'/Transport'
    
} 
,{
    title:"الألعاب",
    image:carImage,
    name:"أصوات الألعاب",
    Game:'هيا بنا نلعب ',
    link:'/Transport'
    
},
{
    title:"انتقال الصوت ",
    image:carImage,
    name:"انتقال الصوت ",
    Game:'',
    link:'/Transport'
    
}
]
export const Data= [
    {id: 1,
name:"قطة ",
image:cattImage,
sound:cat,
},
{id:2,
name:"كلب ",
image:dogImage,
sound:dog,
},
{id:3,
 name:"بقرة",
 image:cowImage,
 sound:cow,
 },
{id:4,
 name: "خروف",
 image:sheepImage,
 sound:sheep,
 },
 
 {id:7,
  name:'بطة',
  image:duckImage,
  sound:duck,
     },
     
   {id:9,
    name:'ديك',
    image:roosterImage,
    sound:rooster,
    },
    {id:10,
        name:'حصان',
        image:horseImage,
        sound:horse,
        },
  {id:5,
      name:'فيل',
      image:elephantImage,
      sound:elephant,
      },

  
        {id:11,
            name:'قرد',
            image:monkeyImage,
            sound:monkey,
            },
            {id:12,
                name:'أسد',
                image:lionImage,
                sound:lion,
                },
                {id:6,
                    name:"بومة ",
                    image:owlImage,
                    sound:owl,
                        },
                    {id:8,
                    name:'غراب ',
                    image:crowImage,
                    sound:crow,
                        },
                {id:13,
                    name: "ضفدع",
                    image:frogImage,
                    sound:frog,
                    },
            //                     {id:,
            //                         name:,
            //                         image:,
            //                         sound:"",
            //                         },
            //                         {id:,
            //                             name:,
            //                             image:,
            //                             sound:"",
            //                             },
]
export const objectData=
[
    {id:1,
    name: 'الطرق على الباب',
    image:KnockImage,
 sound:knockingDoor,
        },
      {  
    id:2,
    name:"مفاتيح ",
    image:KeyImage,
    sound:Keys}
    , {
    id:3,
    name:"جرس ",
    image:BellImage,
    sound:Bell,}
    
    ]
    export const transportData=
    [
        {id:1,
        name: 'سيارة',
        image:carImage,
     sound:car,
            },
          {  
        id:2,
        name:"سيارة إسعاف",
        image:ambulanceImage,
        sound:ambulance},
        {   id:3,
            name:"سيارة شرطة",
            image:policeImage,
            sound:police},    
 { id:4,
     name:"دراجة نارية ",
     image:motorCycleImage,
     sound:motorCycle},
     { id:5,
        name:"قطار ",
        image:trainImage,
        sound:train},
        { id:6,
            name:"سيارة نقل ",
            image:truckImage,
            sound:truck},
            { id:7,
                name:"صاروخ",
                image:rocketImage,
                sound:rocket},
                { id:8,
                    name:"دراجة",
                    image:bikeImage,
                    sound:bike},
                    {   id:9,
                        name:"سفينة",
                        image:boatImage,
                        sound:boat},
        ]
 

export const selectGame=[{
    voice:dog,
    answers:{
        1:dogImage,
        2:cattImage,
        3:elephantImage
    },
    correct:dogImage

},
{
voice:cat,
answers:{
    2:cattImage,
    1:owlImage,
    3:duckImage
},
correct:cattImage

},
{
    voice:duck,
    answers:{
        2:owlImage,
        1:sheepImage,
        3:duckImage
    },
    correct:duckImage
    
    },
    {
        voice:rooster,
        answers:{
            1:elephantImage,
            2:roosterImage,
            3:owlImage
        },
        correct:roosterImage
        
        }
        ,
        {
            voice: sheep,
            answers:{
                1:cattImage,
                2:cowImage,
                3:sheepImage
            },
            correct:sheepImage
            },
            {
                voice: cow,
                answers:{
                    1:cowImage,
                    2:elephantImage,
                    3:crowImage
                },
                correct:cowImage
                }
    
    ]
    export const selectGameT=[{
        voice:car,
        answers:{
            1:ambulanceImage,
            2:carImage,
            3:policeImage
        },
        correct:carImage
    
    },
    {
         voice:motorCycle,
        answers:{
            1:rocketImage,
            2:carImage,
            3:motorCycleImage
        },
        correct:motorCycleImage
        },{
    voice:ambulance,
    answers:{
        2:carImage,
        1:truckImage,
        3:ambulanceImage
    },
    correct:ambulanceImage
    
    },
    {
        voice:boat,
        answers:{
            2:boatImage,
            1:rocketImage,
            3:ambulance
        },
        correct:boatImage
        
        },
        {
            voice:rocket,
            answers:{
                1:trainImage,
                2:rocketImage,
                3:boatImage
            },
            correct:rocketImage
            
            }
            ,
            {
                voice: train,
                answers:{
                    1:policeImage,
                    2:carImage,
                    3:trainImage
                },
                correct:trainImage
                }



                
        
        ]