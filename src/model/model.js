import _ from "lodash";

export const LANGUAGE = {
  ENGLISH: "english",
  HEBREW: "hebrew",
  ARABIC: "arabic",
  GERMAN: "german",
};

export const posts = [
  {
    filename: "1.jpg",
    title: "Who is the villain? #23shager",
    tags: [
      "WarCrimes",
      "TheWestIsNext",
      "HamasisISIS",
      "Propagaza",
      "shieldren",
    ],
    category: "Popular"
  },
  {
    filename: "2.jpg",
    title: "Same Jihadist terror, different years.#23shager Credit: @EllaTravelsLove",
    tags: [
      "tError",
      "HamasisISIS",
      "TheWestIsNext",
      "CeasefireNOW",
      "Propagaza",
       "ellakenan",
      
    ],
    category: "Cultural and Religious Insights"
  },
  {
    filename: "3.jpg",
    title: "True shared values and who aims to disrupt them. #23shager",
    description:
      "People tear down the American flag, In pro-Israeli protests they raise the American flag high.",
    tags: [
      "Westurn",
      "Woke",
      "ProPalestineRally",
      "StandWithIsrael",
      "CeasefireNOW",
    ],
    category: "Cultural and Religious Insights"
  },
  {
    filename: "4.jpg",
    title: "This is not human. Right(s)?. #23shager",
    tags: ["HumanRights", "shieldren", "WarCrimes", "HamasisISIS", "Woke"],
    category:"Human Rights"
  },
  {
    filename: "5.jpg",
    title:
      "*After all hostages—men, women, and children—are immediately released and safely return to Israel. #23shager",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "CeasefireNOW",
      "StandWithIsrael",
      "shieldren",
      "ellakenan",
    ],
    category: "Influencers"
  },
  {
    filename: "6.jpg",
    title: "Is this your strategic shielding? #23shager",
    tags: ["shieldren", "WarCrimes", "HamasisISIS", "HumanRights", "Propagaza"],
    category: "Terrorism and Security"
  },
  {
    filename: "7.jpg",
    title: "How to avoid #Propagaza? #23shager Credit: @Kerenaz",
    tags: ["Propagaza", "Woke", "MediaBias", "TheWestIsNext", "CeasefireNOW", "KerenAzaria"],
    category: "Media and Public Perception"
  },
  {
    filename: "8.jpg",
    title:
      "Operational headquarters, weapons and technological equipment in the #MRI building at #ShifaHospital. #23shager",
    tags: [
      "ShifaTerrorHQ",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
      "TheWestIsNext",
      "IDF spokesperson"
    ],
    category: "Terrorism and Security"
  },
  {
    filename: "9.jpg",
    title: "What does the Red Cross do for human rights? #23shager",
    description: "",
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "CeasefireNOW",
      "shieldren",
      "StandWithIsrael",
    ],
    category: "Hostages, Victims & Survivors"
  },
  {
    filename: "10.jpg",
    title: "Am Israel Chai. #23shager",
    description: ``,
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "TheWestIsNext",
      "Woke",
      "CeasefireNOW",
    ],
    category:"Hostages, Victims & Survivors"
  },
  {
    filename: "11.jpg",
    title: "No, Women, No cry. #23shager",
    tags: ["TheWestIsNext", "Hostages", "BringThemHomeNow", "WarCrimes", " Yana Yanuchka"],
    category: "Cultural and Religious Insights"
  },
  {
    filename: "12.jpg",
    title:
      "30 KIDS are hostages by HamasisISIS in Gaza, Can you find our little girl?. #23shager",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "WarCrimes",
      "HamasisISIS",
      "CeasefireNOW",
    ],
    category:"Hostages, Victims & Survivors"
  },
  {
    filename: "13.jpg",
    title: "CANCEL anyone who lift their head and supports terror. #23shager",
    tags: [
      "TheWestIsNext",
      "TerrorSplaining",
      "WarCrimes",
      "Propagaza",
      "CeasefireNOW",
    ],
    category: "Terrorism and Security"
  },
  {
    filename: "14.jpg",
    title: "Never Again, Again. #23shager",
    tags: [
      "AntiZionism",
      "Antisemitism",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
    ],
    category:"Human Rights"
  },
  {
    filename: "15.jpg",
    title: "Is it human to use a human shield?. #23shager",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "HumanRights",
      "WarCrimes",
      "CeasefireNOW",
    ],
    category:"Human Rights"
  },
  {
    filename: "16.jpg",
    title: "Save the world from HamasisISIS. #23shager",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "CeasefireNOW",
      "TheWestIsNext",
    ],
    category: "Terrorism and Security"
  },
  {
    filename: "17.jpg",
    title: "You got confused, it is Rational Socialism not National Socialism!. #23shager",
    tags: ["Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
    category:"Human Rights"
  },
  {
    filename: "18.jpg",
    title: "Do you know what you are fighting for??. #23shager",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW",
    ],
    category: "Media and Public Perception"
  },
  {
    filename: "19.jpg",
    title: "Choose your club. #23shager Credit: @EllaTravelsLove",
    tags: ["HamasisISIS", "WarCrimes", "HumanRights", "ellakenan"],
    category: "Influencers"
  },
 
  {
    filename: "22.png",
    title: "Is it Illegal to Defend Myself? #23shager",
    tags: [ "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW"],
      category: "Media and Public Perception"
  },

  {
    filename: "23.png",
    title: "Does the Quran allow this atrocity? #23shager",
    tags: ["Islam", "Religion", "HamasisISIS", "WarCrimes",],
    category: "Cultural and Religious Insights"
  },

  {
    filename: "24.png",
    title: "FreePalestine = FreeVandalists. #23shager",
    tags: [ "Vandalists", "HamasisISIS", "WarCrimes"],
    category: "Terrorism and Security"
  },

  {
    filename: "25.png",
    title: "May Hell be with You. #23shager",
    tags: [ "WarCrimes", "Hostages"],
    category:"Hostages, Victims & Survivors"
  },

  

  {
    filename: "27.png",
    title: "#MeJew #23shager",
    tags: ["Jews", "Holocaust", "GazaLight", "MeJewMeToo"],
    category: "International Conflict"
  },

  {
    filename: "28.png",
    title: "You Know Nothing. #23shager",
    tags: ["HAMAS", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
    category: "International Conflict"
  },

  {
    filename: "29.png",
    title: "Your Child for Dinner? Why Not? #23shager",
    tags: ["WarCrimes", "Jews", "Holocaust"],
    category: "Terrorism and Security"
  },

  {
    filename: "30.png",
    title: "FREE PALESTINE? #23shager",
    tags: ["UsefullIdiots", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
    category: "Terrorism and Security"
  },
  {
    filename: "31.png",
    title: "Is Hamas Human? #23shager",
    tags: ["HamasisISIS", "FreeGazaFromHamas"],
    category: "Terrorism and Security"
  },


{
    filename: "32.png",
    title: "BRING THEM HOME ! #23shager",
    tags: ["RedCross", "StandWithUs"],
    category:"Hostages, Victims & Survivors"
  },


{
    filename: "33.png",
    title: "Shame on You Harvard #23shager",
    tags: ["University", "standwithisrael","StopAntisemitism"],
    category: "International Conflict"
  },


{
    filename: "34.png",
    title: "Nevr Again? #23shager",
    tags: ["HamasisISIS", "bringthemhome", "standwithisrael"],
    category: "International Conflict"
  },

{
    filename: "35.png",
    title: "They’re All the SAME #23shager",
    tags: ["HamasisISIS", "Nazism"],
    category: "Terrorism and Security"
  },


{
    filename: "36.png",
    title: "BRING THEM HOME, NOW !!! #23shager",
    tags: ["bringthemhome", "standwithisrael"],
    category:"Hostages, Victims & Survivors"
  },


{
    filename: "37.png",
    title: "Why is There a Time Limit Only When it Comes to Israel? #23shager",
    tags: ["standwithisrael", "bringthemhome"],
    category: "Media and Public Perception"
  },


{
    filename: "38.png",
    title: "I’M OK ? #23shager",
    tags: ["HamasisISIS", "InnocentWomen", "InnocentChildren"],
    category:"Hostages, Victims & Survivors"
  },


{
    filename: "40.png",
    title: "Oops..#23shager",
    tags: ["HamasisISIS","Hypocrisy"],
    category: "Media and Public Perception"
  },


{
    filename: "41.png",
    title: "Who is the Giving Tree?. #23shager",
    tags: ["HumanitarianCrisisLie", "HamasisISIS","Hypocrisy"],
    category: "Popular"
  },

{
    filename: "42.png",
    title: "World’s Twisted Point of View. #23shager",
    tags: ["HamasisISIS", "standwithisrael"],
    category: "Media and Public Perception"
  },
  {
    filename: "43.png",
    title: "We Are Not Going ANYWHERE. #23shager #StandWithIsrael #StandWithJews",
    tags: ["StandWithIsrael", "StandWithJews"],
    category: "Popular"
  },


{
    filename: "44.png",
    title: "Hummus Is Better. #23shager #StandWithIsrael #HamasIsCancer",
    tags: ["StandWithIsrael", "HamasIsCancer"],
    category: "Popular"
  },


{
    filename: "45.png",
    title: "Gen Z Wake Up! #23shager #StandWithIsrael #tError",
    tags: ["StandWithIsrael", "tError"],
    category: "Terrorism and Security"
  },


{
    filename: "46.png",
    title: "Stop This Hypocrisy. #23shager #StandWithIsrael #AntiZionism",
    tags: ["StandWithIsrael", "AntiZionism"],
    category: "Media and Public Perception"
  },


{
    filename: "47.png",
    title: "The New Nazi. #23shager #StandWithIsrael #Antisemitism Credit:TheShadow",
    tags: ["StandWithIsrael", "Antisemitism"],
    category: "International Conflict"
  },


{
    filename: "48.png",
    title: "The New Spice Girls. #23shager #StandWithIsrael #TheWestIsNext",
    tags: ["StandWithIsrael", "TheWestIsNext"],
    category: "Cultural and Religious Insights"
  },

{
    filename: "49.png",
    title: "Choose Your Shield. #23shager #StandWithIsrael #Shieldren #WarCrime",
    tags: ["StandWithIsrael", "Shieldren", "WarCrime"],
    category: "Terrorism and Security"
  }, 
  {
    filename: "50.png",
    title: "The New World’s ‘Hero’ #23shager #StandWithIsrael #Massacre #KillingInnocent Credit:@AvihaiCohen",
    tags: ["StandWithIsrael", "Massacre", "KillingInnocent"],
  },


{
    filename: "51.png",
    title: "You’re really on their side? #23shager #StandWithIsrael #GayRights",
    tags: ["StandWithIsrael", "GayRights"],
  },


{
    filename: "52.png",
    title: "Don’t be distracted by their game #23shager #StandWithIsrael #ProPalestineRally #UsefullIdiots",
    tags: ["StandWithIsrael", "ProPalestineRally", "UsefullIdiots"],
  },


{
    filename: "53.png",
    title: "Greta’s New Custom #23shager #StandWithIsrael #GretaThunberg #UsefullIdiots",
    tags: ["StandWithIsrael", "GretaThunberg", "UsefullIdiots"],
  },


{
    filename: "54.png",
    title: "Hamas’ Educations #23shager #StandWithIsrael #HamasTerrorAcademy #FreeGazaFromHamas",
    tags: ["StandWithIsrael", "HamasTerrorAcademy", "FreeGazaFromHamas"],
  },


{
    filename: "55.png",
    title: "Let Us Bright Your ‘Free Palestine’ #23shager #StandWithIsrael #KillingInnocent #RapeInnocent #Vandalists",
    tags: ["StandWithIsrael", "KillingInnocent", "RapeInnocent", "Vandalists"],
  },

{
    filename: "56.png",
    title: "Look Who’s Supporting Them #23shager #StandWithIsrael #WakeUp",
    tags: ["StandWithIsrael", "WakeUp"],
  },

{
    filename: "57.png",
    title: "Humanitarian Help? #23shager #StandWithIsrael #ShifaTerrorHQ",
    tags: ["StandWithIsrael", "ShifaTerrorHQ"],
  },


{
    filename: "58.png",
    title: "Human Shieldren #23shager #StandWithIsrael #WarCrime #HumanRights",
    tags: ["StandWithIsrael", "WarCrime", "HumanRights"],
  },


{
    filename: "59.png",
    title: "It’s INFECTIOUS #23shager #StandWithIsrael #TheWestIsNext #Westurn Credit:@visit2israel",
    tags: ["StandWithIsrael", "TheWestIsNext", "Westurn"],
  },


{
    filename: "60.png",
    title: "Hamas Discrimination? #23shager #StandWithIsrael #HumanRights #WomenRights #ElderAbuse #WarCrime",
    tags: ["StandWithIsrael", "HumanRights", "WomenRights", "ElderAbuse", "WarCrime"],
  },

{
    filename: "61.png",
    title: "Hamas = Monsters #23shager #StandWithIsrael #HamasIsCancer #WomenRights #RapeInnocent #KillingInnocent",
    tags: ["StandWithIsrael", "HamasIsCancer", "WomenRights", "RapeInnocent", "KillingInnocent"],
  },
{
    filename: "62.png",
    title: "2023 College Life #23shager #StandWithIsrael #ProPalestineRally #UsefullIdiots Credit:@11/23Creators.com",
    tags: ["StandWithIsrael", "ProPalestineRally", "UsefullIdiots"],
  },


{
    filename: "63.png",
    title: "Freedom Fighter? #23shager #StandWithIsrael #KidnappedFromIsrael #WarCrime",
    tags: ["StandWithIsrael", "KidnappedFromIsrael", "WarCrime"],
  },

{
    filename: "64.png",
    title: "The Middle East Situation #23shager #StandWithIsrael #StandWithJews",
    tags: ["StandWithIsrael", "StandWithJews"],
  },


{
    filename: "65.png",
    title: "Rocket-Patient #23shager #StandWithIsrael #ShifaTerrorHQ #HamasIsCancer",
    tags: ["StandWithIsrael", "ShifaTerrorHQ", "HamasIsCancer"],
  },


{
    filename: "66.png",
    title: "Ethnic Cleansing = Follow the Numbers #23shager #StandWithIsrael #StopAntisemitism MeJewMeToo",
    tags: ["StandWithIsrael", "StopAntisemitism", "MeJewMeToo"],
  },


{
    filename: "67.png",
    title: "Hama = Nazi Ideology #23shager #StandWithIsrael #StopAntisemitism",
    tags: ["StandWithIsrael", "StopAntisemitism"],
  },



{
    filename: "68.png",
    title: "Imagine They Came for Halloween #23shager #StandWithIsrael #HamasIsCancer",
    tags: ["StandWithIsrael", "HamasIsCancer"],
  },




{
    filename: "69.png",
    title: "This is all the SAME #23shager #StandWithIsrael #TerrorSplaining",
    tags: ["StandWithIsrael", "TerrorSplaining"],
  },


{
    filename: "70.png",
    title: "XXX #23shager #StandWithIsrael #WarCrime",
    tags: ["StandWithIsrael", "WarCrime"],
  },

{
    filename: "71.png",
    title: "Rocket Sugar #23shager #StandWithIsrael #HamasIsCancer",
    tags: ["StandWithIsrael", "HamasIsCancer"],
  },


{
    filename: "72.png",
    title: "The Subtle Difference #23shager #StandWithIsrael #WeLoveIDF #HamasIsCancer",
    tags: ["StandWithIsrael", "WeLoveIDF", "HamasIsCancer"],
  },


{
    filename: "73.png",
    title: "Humanitarian Help Lie #23shager #StandWithIsrael #HamasIsCancer #Propagaza",
    tags: ["StandWithIsrael", "HamasIsCancer", "Propagaza"],
  },


{
    filename: "74.png",
    title: "What is wrong with you BBC? #23shager #StandWithIsrael #MediaBias #BBC",
    tags: ["StandWithIsrael", "MediaBias", "BBC"],
  },


{
    filename: "75.png",
    title: "Hamas’ Gaza #23shager #StandWithIsrael #HamasIsCancer #Propagaza",
    tags: ["StandWithIsrael", "HamasIsCancer", "Propagaza"],
  },
{
    filename: "76.png",
    title: "It doesn’t count when it’s an Israeli woman? #23shager #StandWithIsrael #StopAntisemitism #WomenRights",
    tags: ["StandWithIsrael", "StopAntisemitism", "WomenRights"],
  },


{
    filename: "77.png",
    title: "Hama’s Cry #23shager #StandWithIsrael #HamasIsCancer",
    tags: ["StandWithIsrael", "HamasIsCancer"],
  },

{
    filename: "78.png",
    title: "Nazism, Fascism, You Name It #23shager #StandWithIsrael #Holocaust #StopAntisemitism",
    tags: ["StandWithIsrael", "Holocaust", "StopAntisemitism"],
  },


{
    filename: "79.png",
    title: "Hamas is bombing Gaza’s hoptials! #23shager #StandWithIsrael #HamasIsCancer",
    tags: ["StandWithIsrael", "HamasIsCancer"],
  },


{
    filename: "80.png",
    title: "Stand With The Jewish People  #23shager #StandWithIsrael #MeJew #Holocaust #StopAntisemitism",
    tags: ["StandWithIsrael", "MeJew", "Holocaust", "StopAntisemitism"],
  },


{
    filename: "81.png",
    title: "Stand With Us #23shager #StandWithIsrael #StandWithJew",
    tags: ["StandWithIsrael", "StandWithJew"],
  },
  
{
    filename: "100.jpg",
    title: "UN secretary general, UNICEF and United Nations do not care about Israeli children. #23shager #WorldChildrensDay #standwithisrael Credit:@EllaTravelsLove",
    tags: ["WorldChildrensDay", "standwithisrael","ellakenan"],
    category: "Influencers"
  },

{
    filename: "101.jpg",
    title: "This children's day we call for the return of our children and all hostages. #23shager #WorldChildrensDay #standwithisrael #BringThemBack #BringThemBackHome #Hamasisisis Credit:@EllaTravelsLove",
    tags: ["BringThemBack", "BringThemBackHome", "Hamasisisis" ,"WorldChildrensDay", "standwithisrael","ellakenan" ],
  category: "Influencers"
},
{
    filename: "102.jpg",
    title: "Please take an immediate stance against Jihadi terrorist support on campus.. #23shager #standwithisrael #Hamasisisis Credit:@EllaTravelsLove",
    tags: ["Hamasisisis", "standwithisrael", "ellakenan" ],
    category: "Influencers"
  },
{
    filename: "103.jpg",
    title: "Gen Z in the US is really the biggest disappointment of all time. #23shager #standwithisrael #TheWestIsNext #Educateyourself Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
    category: "Influencers"
  },  
{
    filename: "104.jpg",
    title: "The New American Idol? #TheWestIsNext #Educateyourself #23shager #standwithisrael Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "105.jpg",
    title: "Did you ever question yourself why was it so easy to make you a useful idiot in the service of ISIS? #23shager #standwithisrael #HamasisISIS #Educateyourself Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "106.jpg",
    title: "Imagine that Hamas-ISIS has infiltrated your village, murdered you friends, family and kidnapped you days before giving birth. #23shager #standwithisrael #HamasisISIS #WomanRights Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "107.jpg",
    title: "An Israeli woman, in the last weeks of her final trimester, was kidnapped to Gaza on October 7th and had to give birth while in captivity. #23shager #standwithisrael #HamasisISIS #WomanRights Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "108.jpg",
    title: "Roger Waters, WE know what happened. Hamas terrorists broke into our cities, butchered our citizens, raped our women, and took our children hostage. #23shager #standwithisrael  #HamasisISIS #Educateyourself  Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "109.jpg",
    title: "Current state of higher education in the US. #standwithisrael #23shager #educateyourself #University Credit:@EllaTravelsLove",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  },
{
    filename: "110.jpg",
    title: "This is how you look. #standwithisrael #hamasisisis #educateyourself #23shager #University Credit:@EllaTravelsLove",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  },
 {
    filename: "111.jpg",
    title: "Imagine failing to understand the undeniable facts - It's Israel now, your home is next.Angelina I'm talking to you. #23shager @Angelina Jolie #thewestisnext #standwithisrael #freegazafromhamas Credit:@EllaTravelsLove",
    tags: ["standwithisrael","Educateyourself", "freegazafromhamas" ,"ellakenan" ],
    category: "Influencers"
  },
 {
    filename: "112.jpg",
    title: "Hamas is the sole cause of suffering both in Israel and in Gaza. #freepalestinefromhamas #humanrights #humanity #standwithisrael #23shager Credit:@EllaTravelsLove",
    tags: ["standwithisrael","Educateyourself", "humanrights", "freegazafromhamas" ,"ellakenan" ],
    category: "Influencers"
  },
{
    filename: "113.jpg",
    title: "Amongst the 241 people there are more than 30 babies and children, some without their parents! #23shager #bringthemhomenow #humanrights #humanity #standwithisrael #freegazafromhamas Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","ellakenan" ],
    category: "Influencers"
  },
  {
    filename: "114.jpg",
    title: "There cannot be a humanitarian ceasefire withou their release. 9 months-year-old babies! 85-year-olds! Please share. #23shager#HamasisISIS #TheWestlsNext #BringThemBack #BringThemHomeNow #standwithisrael Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","HamasisISIS","TheWestlsNext", "BringThemBack", "BringThemHomeNow", "standwithisrael", "ellakenan" ],
    category: "Influencers"
  },
  {
    filename: "83.jpg",
    title: "Ignoring the unprecedented, premeditated and extreme cruelty of the sexual violence committed by Hamas, means not only failing Israeli women but failing the ENTIRE international human rights system. #23shager #StandWithIsrael #WomenRights #MeJewMeToo Credit: @Tina Nordahl Nissim ",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],
    category:"Human Rights"
  },
{
    filename: "84.jpg",
    title: "#MeJewMeToo #23shager",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],
    category:"Human Rights"
    

  },
{
    filename: "85.jpg",
    title: "We fight to save our kids, Hamas uses their kids as human shields. #23shager#StandWithIsrael #CeaseFire Credit: @EllaTravelsLove ",
    tags: ["StandWithIsrael", "CeaseFire", "ellakenan"],
    category: "Influencers"
  },
  {
    filename: "400.jpg.jpg",
    title: "The IDF found a terrorist rocket in a little girl's bed Beit Hanoun. Another hectic abuse of civilians. Did we say human shield already? #23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "shieldren", "WarCrimes", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "401.jpg.jpg",
    title: "16 NOV - These were found on 3 terrorists from Hebron, making their way to kill jews in Jerusalem. Help us stop them now. #23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "MeJewMeToo", "StopItNow", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "402.jpg.jpg",
    title: "An injured Jewish hero is being treated by an Arab Muslim hero nurse. This is the real partnership the world should see! Jews and Arabs live in harmony and peace. This is the only way and this is what we want. #23shager Credit: @yosephhaddad",
    tags: ["HumanRights", "StandWithIsrael", "FreeGazaFromHamas", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "403.jpg.jpg",
    title: "The German football club SV Werder Bremen support in Israel and the 250 (!!!!) israeli hostages. This is how all sports clubs around the world should act. Thank you for standing with Israel @werderbremen! #23shager Credit: @yosephhaddad",
    tags: ["Hostages", "BringThemHomeNow", "WarCrimes", "HumanRights", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "404.jpg.jpg",
    title: "Who is the villain? #23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "TheWestIsNext", "Propagaza", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "405.jpg.jpg",
    title: "Hamas weapons were found in a Kindergarten in Gaza. We also want to stop the human shield and free Palestine from Hamas…#23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "shieldren", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "406.jpg",
    title: "Violence creates more violence. Education to violence leads to more violence…#23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "violence", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "800.jpg",
    title: "Is there still hope for peace? I really wish there is… Picture by: Emad Hajjaj (Jordan) #23shager",
    tags: ["StandWithIsrael", "PeaceInTheMiddleEast", "StopItNow"],
    category: "Social Activism and Support"
  },



{
    filename: "407.jpg",
    title: "Knowing in advance about the planned massacre and not doing anything to stop it is a war crime! Blood on your hands! You call yourself Journalists? Shame on you!#23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "WarCrimes", "HumanRights", "YosephHaddad"],
    category: "Influencers"
  },
  {
    filename: "201.png",
    title: "Israel Explained. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "TheNewYorkTimes", "NoaTishby"],
    category: "Influencers"
  },


{
    filename: "202.png",
    title: "Kidnapped From Israel. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "BringThemHomeNow","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "203.png",
    title: "Bring Them Home. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "BringThemBack","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "204.png",
    title: "BBC fake it till you make it. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "MediaBias","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "205.png",
    title: "Anti-Zionism = Antisemitism. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "StopAntisemitism","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "206.png",
    title: "Antisemitic Students. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "StopAntisemitism","NoaTishby"],
    category: "Influencers"
  },
{
    filename: "207.png",
    title: "Stop Antesimitism. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "ProPalestineRally","NoaTishby" ],
    category: "Influencers"
  },
  {
    filename: "86.jpg",
    title: "Beautiful young lady @edenkhalifa in Tel Aviv standing up for her country Israel. Why do we never hear of Arabs like her? The media only showcases anti-Jew Arabs. #23shager #StandWithIsrael. Credit:@TimeToStandUpForIsrael",
    tags: ["StandWithIsrael", "TimeToStandUpForIsrael"],
    category: "Social Activism and Support"
  },
   {
    filename: "300.png",
    title: "Umm…absolutely not. #23shager #jewishhumor Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "JewishHumor"],
    category: "Social Activism and Support"
  },
  {
    filename: "301.png",
    title: "Having “the talk” about birds and bees was a breeze compared to dismantling antisemitic tropes picked up at college. #23shager #Truth #endjewhatred Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "EndJewHatred"],
    category: "Social Activism and Support"
  },
  {
    filename: "302.png",
    title: "Hate crimes = jail time.Choose midterms instead of prison terms. #23shager #Truth Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "University"],
    category: "Social Activism and Support"
  },
  {
    filename: "303.png",
    title: "Antisemitism is never an option. #23shager #endjewhatred  Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "University"],
    category: "Social Activism and Support"
  },
  {
    filename: "304.png",
    title: "We need you now more than ever. #23shager #endjewhatred #activism. Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "Activism", "EndJewHatred"],
    category: "Social Activism and Support"
  },
  {
    filename: "305.png",
    title: "“The silence continued. That’s when we all began to wonder if we were safe.” - @juliannamargulies for @usatoday Link in @jewbelong bio to entire article. #23shager Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "Activism", "EndJewHatred"],
    category: "Social Activism and Support"
  },
   {
    filename: "701.png",
    title: "Hi @UNRWA Recognize this badge? It is your employee, who also happens to be a Hamas terrorist. Another employee of yours held an Israeli child hostage in his attic for 50 days, almost starving him to death. #23shager Credit:@DrEliDavid",
    tags: ["StandWithIsrael", "DrEliDavid", "UNRA", "UN"],
    category: "Influencers"
  },
  {
    filename: "702.png",
    title: "Ever wondered why you're standing in long airport security lines? #23shager Credit:@DrEliDavid",
    tags: ["DrEliDavid", "tError", "PeaceInTheMiddleEast"],
    category: "Influencers"
  },
  {
    filename: "504.png",
    title: "I Stand with #Israel #23shager #StandWithIsrael #IsraeliPeople",
    tags: ["StandWithIsrael", "IsraeliPeople", "Israel"],
  },


{
    filename: "505.jpg",
    title: "Things Don’t Work with Hamas  #23shager #StandWithIsrael #HumanRights #LiberalValues #HamasIsCancer Credit: @ellakenan",
    tags: ["StandWithIsrael", "HumanRights", "HamasIsCancer", "LiberalValues"],
  },


{
    filename: "506.jpg",
    title: "THEY = #HamaisISIS #23shager #StandWithIsrael #WomenRights #HumanRights #Kidnapped #Murderers",
    tags: ["StandWithIsrael", "WomenRights", "HumanRights", "Kidnapped", "Murderers", "HamasisISIS"],
  },


{
    filename: "507.jpg",
    title: "Example for #UsefullIdiot #23shager #StandWithIsrael #FreeGazaFromHamas",
    tags: ["StandWithIsrael", "UsefullIdiot", "FreeGazaFromHamas"],
  },


{
    filename: "508.jpg",
    title: "Emily is in Home 💙 #23shager #StandWithIsrael #BRINGALLOFTHEMHOME #InnocentChildren",
    tags: ["StandWithIsrael", "BRINGALLOFTHEMHOME", "InnocentChildren"],
  },


{
    filename: "509.jpg",
    title: "IDF’s Precision #23shager #StandWithIsrael #IDF #HamasToBeDemolished",
    tags: ["StandWithIsrael", "IDF", "HamasToBeDemolished"],
  },




{
    filename: "88.jpg",
    title: "Thank You #Bahrain for being the First 💙 #23shager #StandWithIsrael #PrinceBahrain #MuslimWorld #HamasToBeDemolished #HamasIsCancer #Hostages",
    tags: ["StandWithIsrael", "Bahrain", "PrinceBahrain", "MuslimWorld", "HamasToBeDemolished", "HamasIsCancer", "Hostages"],
  },


{
    filename: "89.jpg",
    title: "They Hate Israel Because of Their Existence #23shager #StandWithIsrael #Racism #Antisemitism #StopAntisemitism #HamasIsCancer",
    tags: ["StandWithIsrael", "Racism", "Antisemitism", "StopAntisemitism", "HamasIsCancer"],
  },


{
    filename: "90.jpg",
    title: "Don’t be Naive, #The West Is Next #23shager #StandWithIsrael #Racism #StopAntisemitism",
    tags: ["StandWithIsrael", "TheWestIsNext", "Racism", "StopAntisemitism"],
  },


{
    filename: "91.jpg",
    title: "Brave #Iranian Woman #23shager #StandWithIsrael #IranianPeople #IsraelWar",
    tags: ["StandWithIsrael", "IranianWoman", "IranianPeople", "IsraelWar"],
  },


{
    filename: "92.jpg",
    title: "ISRAELI MOTHER WARRIOR #23shager #StandWithIsrael #IsraeliWomen #IsraelWar #IsraelFightsBack #WeLoveIDF #swordsofiron",
    tags: ["StandWithIsrael", "IsraeliWomen", "IsraelWar", "IsraelFightsBack", "WeLoveIDF", "swordsofiron"],
  },

{
    filename: "93.jpg",
    title: "15 yrs. old Hamas Terrorist #23shager #StandWithIsrael #HamasTerrorAcademy #HamasIsCancer #tError #HamasTerrorists #ChildrenRights",
    tags: ["StandWithIsrael", "HamasTerrorAcademy", "HamasIsCancer", "tError", "HamasTerrorists", "ChildrenRights"],
  },
{
    filename: "94.jpg",
    title: "Finally, She is in Home 💙 #23shager #StandWithIsrael #BRINGALLOFTHEMHOME #Hostages #IsraelWar #swordsofiron",
    tags: ["StandWithIsrael", "BRINGALLOFTHEMHOME", "Hostages", "IsraelWar", "swordsofiron"],
  },


{
    filename: "95.jpg",
    title: "Thank God 💙 #23shager #StandWithIsrael #BRINGALLOFTHEMHOME #Hostages #IsraelWar #swordsofiron",
    tags: ["StandWithIsrael", "BRINGALLOFTHEMHOME", "Hostages", "IsraelWar", "swordsofiron"],
  },


{
    filename: "96.jpg",
    title: "#Gen-Z, Please Learn the Israeli Original Borders #23shager #StandWithIsrael #IsraelWar #IsraelFightsBack",
    tags: ["StandWithIsrael", "Gen-Z", "IsraelWar", "IsraelFightsBack"],
  },


{
    filename: "97.jpg",
    title: "The Most #Humanitarian Army in the World #23shager #StandWithIsrael #Humanity #IsraeliWomenSoldier #IsraeliWomen #IsraelWar #IsraelFightsBack",
    tags: ["StandWithIsrael", "Humanity", "IsraeliWomenSoldier", "IsraeliWomen", "IsraelWar", "IsraelFightsBack"],
  },


{
    filename: "98.jpg",
    title: "The New #British Soldier #23shager #StandWithIsrael #UK #TheWestIsNext #LiberalValues",
    tags: ["StandWithIsrael", "British", "UK", "TheWestIsNext", "LiberalValues"],
  },


{
    filename: "99.jpg",
    title: "Shameless Terrorist Doll #23shager #StandWithIsrael #IsraelFightsBack #IsraeliWomen #HamasTerrorists #HamasIsCancer",
    tags: ["StandWithIsrael", "IsraelFightsBack", "IsraeliWomen", "HamasTerrorists", "HamasIsCancer"],
  },


{
    filename: "500.jpg",
    title: "Yes, this is the Flag! #23shager #StandWithIsrael #IsraelPalestineConflict #IsraelWar #StandWithJew #IsraeliPeople",
    tags: ["StandWithIsrael", "IsraelPalestineConflict", "IsraelWar", "StandWithJew", "IsraeliPeople"],
  },


{
    filename: "501.png",
    title: "ISRAEL WILL WIN #23shager #StandWithIsrael #swordsofiron",
    tags: ["StandWithIsrael", "swordsofiron"],
  },


{
    filename: "502.jpg",
    title: "Fanatics Wrapped in Lies Indeed #23shager #StandWithIsrael #swordsofiron #UsefullIdiots #TheWestIsNext Credit:@DouglasMurray",
    tags: ["StandWithIsrael", "swordsofiron", "UsefullIdiots", "TheWestIsNext"],
  },


{
    filename: "503.jpg",
    title: "Bring Him Back #23shager #StandWithIsrael #swordsofiron #BRINGALLOFTHEMHOME #InnocentChildren #KidnappedFromIsrael #Hostages #IsraelFightsBack",
    tags: ["StandWithIsrael", "swordsofiron", "BRINGALLOFTHEMHOME", "InnocentChildren", "KidnappedFromIsrael", "Hostages", "HamasIsCancer", "IsraelFightsBack"],
  },
  {
    filename: "1001.png",
    category: "Influencers"
    title: "How Would You Feel?  #2-3-sha-ger #StandWithIsrael  #InnocentChildren #ChildrenRights #BRINGALLOFTHEMHOME Credit: @J.Majburd",
    tags: ["StandWithIsrael", "InnocentChildren", "ChildrenRights", "BRINGALLOFTHEMHOME"],
  },


{
    filename: "1002.png",
    category: "Influencers"
    title: "Kick HamAss  #2-3-sha-ger #StandWithIsrael  #HamasisISIS #tError Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasisISIS", "tError"],
  },


{
    filename: "1003.png",
    category: "Influencers"
    title: "Same Sh*t  #2-3-sha-ger #StandWithIsrael  #RadicalIslam #MuslimBrotherhood #HamasisISIS Credit: @J.Majburd",
    tags: ["StandWithIsrael", "RadicalIslam", "MuslimBrotherhood", "HamasisISIS"],
  },


{
    filename: "1004.png",
    category: "Influencers"
    title: "Underground Clearance  #2-3-sha-ger #StandWithIsrael  #HamasIsCancer #HamasToBeDemolished Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasIsCancer", "HamasToBeDemolished"],
  },


