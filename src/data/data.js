import about from '../assets/images/about.jpg';
import market from '../assets/images/market.jpg';
import projekt from '../assets/images/projekt.jpg';
import job from '../assets/images/job.jpg';
import together from '../assets/images/together.jpg';
import { profilePictures, teamImage } from '../carouselBannerImage';


export const navbarData =[
    {
        id:1,
        name:"Home",
        link:"/"

    },
    {
        id:2,
        name:"Über-uns",
        link:"/uber-uns"

    },
    {
        id:3,
        name:"Wir für sie",
        link:"/wir-fur-sie"

    },
    {
        id:4,
        name:"Projekte",
        link:"/projekte"

    },
    {
        id:5,
        name:"Jobangebote",
        link:"/job-angebote"

    },
    {
        id:6,
        name:"Kontakt",
        link:"/kontakt"

    }
]



export const sliderData =[
    {
        id:1,
        image:market,
        text:"Herzlich willkommen bei dem Centrum für Qualifizierung im Ammerland",
        subText:"Ihrem kompetenten Bildungsträger!      Das Centrum für Integration und Bildung e.V, ist ein nach AZAV zertifizierter Bildungsträger",
        readLink:"uber-uns"
    },
    {
        id:2,
        image:about,
        text:"Profitieren Sie von unserer Kompetenz",
        subText:"Hierbei unterstützen wir Sie konsequent und gewissenhaft und Konzeptionell unterstützen wir Sie bei der ",
        readLink:"wir-fur-sie"
    },
    {
        id:3,
        image:together,
        text:"Werkakademie Work First",
        subText:"Erwerbslose Menschen durch gezielte, intensive Unterstützung schnell in Arbeit oder Ausbildung bringen",
        readLink:"projekte"
    },
    {
        id:4,
        image:projekt,
        text:"Maßnahmen zur Heranführung an den Ausbildungs- und Arbeitsmarkt",
        subText:"Erwerbslose Menschen durch gezielte, intensive Unterstützung schnell in Arbeit oder Ausbildung bringen",
        readLink:"projekte"
    },
    {
        id:5,
        image:job,
        text:"Werden Sie Teil unseres Teams!",
        subText:"Wir bieten Ihnen interessante und vielfältige Aufgaben mit individuellen Gestaltungsspielräumen.",
        readLink:"job-angebote"
    },

]


export const testimonialData =[
    {
        id:1,
        image: profilePictures.profileSix,
        name:"Arnold marchand",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        city:"Oldenburg, Oldb"
    },
    {
        id:2,
        image:profilePictures.profileTwo,
        name:"Francoise leBlue",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        city:"Wilhemshaven"
    },
    {
        id:3,
        image:profilePictures.profileFour,
        name:"Christine fardo",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        city:"Oldenburg, Oldb"
    },
    {
        id:4,
        image:profilePictures.profileFive,
        name:"Richard le noir",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        city:"Oldenburg, Oldb"
    },
    {
        id:5,
        image:profilePictures.profileOne,
        name:"Gaston die neu",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        city:"Oldenburg, Oldb"
    },

]


export const teamData =[
    {
        id:1,
        image:profilePictures.profileOne,
        name:"PAUL WALKER",
        position:"Chief Executive Officer",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
        readLink:"/",
        icon: [{id:1,
            image: teamImage.facebook,
            teamLink:"http://www.facebook.com"
            }, 
            {id:2, image:teamImage.whatsapp,
                teamLink:"http://www.whatsapp.com"
            
            
            
            }, {id:3, image:teamImage.linkedin,
            
                teamLinks:"https://www.linkedin.com"
        }]
    },
    {
        id:2,
        image:profilePictures.profileFive,
        name:"JEANETTE KINGSTON",
        position:"Vice President",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
        readLink:"/",
        icon: [{id:1,
            image: teamImage.facebook,
            teamLink:"http://www.facebook.com"
            }, 
            {id:2, image:teamImage.whatsapp,
                teamLink:"http://www.whatsapp.com"
            
            
            
            }, {id:3, image:teamImage.linkedin,
            
                teamLinks:"https://www.linkedin.com"
        }]
    },
    {
        id:3,
        image:profilePictures.profileTwo,
        name:"JOHN SMITHY",
        position:"Social assistent",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
        readLink:"/",
        icon: [{id:1,
            image: teamImage.facebook,
            teamLink:"http://www.facebook.com"
            }, 
            {id:2, image:teamImage.whatsapp,
                teamLink:"http://www.whatsapp.com"
            
            
            
            }, {id:3, image:teamImage.linkedin,
            
                teamLinks:"https://www.linkedin.com"
        }]
    },
    {
        id:4,
        image:profilePictures.profileFour,
        name:"LINDA KLOE",
        position:"Social assistent",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
        readLink:"/",
        icon: [{id:1,
            image: teamImage.facebook,
            teamLink:"http://www.facebook.com"
            }, 
            {id:2, image:teamImage.whatsapp,
                teamLink:"http://www.whatsapp.com"
            
            
            
            }, {id:3, image:teamImage.linkedin,
            
                teamLinks:"https://www.linkedin.com"
        }]
    },
    {
        id:5,
        image:profilePictures.profileThree,
        name:"RICARDO GOMEZ",
        position:"Chief Technology Officer",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
        readLink:"/",
        icon: [{id:1,
            image: teamImage.facebook,
            teamLink:"http://www.facebook.com"
            }, 
            {id:2, image:teamImage.whatsapp,
                teamLink:"http://www.whatsapp.com"
            
            
            
            }, {id:3, image:teamImage.linkedin,
            
                teamLinks:"https://www.linkedin.com"
        }]
    },
    {
        id:6,
        image:profilePictures.profileSix,
        name:"JAMES SMITH",
        position:"HR Manager",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
        readLink:"/",
        icon: [{id:1,
            image: teamImage.facebook,
            teamLink:"http://www.facebook.com"
            }, 
            {id:2, image:teamImage.whatsapp,
                teamLink:"http://www.whatsapp.com"
            
            
            
            }, {id:3, image:teamImage.linkedin,
            
                teamLinks:"https://www.linkedin.com"
        }]
    },

]
