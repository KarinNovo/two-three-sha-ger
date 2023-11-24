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
    title: "Who is the villain?",
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
    title: "Same Jihadist terror, different years.",
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
    title: "True shared values and who aims to disrupt them..",
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
    title: "This is not human. Right(s)?.",
    tags: ["HumanRights", "shieldren", "WarCrimes", "HamasisISIS", "Woke"],
  },
  {
    filename: "5.jpg",
    title:
      "*After all hostages—men, women, and children—are immediately released and safely return to Israel.",
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
    title: "Is this your strategic shielding?",
    tags: ["shieldren", "WarCrimes", "HamasisISIS", "HumanRights", "Propagaza"],
  },
  {
    filename: "7.jpg",
    title: "How to avoid #Propagaza? Credit: @Kerenaz",
    tags: ["Propagaza", "Woke", "MediaBias", "TheWestIsNext", "CeasefireNOW", "KerenAzaria"],
  },
  {
    filename: "8.jpg",
    title:
      "Operational headquarters, weapons and technological equipment in the #MRI building at #ShifaHospital",
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
    title: "What does the Red Cross do for human rights?",
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
    title: "Am Israel Chai",
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
    title: "No, Women, No cry.",
    description: `This is YOU! if you don't WAKE UP!
  Don’t sell who you are to a religious death cult, #HamasisISIS
 
  There are 240 Israeli Civilians and other nationalities that are hostages in Gaza, 30 of them are kids. #bringthemhomenow #bringthemhome`,
    tags: ["TheWestIsNext", "Hostages", "BringThemHomeNow", "WarCrimes", " Yana Yanuchka"],
  },
  {
    filename: "12.jpg",
    title:
      "30 KIDS are hostages by HamasisISIS in Gaza, Can you find our little girl?.",
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
    title: "CANCEL anyone who lift their head and supports terror.",
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
    title: "Never Again, Again",
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
    title: "Is it human to use a human shield?",
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
    title: "Save the world from HamasisISIS",
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
    title: "You got confused, it is Rational Socialism not National Socialism!",
    tags: ["Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },
  {
    filename: "18.jpg",
    title: "Do you know what you are fighting for??",
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
    title: "Choose your club",
    tags: ["HamasisISIS", "WarCrimes", "HumanRights", "EllaKenan"],
  },
 
  {
    filename: "22.png",
    title: "Is it Illegal to Defend Myself?",
    tags: [ "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW"],
  },

  {
    filename: "23.png",
    title: "Does the Quran allow this atrocity?",
    tags: ["Islam", "Religion", "HamasisISIS", "WarCrimes",],
  },

  {
    filename: "24.png",
    title: "FreePalestine = FreeVandalists",
    tags: [ "Vandalists", "HamasisISIS", "WarCrimes",],
  },

  {
    filename: "25.png",
    title: "May Hell be with You",
    tags: [ "WarCrimes", "Hostages"],
  },

  

  {
    filename: "27.png",
    title: "#MeJew",
    tags: ["Jews", "Holocaust", "GazaLight", "MeJewMeToo"],
  },

  {
    filename: "28.png",
    title: "You Know Nothing",
    tags: ["HAMAS", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },

  {
    filename: "29.png",
    title: "Your Child for Dinner? Why Not?",
    tags: ["WarCrimes", "Jews", "Holocaust"],
  },

  {
    filename: "30.png",
    title: "FREE PALESTINE?",
    tags: ["UsefullIdiots", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },
  {
    filename: "31.png",
    title: "Is Hamas Human?",
    tags: ["HamasisISIS", "FreeGazaFromHamas"],
  },


{
    filename: "32.png",
    title: "BRING THEM HOME !",
    tags: ["RedCross", "StandWithUs"],
  },


{
    filename: "33.png",
    title: "Shame on You Harvard",
    tags: ["University", "standwithisrael","StopAntisemitism"],
  },


{
    filename: "34.png",
    title: "Nevr Again?",
    tags: ["HamasisISIS", "bringthemhome", "standwithisrael"],
  },

{
    filename: "35.png",
    title: "They’re All the SAME",
    tags: ["HamasisISIS", "Nazism"],
  },


{
    filename: "36.png",
    title: "BRING THEM HOME, NOW !!!",
    tags: ["bringthemhome", "standwithisrael"],
  },


{
    filename: "37.png",
    title: "Why is There a Time Limit Only When it Comes to Israel?",
    tags: ["standwithisrael", "bringthemhome"],
  },


{
    filename: "38.png",
    title: "I’M OK ?",
    tags: ["HamasisISIS", "InnocentWomen", "InnocentChildren"],
  },


{
    filename: "40.png",
    title: "Oops..",
    tags: ["HamasisISIS","Hypocrisy"]
  },


{
    filename: "41.png",
    title: "Who is the Giving Tree?",
    tags: ["HumanitarianCrisisLie", "HamasisISIS","Hypocrisy"],
  },

{
    filename: "42.png",
    title: "World’s Twisted Point of View",
    tags: ["HamasisISIS", , "standwithisrael"],
  },
  
{
    filename: "100.jpg",
    title: "UN secretary general, UNICEF and United Nations do not care about Israeli children. #WorldChildrensDay #standwithisrael Credit:@ellakenan",
    tags: ["WorldChildrensDay", "standwithisrael","ellakenan" ],
  },

{
    filename: "101.jpg",
    title: "This children's day we call for the return of our children and all hostages. #WorldChildrensDay #standwithisrael #BringThemBack #BringThemBackHome #Hamasisisis Credit:@ellakenan",
    tags: ["BringThemBack", "BringThemBackHome", "Hamasisisis" ,"WorldChildrensDay", "standwithisrael","ellakenan" ],
  },
  
{
    filename: "102.jpg",
    title: "Please take an immediate stance against Jihadi terrorist support on campus. #standwithisrael #Hamasisisis Credit:@ellakenan",
    tags: ["Hamasisisis", "standwithisrael", "ellakenan" ],
  },
{
    filename: "103.jpg",
    title: "Gen Z in the US is really the biggest disappointment of all time. #standwithisrael #TheWestIsNext #Educateyourself Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
  },  
{
    filename: "104.jpg",
    title: "The New American Idol? #TheWestIsNext #Educateyourself #standwithisrael Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
  }, 
{
    filename: "105.jpg",
    title: "Did you ever question yourself why was it so easy to make you a useful idiot in the service of ISIS? #standwithisrael #HamasisISIS #Educateyourself Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  }, 
{
    filename: "106.jpg",
    title: "Imagine that Hamas-ISIS has infiltrated your village, murdered you friends, family and kidnapped you days before giving birth. #standwithisrael #HamasisISIS #WomanRights Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
  }, 
{
    filename: "107.jpg",
    title: "An Israeli woman, in the last weeks of her final trimester, was kidnapped to Gaza on October 7th and had to give birth while in captivity. #standwithisrael #HamasisISIS #WomanRights Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
  }, 
{
    filename: "108.jpg",
    title: "Roger Waters, WE know what happened. Hamas terrorists broke into our cities, butchered our citizens, raped our women, and took our children hostage. #standwithisrael  #HamasisISIS #Educateyourself  Credit:@ellakenan",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  }, 
{
    filename: "109.jpg",
    title: "Current state of higher education in the US. #standwithisrael #hamasisisis #educateyourself #education #learning #university Credit:@ellakenan",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  },
{
    filename: "110.jpg",
    title: "This is how you look. #standwithisrael #hamasisisis #educateyourself #education #learning #university Credit:@ellakenan",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
  },
 {
    filename: "111.jpg",
    title: "Imagine failing to understand the undeniable facts - It's Israel now, your home is next.Angelina I'm talking to you. @Angelina Jolie #thewestisnext #standwithisrael #freegazafromhamas Credit:@ellakenan",
    tags: ["standwithisrael","Educateyourself", "freegazafromhamas" ,"ellakenan" ],
  },
 {
    filename: "112.jpg",
    title: "Hamas is the sole cause of suffering both in Israel and in Gaza. #freepalestinefromhamas #humanrights #humanity #standwithisrael #freegazafromhamas Credit:@ellakenan",
    tags: ["standwithisrael","Educateyourself", "humanrights", "freegazafromhamas" ,"ellakenan" ],
  },
{
    filename: "113.jpg",
    title: "Amongst the 241 people there are more than 30 babies and children, some without their parents! #bringthemhomenow #humanrights #humanity #standwithisrael #freegazafromhamas Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","ellakenan" ],
  },
  {
    filename: "114.jpg",
    title: "There cannot be a humanitarian ceasefire withou their release. 9 months-year-old babies! 85-year-olds! Please share.#HamasisISIS #TheWestlsNext #BringThemBack #BringThemHomeNow #standwithisrael Credit:@ellakenan",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","HamasisISIS","TheWestlsNext", "BringThemBack", "BringThemHomeNow", "standwithisrael", "ellakenan" ],
  },
  {
    filename: "83.jpg",
    title: "Ignoring the unprecedented, premeditated and extreme cruelty of the sexual violence committed by Hamas, means not only failing Israeli women but failing the ENTIRE international human rights system. #StandWithIsrael #WomenRights #MeJewMeToo Credit: @Tina Nordahl Nissim ",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],
  },
{
    filename: "84.jpg",
    title: "#MeJewMeToo",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],

  },
{
    filename: "85.jpg",
    title: "We fight to save our kids, Hamas uses their kids as human shields.#StandWithIsrael #CeaseFire Credit: @ellakenan ",
    tags: ["StandWithIsrael", "CeaseFire", "ellakenan"],
  },
  {
    filename: "400.jpg",
    title: "The IDF found a terrorist rocket in a little girl's bed Beit Hanoun. Another hectic abuse of civilians. Did we say human shield already? Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "shieldren", "WarCrimes"],
  },


{
    filename: "401.jpg",
    title: "16th November 2023 - These were found on 3 terrorists from Hebron, making their way to kill jews in Jerusalem. Several security forces were injured. Help us stop them now. Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "MeJewMeToo", "StopItNow"],
  },


{
    filename: "402.jpg",
    title: "An injured Jewish hero is being treated by an Arab Muslim hero nurse. This is the real partnership the world should see! Jews and Arabs live in harmony and peace. This is the only way and this is what we want. Credit: @yosephhaddad",
    tags: ["HumanRights", "StandWithIsrael", "FreeGazaFromHamas"],
  },


{
    filename: "403.jpg",
    title: "The German football club SV Werder Bremen support in Israel and the 250 (!!!!) israeli hostages. This is how all sports clubs around the world should act. Thank you for standing with Israel @werderbremen! Credit: @yosephhaddad",
    tags: ["Hostages", "StandWithIsrael", "BringThemHomeNow", "WarCrimes", "HumanRights"],
  },


{
    filename: "404.jpg",
    title: "Who is the villain? Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "TheWestIsNext", "Propagaza"],
  },


{
    filename: "405.jpg",
    title: "Hamas weapons were found in a Kindergarten in Gaza. We also want to stop the human shield and free Palestine from Hamas… Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "shieldren"],
  },


{
    filename: "406.jpg",
    title: "Violence creates more violence. Education to violence leads to more violence… Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "violence"],
  },


{
    filename: "800.jpg",
    title: "Is there still hope for peace? I really wish there is… Picture by: Emad Hajjaj (Jordan)",
    tags: ["StandWithIsrael", "PeaceInTheMiddleEast", "StopItNow"],
  },



{
    filename: "407.jpg",
    title: "Knowing in advance about the planned massacre and not doing anything to stop it is a war crime! Blood on your hands! You call yourself Journalists? Shame on you!  … Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "WarCrimes", "HumanRights"],
  },
  {
    filename: "201.jpg",
    title: "An Israeli Explainer Credit:@noatishbi",
    tags: ["StandWithIsrael", "TheNewYorkTimes"],
  },


{
    filename: "202.jpg",
    title: "Kidnapped From Israel Credit:@noatishbi",
    tags: ["StandWithIsrael", "BringThemHomeNow"],
  },


{
    filename: "203.jpg",
    title: "Bring Them Home Credit:@noatishbi",
    tags: ["StandWithIsrael", "BringThemBack"],
  },


{
    filename: "204.jpg",
    title: "BBC fake it till you make it Credit:@noatishbi",
    tags: ["StandWithIsrael", "MediaBias"],
  },


{
    filename: "205.jpg",
    title: "Anti-Zionism = Antisemitism Credit:@noatishbi",
    tags: ["StandWithIsrael", "StopAntisemitism"],
  },


{
    filename: "206.jpg",
    title: "Antisemitic Students Credit:@noatishbi",
    tags: ["StandWithIsrael", "StopAntisemitism"],
  },
{
    filename: "207.jpg",
    title: "Stop Antesimitism Credit:@noatishbi",
    tags: ["StandWithIsrael", "ProPalestineRally"],
  },
  {
    filename: "86.jpg",
    title: "Beautiful young lady in Tel Aviv standing up for her country Israel. Why do we never hear of Arabs like her? The media only showcases anti-Jew Arabs #StandWithIsrael. Credit:@Time To Stand Up For Israel",
    tags: ["StandWithIsrael", "TimeToStandUpForIsrael"],
  },
];
export const getTags = () => {
  const allTags = _.uniq(_.flatMap(posts.map((post) => post.tags)));
  return allTags;
};