{
    filename: "1005.png",
    category: "Influencers"
    title: "#HamasisISIS Brain Parts  #2-3-sha-ger #StandWithIsrael  #Monsters #Sadists #Pyschopaths Credit: @J.Majburd",
    tags: ["StandWithIsrael", "Monsters", "Sadists", "Pyschopaths", "HamasisISIS"],
  },



 
{
    filename: "1006.png",
    category: "Influencers"
    title: "The True Stroy?  #2-3-sha-ger #StandWithIsrael  #Propagaza #TheWestIsNext Credit: @J.Majburd",
    tags: ["StandWithIsrael", "Propagaza", "TheWestIsNext"],
  },


{
    filename: "1007.png",
    category: "Influencers"
    title: "#VanGogh?  #2-3-sha-ger #StandWithIsrael  #Propagaza #TheWestIsNext Credit: @J.Majburd",
    tags: ["StandWithIsrael", "VanGogh", "Propagaza", "TheWestIsNext"],
  },


{
    filename: "1008.png",
    category: "Influencers"
    title: "ISRAEL WILL BE FREE  #2-3-sha-ger #StandWithIsrael  #IsraelFightsBack #WeLoveIDF Credit: @J.Majburd",
    tags: ["StandWithIsrael", "IsraelFightsBack", "WeLoveIDF"],
  },


