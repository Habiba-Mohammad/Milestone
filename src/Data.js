import cat from "../audio/cat.wav"
import dog from "../audio/dog.wav"
import cow from "../audio/cow.wav"
import sheep from "../audio/goat.wav"
import elephant from "../audio/elephant.mp3"
import owl from "../audio/owl.mp3"
import crow from "../audio/crow1-5986.mp3"
import duck from "../audio/duck.mp3"
import rooster from "../audio/rooster-cry-173621.mp3"
import horse from "../audio/horse-123780.mp3"
import lion from "../audio/lion.wav"
import monkey from "../audio/monkey.wav"
import frog from "../audio/frog.mp3"
/////////////////
import MaincarImage from "../images/plane-112_256.gif"
import MainanimalImage from "../images/cowBack.gif"
//////////////////
import dogImage from "../images/dog.jpg"
import cattImage from "../images/cattt.jpg"
import sheepImage from "../images/sheep.jpg"
import cowImage from "../images/cow.jpg"
import owlImage from "../images/owl.jpg"
import crowImage from "../images/crow.jpg"
import duckImage from "../images/Duck.jpg"
import roosterImage from "../images/Rosster.jpg"
import lionImage from "../images/lion (1).jpg"
import monkeyImage from "../images/monkey.jpg"
import frogImage from "../images/frog.jpg"
import dMan from "../images/3d-man.png"
import horseImage from "../images/horse.jpg"
import FarmAnimals from "../images/farmAnimals.png"
import elephantImage from "../images/elephant.jpg"
//transport data
import bike from "../audio/transportSounds/bike-bell-100665.mp3"
import boat from "../audio/transportSounds/boat.mp3"
import rocket from "../audio/transportSounds/rocket.mp3"
import train from "../audio/transportSounds/train-and-train-coming-signal-106407.mp3"
import truck from "../audio/transportSounds/truck-horn-96668.mp3"
import ambulance from "../audio/transportSounds/ambulance.mp3"
import car from "../audio/transportSounds/car-horn-155026.mp3"
import police from "../audio/transportSounds/police.mp3"
import motorCycle from "../audio/transportSounds/passing-motorcycle-99323.mp3"
//objectsAidio 
import knockingDoor from "../audio/objectsSounds/knocking.wav"
import Keys from "../audio/objectsSounds/Keys.wav"
import Bell from "../audio/objectsSounds/door-bell-sound-99933.mp3"
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
import streetImage from "../images/street.jpg"
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