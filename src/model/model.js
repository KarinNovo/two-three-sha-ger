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
    title: "Who is the villain? #2-3-sha-ger",
    tags: [
      "WarCrimes",
      "TheWestIsNext",
      "HamasisISIS",
      "Propagaza",
      "shieldren",
    ],
  },
  {
    filename: "2.jpg",
    title: "Same Jihadist terror, different years.#2-3-sha-ger Credit: @ellakenan",
    tags: [
      "tError",
      "HamasisISIS",
      "TheWestIsNext",
      "CeasefireNOW",
      "Propagaza",
       "ellakenan",
      
    ],
  },
  {
    filename: "3.jpg",
    title: "True shared values and who aims to disrupt them. #2-3-sha-ger",
    description:
      "People tear down the American flag, In pro-Israeli protests they raise the American flag high.",
    tags: [
      "Westurn",
      "Woke",
      "ProPalestineRally",
      "StandWithIsrael",
      "CeasefireNOW",
    ],
  },
  {
    filename: "4.jpg",
    title: "This is not human. Right(s)?. #2-3-sha-ger",
    tags: ["HumanRights", "shieldren", "WarCrimes", "HamasisISIS", "Woke"],
  },
  {
    filename: "5.jpg",
    title:
      "*After all hostages—men, women, and children—are immediately released and safely return to Israel. #2-3-sha-ger",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "CeasefireNOW",
      "StandWithIsrael",
      "shieldren",
      "ellakenan",
    ],
  },
  {
    filename: "6.jpg",
    title: "Is this your strategic shielding? #2-3-sha-ger",
    tags: ["shieldren", "WarCrimes", "HamasisISIS", "HumanRights", "Propagaza"],
  },
  {
    filename: "7.jpg",
    title: "How to avoid #Propagaza? #2-3-sha-ger Credit: @Kerenaz",
    tags: ["Propagaza", "Woke", "MediaBias", "TheWestIsNext", "CeasefireNOW", "KerenAzaria"],
  },
  {
    filename: "8.jpg",
    title:
      "Operational headquarters, weapons and technological equipment in the #MRI building at #ShifaHospital. #2-3-sha-ger",
    tags: [
      "ShifaTerrorHQ",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
      "TheWestIsNext",
      "IDF spokesperson"
    ],
  },
  {
    filename: "9.jpg",
    title: "What does the Red Cross do for human rights? #2-3-sha-ger",
    description: "",
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "CeasefireNOW",
      "shieldren",
      "StandWithIsrael",
    ],
  },
  {
    filename: "10.jpg",
    title: "Am Israel Chai. #2-3-sha-ger",
    description: ``,
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "TheWestIsNext",
      "Woke",
      "CeasefireNOW",
    ],
  },
  {
    filename: "11.jpg",
    title: "No, Women, No cry. #2-3-sha-ger",
    description: `This is YOU! if you don't WAKE UP!
  Don’t sell who you are to a religious death cult, #HamasisISIS
 
  There are 240 Israeli Civilians and other nationalities that are hostages in Gaza, 30 of them are kids. #bringthemhomenow #bringthemhome`,
    tags: ["TheWestIsNext", "Hostages", "BringThemHomeNow", "WarCrimes", " Yana Yanuchka"],
  },
  {
    filename: "12.jpg",
    title:
      "30 KIDS are hostages by HamasisISIS in Gaza, Can you find our little girl?. #2-3-sha-ger",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "WarCrimes",
      "HamasisISIS",
      "CeasefireNOW",
    ],
  },
  {
    filename: "13.jpg",
    title: "CANCEL anyone who lift their head and supports terror. #2-3-sha-ger",
    tags: [
      "TheWestIsNext",
      "TerrorSplaining",
      "WarCrimes",
      "Propagaza",
      "CeasefireNOW",
    ],
  },
  {
    filename: "14.jpg",
    title: "Never Again, Again. #2-3-sha-ger",
    tags: [
      "AntiZionism",
      "Antisemitism",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
    ],
  },
  {
    filename: "15.jpg",
    title: "Is it human to use a human shield?. #2-3-sha-ger",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "HumanRights",
      "WarCrimes",
      "CeasefireNOW",
    ],
  },
  {
    filename: "16.jpg",
    title: "Save the world from HamasisISIS. #2-3-sha-ger",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "CeasefireNOW",
      "TheWestIsNext",
    ],
  },
  {
    filename: "17.jpg",
    title: "You got confused, it is Rational Socialism not National Socialism!. #2-3-sha-ger",
    tags: ["Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },
  {
    filename: "18.jpg",
    title: "Do you know what you are fighting for??. #2-3-sha-ger",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW",
    ],
  },
  {
    filename: "19.jpg",
    title: "Choose your club. #2-3-sha-ger Credit: @ellakenan",
    tags: ["HamasisISIS", "WarCrimes", "HumanRights", "EllaKenan"],
  },
 
  {
    filename: "22.png",
    title: "Is it Illegal to Defend Myself? #2-3-sha-ger",
    tags: [ "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW"],
  },

  {
    filename: "23.png",
    title: "Does the Quran allow this atrocity? #2-3-sha-ger",
    tags: ["Islam", "Religion", "HamasisISIS", "WarCrimes",],
  },

  {
    filename: "24.png",
    title: "FreePalestine = FreeVandalists. #2-3-sha-ger",
    tags: [ "Vandalists", "HamasisISIS", "WarCrimes",],
  },

  {
    filename: "25.png",
    title: "May Hell be with You. #2-3-sha-ger",
    tags: [ "WarCrimes", "Hostages"],
  },

  

  {
    filename: "27.png",
    title: "#MeJew #2-3-sha-ger",
    tags: ["Jews", "Holocaust", "GazaLight", "MeJewMeToo"],
  },

  {
    filename: "28.png",
    title: "You Know Nothing. #2-3-sha-ger",
    tags: ["HAMAS", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },

  {
    filename: "29.png",
    title: "Your Child for Dinner? Why Not? #2-3-sha-ger",
    tags: ["WarCrimes", "Jews", "Holocaust"],
  },

  {
    filename: "30.png",
    title: "FREE PALESTINE? #2-3-sha-ger",
    tags: ["UsefullIdiots", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },
  {
    filename: "31.png",
    title: "Is Hamas Human? #2-3-sha-ger",
    tags: ["HamasisISIS", "FreeGazaFromHamas"],
  },


{
    filename: "32.png",
    title: "BRING THEM HOME ! #2-3-sha-ger",
    tags: ["RedCross", "StandWithUs"],
  },


{
    filename: "33.png",
    title: "Shame on You Harvard #2-3-sha-ger",
    tags: ["University", "standwithisrael","StopAntisemitism"],
  },


{
    filename: "34.png",
    title: "Nevr Again? #2-3-sha-ger",
    tags: ["HamasisISIS", "bringthemhome", "standwithisrael"],
  },

{
    filename: "35.png",
    title: "They’re All the SAME #2-3-sha-ger",
    tags: ["HamasisISIS", "Nazism"],
  },


{
    filename: "36.png",
    title: "BRING THEM HOME, NOW !!! #2-3-sha-ger",
    tags: ["bringthemhome", "standwithisrael"],
  },


{
    filename: "37.png",
    title: "Why is There a Time Limit Only When it Comes to Israel? #2-3-sha-ger",
    tags: ["standwithisrael", "bringthemhome"],
  },


{
    filename: "38.png",
    title: "I’M OK ? #2-3-sha-ger",
    tags: ["HamasisISIS", "InnocentWomen", "InnocentChildren"],
  },


{
    filename: "40.png",
    title: "Oops..#2-3-sha-ger",
    tags: ["HamasisISIS","Hypocrisy"]
  },


{
    filename: "41.png",
    title: "Who is the Giving Tree? #2-3-sha-ger",
    tags: ["HumanitarianCrisisLie", "HamasisISIS","Hypocrisy"],
  },

{
    filename: "42.png",
    title: "World’s Twisted Point of View #2-3-sha-ger",
    tags: ["HamasisISIS", , "standwithisrael"],
  },
  
{
    filename: "100.jpg",
    title: "UN secretary general, UNICEF and United Nations do not care about Israeli children. #2-3-sha-ger #WorldChildrensDay #standwithisrael Credit:@ellakenan",
    tags: ["WorldChildrensDay", "standwithisrael","ellakenan" ],
  },

{
    filename: "101.jpg",
    title: "This children's day we call for the return of our children and all hostages. #2-3-sha-ger #WorldChildrensDay #standwithisrael #BringThemBack #BringThemBackHome #Hamasisisis Credit:@ellakenan",
    tags: ["BringThemBack", "BringThemBackHome", "Hamasisisis" ,"WorldChildrensDay", "standwithisrael","ellakenan" ],
  },
  
{
    filename: "102.jpg",
    title: "Please take an immediate stance against Jihadi terrorist support on campus. #2-3-sha-ger #standwithisrael #Hamasisisis Credit:@ellakenan",
    tags: ["Hamasisisis", "standwithisrael", "ellakenan" ],
  },
{
    filename: "103.jpg",
    title: "Gen Z in the US is really the biggest disappointment of all time. #2-3-sha-ger #standwithisrael #TheWestIsNext #Educateyourself Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
  },  
{
    filename: "104.jpg",
    title: "The New American Idol? #TheWestIsNext #Educateyourself #2-3-sha-ger #standwithisrael Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
  }, 
{
    filename: "105.jpg",
    title: "Did you ever question yourself why was it so easy to make you a useful idiot in the service of ISIS? #2-3-sha-ger #standwithisrael #HamasisISIS #Educateyourself Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  }, 
{
    filename: "106.jpg",
    title: "Imagine that Hamas-ISIS has infiltrated your village, murdered you friends, family and kidnapped you days before giving birth. #2-3-sha-ger #standwithisrael #HamasisISIS #WomanRights Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
  }, 
{
    filename: "107.jpg",
    title: "An Israeli woman, in the last weeks of her final trimester, was kidnapped to Gaza on October 7th and had to give birth while in captivity. #2-3-sha-ger #standwithisrael #HamasisISIS #WomanRights Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
  }, 
{
    filename: "108.jpg",
    title: "Roger Waters, WE know what happened. Hamas terrorists broke into our cities, butchered our citizens, raped our women, and took our children hostage. #2-3-sha-ger #standwithisrael  #HamasisISIS #Educateyourself  Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  }, 
{
    filename: "109.jpg",
    title: "Current state of higher education in the US. #standwithisrael #2-3-sha-ger #educateyourself #University Credit:@ellakenan",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  },
{
    filename: "110.jpg",
    title: "This is how you look. #standwithisrael #hamasisisis #educateyourself #2-3-sha-ger #University Credit:@ellakenan",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  },
 {
    filename: "111.jpg",
    title: "Imagine failing to understand the undeniable facts - It's Israel now, your home is next.Angelina I'm talking to you. #2-3-sha-ger @Angelina Jolie #thewestisnext #standwithisrael #freegazafromhamas Credit:@ellakenan",
    tags: ["standwithisrael","Educateyourself", "freegazafromhamas" ,"ellakenan" ],
  },
 {
    filename: "112.jpg",
    title: "Hamas is the sole cause of suffering both in Israel and in Gaza. #freepalestinefromhamas #humanrights #humanity #standwithisrael #2-3-sha-ger Credit:@ellakenan",
    tags: ["standwithisrael","Educateyourself", "humanrights", "freegazafromhamas" ,"ellakenan" ],
  },
{
    filename: "113.jpg",
    title: "Amongst the 241 people there are more than 30 babies and children, some without their parents! #2-3-sha-ger #bringthemhomenow #humanrights #humanity #standwithisrael #freegazafromhamas Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","ellakenan" ],
  },
  {
    filename: "114.jpg",
    title: "There cannot be a humanitarian ceasefire withou their release. 9 months-year-old babies! 85-year-olds! Please share. #2-3-sha-ger#HamasisISIS #TheWestlsNext #BringThemBack #BringThemHomeNow #standwithisrael Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","HamasisISIS","TheWestlsNext", "BringThemBack", "BringThemHomeNow", "standwithisrael", "ellakenan" ],
  },
  {
    filename: "83.jpg",
    title: "Ignoring the unprecedented, premeditated and extreme cruelty of the sexual violence committed by Hamas, means not only failing Israeli women but failing the ENTIRE international human rights system. #2-3-sha-ger #StandWithIsrael #WomenRights #MeJewMeToo Credit: @Tina Nordahl Nissim ",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],
  },
{
    filename: "84.jpg",
    title: "#MeJewMeToo #2-3-sha-ger",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],

  },
{
    filename: "85.jpg",
    title: "We fight to save our kids, Hamas uses their kids as human shields. #2-3-sha-ger#StandWithIsrael #CeaseFire Credit: @ellakenan ",
    tags: ["StandWithIsrael", "CeaseFire", "ellakenan"],
  },
  {
    filename: "400.jpg.jpg",
    title: "The IDF found a terrorist rocket in a little girl's bed Beit Hanoun. Another hectic abuse of civilians. Did we say human shield already? #2-3-sha-ger Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "shieldren", "WarCrimes", "YosephHaddad"],
  },


{
    filename: "401.jpg.jpg",
    title: "16th November 2023 - These were found on 3 terrorists from Hebron, making their way to kill jews in Jerusalem. Several security forces were injured. Help us stop them now. #2-3-sha-ger Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "MeJewMeToo", "StopItNow", "YosephHaddad"],
  },


{
    filename: "402.jpg.jpg",
    title: "An injured Jewish hero is being treated by an Arab Muslim hero nurse. This is the real partnership the world should see! Jews and Arabs live in harmony and peace. This is the only way and this is what we want. #2-3-sha-ger Credit: @yosephhaddad",
    tags: ["HumanRights", "StandWithIsrael", "FreeGazaFromHamas", "YosephHaddad"],
  },


{
    filename: "403.jpg.jpg",
    title: "The German football club SV Werder Bremen support in Israel and the 250 (!!!!) israeli hostages. This is how all sports clubs around the world should act. Thank you for standing with Israel @werderbremen! #2-3-sha-ger Credit: @yosephhaddad",
    tags: ["Hostages", "StandWithIsrael", "BringThemHomeNow", "WarCrimes", "HumanRights", "YosephHaddad"],
  },


{
    filename: "404.jpg.jpg",
    title: "Who is the villain? #2-3-sha-ger Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "TheWestIsNext", "Propagaza", "YosephHaddad"],
  },


{
    filename: "405.jpg.jpg",
    title: "Hamas weapons were found in a Kindergarten in Gaza. We also want to stop the human shield and free Palestine from Hamas…#2-3-sha-ger Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "shieldren", "YosephHaddad"],
  },


{
    filename: "406.jpg",
    title: "Violence creates more violence. Education to violence leads to more violence…#2-3-sha-ger Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "violence", "YosephHaddad"],
  },


{
    filename: "800.jpg",
    title: "Is there still hope for peace? I really wish there is… Picture by: Emad Hajjaj (Jordan) #2-3-sha-ger",
    tags: ["StandWithIsrael", "PeaceInTheMiddleEast", "StopItNow"],
  },



{
    filename: "407.jpg",
    title: "Knowing in advance about the planned massacre and not doing anything to stop it is a war crime! Blood on your hands! You call yourself Journalists? Shame on you!#2-3-sha-ger Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "WarCrimes", "HumanRights", "YosephHaddad"],
  },
  {
    filename: "201.png",
    title: "Israel Explained. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "TheNewYorkTimes", "NoaTishby"],
  },


{
    filename: "202.png",
    title: "Kidnapped From Israel. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "BringThemHomeNow","NoaTishby"],
  },


{
    filename: "203.png",
    title: "Bring Them Home. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "BringThemBack","NoaTishby"],
  },


{
    filename: "204.png",
    title: "BBC fake it till you make it. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "MediaBias","NoaTishby"],
  },


{
    filename: "205.png",
    title: "Anti-Zionism = Antisemitism. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "StopAntisemitism","NoaTishby"],
  },


{
    filename: "206.png",
    title: "Antisemitic Students. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "StopAntisemitism","NoaTishby"],
  },
{
    filename: "207.png",
    title: "Stop Antesimitism. #2-3-sha-ger Credit:@noatishby",
    tags: ["StandWithIsrael", "ProPalestineRally","NoaTishby" ],
  },
  {
    filename: "86.jpg",
    title: "Beautiful young lady @edenkhalifa in Tel Aviv standing up for her country Israel. Why do we never hear of Arabs like her? The media only showcases anti-Jew Arabs. #2-3-sha-ger #StandWithIsrael. Credit:@TimeToStandUpForIsrael",
    tags: ["StandWithIsrael", "TimeToStandUpForIsrael"],
  },
   {
    filename: "300.png",
    title: "Umm…absolutely not. #2-3-sha-ger #jewishhumor Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "JewishHumor"],
  },
  {
    filename: "301.png",
    title: "Having “the talk” about birds and bees was a breeze compared to dismantling antisemitic tropes picked up at college. #2-3-sha-ger #Truth #endjewhatred Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "EndJewHatred"],
  },
  {
    filename: "302.png",
    title: "Hate crimes = jail time.Choose midterms instead of prison terms. #2-3-sha-ger #Truth Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "University"],
  },
  {
    filename: "303.png",
    title: "Antisemitism is never an option. #2-3-sha-ger #endjewhatred  Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "University"],
  },
  {
    filename: "304.png",
    title: "We need you now more than ever. #2-3-sha-ger #endjewhatred #activism. Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "Activism", "EndJewHatred"],
  },
  {
    filename: "305.png",
    title: "“The silence continued. That’s when we all began to wonder if we were safe.” - @juliannamargulies for @usatoday Link in @jewbelong bio to entire article. #2-3-sha-ger Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "Activism", "EndJewHatred"],
  },
];
export const getTags = () => {
  const allTags = _.uniq(_.flatMap(posts.map((post) => post.tags)));
  return allTags;
};