{
    filename: "1009.png",
    category: "Influencers"
    title: "#IsraeliWomen 💙  #2-3-sha-ger #StandWithIsrael  #IsraelFightsBack #WomenRights Credit: @J.Majburd",
    tags: ["StandWithIsrael", "IsraeliWomen", "IsraelFightsBack", "WomenRights"],
  },


{
    filename: "1010.png",
    category: "Influencers"
    title: "London Be Aware!  #2-3-sha-ger #StandWithIsrael  #TheWestIsNext #Westurn #Vandalists Credit: @J.Majburd",
    tags: ["StandWithIsrael", "TheWestIsNext", "Westurn", "Vandalists"],
  },




{
    filename: "1011.png",
    category: "Influencers"
    title: "#UNRWA’s Humanitarian Lies  #2-3-sha-ger #StandWithIsrael  #HamasIsCancer #DoubleMoral #WarCrime Credit: @J.Majburd",
    tags: ["StandWithIsrael", "UNRWA", "HamasIsCancer", "DoubleMoral", "WarCrime"],
  },


{
    filename: "1012.png",
    category: "Worse Than Monsters"
    title: "YYY  #2-3-sha-ger #StandWithIsrael  #HamasIsCancer #Monsters Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasIsCancer", "Monsters""],
  },


{
    filename: "1013.png",
    category: "Influencers"
    title: "#UNRWA’s Terror Factory #2-3-sha-ger #StandWithIsrael  #HamasTerrorists #tError #DoubleMoral Credit: @J.Majburd",
    tags: ["StandWithIsrael", "UNRWA", "HamasTerrorists", "tError", "DoubleMoral"],
  },


