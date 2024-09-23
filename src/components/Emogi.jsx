import React from "react";
import EmogiCard from "./EmogiCard";

const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
  ];

  // const result = emojipedia.map(function(n){
  //   return n.meaning.substring(0, 100) + "..."
  // })
  var result = emojipedia.map((e) => (e.meaning))
  


  

function Emogi() {
  return (
    <div>
      <h1 className="h1_emogi">
        <span>Emogipedia</span>
      </h1>
      <p>{result}</p>

      <dl className="dictionary">

        {emojipedia.map((element) => (<EmogiCard key={element.id} emoji={element.emoji} name={element.name} meaning={element.meaning}/>))}
       
      </dl>
    </div>
  );
}

export default Emogi;
