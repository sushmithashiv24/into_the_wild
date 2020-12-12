import React, { useState } from "react";
import "./styles.css";

const wholeDB = {
  "🐉": "Dragon",
  "🦦": "Otter",
  "🐺": "Wolf",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐆": "Leopard",
  "🐅": "Tiger",
  "🐡": "Blowfish",
  "🦂": "Scorpion",
  "🕷️": "Spider",
  "🐋": "Whale",
  "🐸": "Frog",
  "🦉": "Owl",
  "🐟": "Fish",
  "🦈": "Shark",
  "🐬": "Dolphin",
  "🐙": "Octopus",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐧": "Penguin",
  "🐊": "Crocodile",
  "🦅": "Eagle",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🦍": "Gorilla",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🕊️": "Dove",
  "🦖": "T-Rex",
  "🦕": "Sauropod",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐄": "Cow",
  "🐃": "Water Buffalo",
  "🐂": "Ox",
  "🐑 ": "Ewe",
  "🐐": "Goat",
  "🐌": "Snail",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🐝": "Honeybee",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐇": "Rabbit",
  "🦘": "Kangaroo",
  "🦋": "Butterfly",
  "🐨": "Koala",
  "🐼": "Panda",
  "🐒": "Monkey",
  "🦧": "Orangutan",
  "🐕": "Dog",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐖": "Pig",
  "🐗": "Boar",
  "🦗": "Cricket",
  "🐞": "Lady Beetle",
  "🐿️": "Chipmunk",
  "🐜": "Ant",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🦔": "Hedgehog",
  "🐹": "Hamster",
  "🐠": "Tropical Fish",
  "🐛": "Bug",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐔": "Chicken",
  "🦨": "Skunk",
  "🦡": "Badger",
  "🦆": "Duck",
  "🦥": "Sloth",
  "🐦": "Bird",
  "🦃": "Turkey",
  "🦢": "Swan",
  "🦩": "Flamingo"
};

const carniEmojiDb = {
  "🐉": "Dragon",
  "🦦": "Otter",
  "🐺": "Wolf",
  "🐈": "Cat",
  "🦁 ": "Lion",
  "🐆": "Leopard",
  "🐅": "Tiger",
  "🐡": "Blowfish",
  "🦂": "Scorpion",
  "🕷️": "Spider",
  "🐋": "Whale",
  "🐸": "Frog",
  "🦉": "Owl",
  "🐟": "Fish",
  "🦈": "Shark",
  "🐬": "Dolphin",
  "🐙": "Octopus",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐧": "Penguin",
  "🐊": "Crocodile",
  "🦅": "Eagle",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake"
};

const herbiEmojiDb = {
  "🦍": "Gorilla",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🕊️": "Dove",
  "🦖": "T-Rex",
  "🦕": "Sauropod",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐄": "Cow",
  "🐃": "Water Buffalo",
  "🐂": "Ox",
  "🐑 ": "Ewe",
  "🐐": "Goat",
  "🐌": "Snail",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🐝": "Honeybee",
  "🦒": "Giraffe",
  "🐘": " Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐇": "Rabbit",
  "🦘": "Kangaroo",
  "🦋": "Butterfly",
  "🐨": "Koala",
  "🐼": "Panda"
};
const omniEmojiDb = {
  "🐒": "Monkey",
  "🦧": "Orangutan",
  "🐕": "Dog",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐖": "Pig",
  "🐗": "Boar",
  "🦗": "Cricket",
  "🐞": "Lady Beetle",
  "🐿️": "Chipmunk",
  "🐜": "Ant",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🦔": "Hedgehog",
  "🐹": "Hamster",
  "🐠": "Tropical Fish",
  "🐛": "Bug",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐔": "Chicken",
  "🦨": "Skunk",
  "🦡": "Badger",
  "🦆": "Duck",
  "🦥": "Sloth",
  "🐦": "Bird",
  "🦃": "Turkey",
  "🦢": "Swan",
  "🦩": "Flamingo"
};

export default function App() {
  // let keys = Object.keys(emojiDictionary);
  let carni = Object.keys(carniEmojiDb);
  let herbi = Object.keys(herbiEmojiDb);
  let omni = Object.keys(omniEmojiDb);
  // console.log(keys);

  var [meaning, setInputText] = useState("");
  var [carnivo] = useState("");
  var [herbivo] = useState("");
  var [omnivo] = useState("");

  function getInputHandler(event) {
    let inputText = event.target.value;

    meaning = wholeDB[inputText];

    if (/^[a-zA-Z]+$/.test(inputText)) {
      alert("Only emoji inputs are allowed no text!");
    } else if (/^\d+$/.test(inputText)) {
      alert("Only emoji inputs are allowed no numbers!");
    } else if (meaning === undefined) {
      meaning = `Sorry, we don't have ${inputText} emoji in our database`;
    }
    setInputText(meaning);
    // carnivo = emojiDictionary[inputText];
    // herbivo = emojiDictionary[inputText];
    // omnivo = emojiDictionary[inputText];
    // if (carnivo !== undefined) {
    //   setCarniText(carnivo);
    // } else if (herbivo !== undefined) {
    //   setHerbiText(herbivo);
    // } else if (omnivo !== undefined) {
    //   setOmniText(omnivo);
    // } else {
    //   meaning = "Sorry, we don't have this in our Database";
    //   setInputText(meaning);
    // }
  }

  // function emojiClickHandler(emoji) {
  //   meaning = emojiDictionary[emoji];
  //   setInputText(meaning);
  // }

  function carniClickHandler(emoji) {
    carnivo = carniEmojiDb[emoji];
    setInputText(carnivo);
  }

  function herbiClickHandler(emoji) {
    herbivo = herbiEmojiDb[emoji];
    setInputText(herbivo);
  }

  function omniClickHandler(emoji) {
    omnivo = omniEmojiDb[emoji];
    setInputText(omnivo);
  }

  return (
    <div className="App">
      <h1 className="heading">
        <p>CODE HUB</p>
        <span role="img" aria-label="forest"></span>
        Into the Wild
      </h1>
      <h2>Enter an animal emoji or click one from below </h2>
      <input className="input" onChange={getInputHandler}></input>
      <h2 className="meaning">{meaning}</h2>

      <div className="animals-heading">Carnivores Animals</div>
      <div>
        {carni.map(function (item) {
          return (
            <span
              // key={emojis}
              className="emojis"
              onClick={() => carniClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="animals-heading">Herbivores Animals</div>
      <div>
        {herbi.map(function (item) {
          return (
            <span className="emojis" onClick={() => herbiClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
      <div className="animals-heading">Omnivores Animals</div>
      <div>
        {omni.map(function (item) {
          return (
            <span className="emojis" onClick={() => omniClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
      {/* <button onClick={getClicked}>Like</button> {likeCounter} */}

      <footer>
        <p>© | 2020 | CODE HUB </p>
      </footer>
    </div>
  );
}