{
    filename: "1014.png",
    category: "Influencers"
    title: "Irano-Hamaso Virus  #2-3-sha-ger #StandWithIsrael  #HamasIsCancer #IranTerrorist #RadicalIslam Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasIsCancer", "IranTerrorist", "RadicalIslam"],
  },


{
    filename: "1015.png",
    category: "Influencers"
    title: "Keep This #RadicalIslam Out!  #2-3-sha-ger #StandWithIsrael  #IranTerrorist #TheWestIsNext Credit: @J.Majburd",
    tags: ["StandWithIsrael", "RadicalIslam", "IranTerrorist", "TheWestIsNext"],
  },





{
    filename: "1016.png",
    category: "Influencers"
    title: "Hamas Is Using Human Shields, WAKE UP!  #2-3-sha-ger #StandWithIsrael  #HamasIsCancer #HumanRights #WarCrime Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasIsCancer", "HumanRights", "WarCrime"],
  },


{
    filename: "1017.png",
    category: "Influencers"
    title: "NOW! NOW!! NOW!!!  #2-3-sha-ger #StandWithIsrael  #BringThemHomeNow #BRINGALLOFTHEMHOME #KidnappedFromIsrael Credit: @J.Majburd",BringThemHomeNow
    tags: ["StandWithIsrael", "BringThemHomeNow", "BRINGALLOFTHEMHOME", "KidnappedFromIsrael"],
  },


