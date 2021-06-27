import React, { useState } from "react";

import { Question } from "./question";

import "./questions.css";

const content = [
  {
    key: 0,
    title: "Seriously, Don't Use Icon Fonts",
    description:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    key: 1,
    title: "Screen Readers Actually Read That Stuff",
    description:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    key: 2,
    title: "They Fail Poorly and Often",
    description:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    key: 3,
    title: "They're a Nightmare if You're Dyslexic",
    description:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
  },
  {
    key: 4,
    title: "There's Already a Better Way",
    description:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];

export const Questions = () => {
  const [activeIndexQuestion, setActiveQuestion] = useState(null);
  return (
    <div className="questions">
      {content.map(({ key, title, description }, curretIndex) => (
        <Question
          title={title}
          description={description}
          activeIndexQuestion={activeIndexQuestion}
          curretIndex={curretIndex}
          setActiveQuestion={setActiveQuestion}
          key={key}
        />
      ))}
    </div>
  );
};