{
    filename: "1018.png",
    category: "Influencers"
    title: "#RadicalIslam Money  #2-3-sha-ger #StandWithIsrael  #IranTerrorist #HamasIsCancer Credit: @J.Majburd",
    tags: ["StandWithIsrael", "RadicalIslam", "IranTerrorist", "HamasIsCancer"],
  },


{
    filename: "1019.png",
    category: "Influencers"
    title: "#BringThemBack💔 #2-3-sha-ger #StandWithIsrael  #BringThemHomeNow #BRINGALLOFTHEMHOME Credit: @J.Majburd",
    tags: ["StandWithIsrael", "BringThemBack", "BringThemHomeNow", "BRINGALLOFTHEMHOME"],
  },


{
    filename: "1020.png",
    category: "Influencers"
    title: "Would You Let The Iranian Octopus Rule Your Country?  #2-3-sha-ger #StandWithIsrael  #IranTerrorist #RadicalIslam Credit: @J.Majburd",
    tags: ["StandWithIsrael", "IranTerrorist", "RadicalIslam",],
  },


{
    filename: "1021.png",
    category: "Influencers"
    title: "Immigration Evolution, Wake Up!  #2-3-sha-ger #StandWithIsrael  #TheWestIsNext #Westurn Credit: @J.Majburd",
    tags: ["StandWithIsrael", "TheWestIsNext", "Westurn"],
  },


{
    filename: "1022.png",
    category: "Influencers"
    title: "The Biased #UN  #2-3-sha-ger #StandWithIsrael  #AntiZionism #StopAntisemitism Credit: @J.Majburd",
    tags: ["StandWithIsrael", "UN", "AntiZionism", "StopAntisemitism"],
  },


{
    filename: "1023.png",
    category: "Influencers"
    title: "Poor Blind Europe Butterfly  #2-3-sha-ger #StandWithIsrael  #TheWestIsNext #Westurn Credit: @J.Majburd",
    tags: ["StandWithIsrael", "TheWestIsNext", "Westurn"],
  },


{
    filename: "1024.png",
    category: "Influencers"
    title: "Brainwash Clinic  #2-3-sha-ger #StandWithIsrael  #HamasTerrorAcademy #WarCrime Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasTerrorAcademy", "WarCrime"],
  },


{
    filename: "1025.png",
    category: "Influencers"
    title: "#RadicalIslam’s Inspiration  #2-3-sha-ger #StandWithIsrael  #Antisemitism #Holocaust Credit: @J.Majburd",
    tags: ["StandWithIsrael", "RadicalIslam", "Antisemitism", "Holocaust"],
  },




{
    filename: "1026.png",
    category: "Influencers"
    title: "Even Aliens Know  #2-3-sha-ger #StandWithIsrael  #UsefullIdiots #UN #StopAntisemitism Credit: @J.Majburd",
    tags: ["StandWithIsrael", "UsefullIdiots", "UN", "StopAntisemitism"],
  },


{
    filename: "1027.png",
    category: "Influencers"
    title: "#RadicalIslam Alliance  #2-3-sha-ger #StandWithIsrael  #IranTerrorist #DoubleMoral Credit: @J.Majburd",
    tags: ["StandWithIsrael", "RadicalIslam", "IranTerrorist", "DoubleMoral"],
  },


{
    filename: "1028.png",
    category: "Influencers"
    title: "Would You Try #MuslimBrotherhood Eggs for Breakfast?  #2-3-sha-ger #StandWithIsrael  #HamasisISIS #Al-Qaeda Credit: @J.Majburd",
    tags: ["StandWithIsrael", "MuslimBrotherhood", "HamasisISIS", "Al-Qaeda"],
  },


{
    filename: "1029.png",
    category: "Influencers"
    title: "There Is NO Logic, Just Killing  #2-3-sha-ger #StandWithIsrael #HamasIsCancer #Murderers #KillingInnocent #WarCrime Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasIsCancer", "Murderers", "KillingInnocent", "WarCrime"],
  },


{
    filename: "1030.png",
    category: "Influencers"
    title: "How Many SinWar(s) Will Yahya End-Up With? #2-3-sha-ger #StandWithIsrael  #WarCrime #HamasTerrorists Credit: @J.Majburd",
    tags: ["StandWithIsrael", "WarCrime", "HamasIsCancer", "HamasTerrorists"],
  },





{
    filename: "1031.png",
    category: "Influencers"
    title: "Context Is a Bit**, Bit** 😂 #2-3-sha-ger #StandWithIsrael  #Harvard #TheWestIsNext Credit: @J.Majburd",
    tags: ["StandWithIsrael", "Harvard", "TheWestIsNext"],
  },


{
    filename: "1032.png",
    category: "Influencers"
    title: "What If..  #2-3-sha-ger #StandWithIsrael  #FreeGazaFromHamas #HamasIsCancer Credit: @J.Majburd",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "HamasIsCancer"],
  },


{
    filename: "1033.png",
    category: "Influencers"
    title: "#UsefullIdiots Apocalypse  #2-3-sha-ger #StandWithIsrael  #ProPalestineRally #TheWestIsNext Credit: @J.Majburd",
    tags: ["StandWithIsrael", "UsefullIdiots", "ProPalestineRally", "TheWestIsNext"],
  },


{
    filename: "1034.png",
    category: "Influencers"
    title: "#HamasisISIS, Remember?  #2-3-sha-ger #StandWithIsrael  #MuslimBrotherhood #RadicalIslam Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasisISIS", "MuslimBrotherhood", "RadicalIslam"],
  },


{
    filename: "1035.png",
    category: "Influencers"
    title: "It’s Iranian Weapon All Around..  #2-3-sha-ger #StandWithIsrael  #IranTerrorist #RadicalIslam #HamasTerrorists Credit: @J.Majburd",
    tags: ["StandWithIsrael", "IranTerrorist", "RadicalIslam", "HamasTerrorists"],
  },




{
    filename: "1036.png",
    category: "Influencers"
    title: "#RedCross’ Real Job  #2-3-sha-ger #StandWithIsrael  #TheWestIsNext #WarCrime Credit: @J.Majburd",
    tags: ["StandWithIsrael", "RedCross", "TheWestIsNext", "WarCrime"],
  },


{
    filename: "1037.png",
    category: "Influencers"
    title: "If #Picaso Had to Paint the New Guernica  #2-3-sha-ger #StandWithIsrael  #TheWestIsNext #QQQ Credit: @J.Majburd",
    tags: ["StandWithIsrael", "Picaso", "TheWestIsNext", "TTT"],
  },


{
    filename: "1038.png",
    category: "Influencers"
    title: "It’s Being So Long!  #2-3-sha-ger #StandWithIsrael  #BringThemHomeNow #BRINGALLOFTHEMHOME #KidnappedFromIsrael Credit: @J.Majburd",
    tags: ["StandWithIsrael", "BringThemHomeNow", "BRINGALLOFTHEMHOME", "KidnappedFromIsrael"],
  },


{
    filename: "1039.png",
    category: "Influencers"
    title: "The Three Hypocritical Monkeys  #2-3-sha-ger #StandWithIsrael  #UNRWA #RedCross #TheWestIsNext Credit: @J.Majburd",
    tags: ["StandWithIsrael", "UNRWA", "RedCross", "TheWestIsNext"],
  },


{
    filename: "1040.png",
    category: "Influencers"
    title: "The Iranian Crow  #2-3-sha-ger #StandWithIsrael  #ZZZ #QQQ Credit: @J.Majburd",
    tags: ["StandWithIsrael", "QQQ", "WWW", "TTT"],
  },




{
    filename: "1041.png",
    category: "Influencers"
    title: "Yes, It Is The Same  #2-3-sha-ger #StandWithIsrael  #Antisemitism #UsefullIdiots Credit: @J.Majburd",
    tags: ["StandWithIsrael", "Antisemitism", "UsefullIdiots"],
  },


{
    filename: "1042.png",
    category: "Influencers"
    title: "Look! It’s a Rainbo..ohhh  #2-3-sha-ger #StandWithIsrael  #HamasTerrorists #IranTerrorist #RadicalIslam Credit: @J.Majburd",
    tags: ["StandWithIsrael", "HamasTerrorists", "IranTerrorist", "RadicalIslam"],
  },
];
export const getTags = () => {
  const allTags = _.uniq(_.flatMap(posts.map((post) => post.tags)));
  return allTags;
};
