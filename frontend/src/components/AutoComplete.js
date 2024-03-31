import { useState } from "react";
import '../styles/autoComplete.css';

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const possibleValues = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "TypeScript",
    "Rust",
    "Go",
    "SQL",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "Spring",
    "ASP.NET",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Unity",
    "Unreal Engine",
    "Git",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Blockchain",
    "IoT",
    "Big Data",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "DevOps",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredSuggestions = possibleValues.filter(suggestion =>  suggestion.toLowerCase().includes(value.toLowerCase()))
      setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : ['No matches found']);
    } else {
      setSuggestions([]);
    }
  };
  const handleSuggestionClick = (value) => {
    setInputValue(value);
    setSuggestions([]);
  };
  return (
    <div className="autocomplete-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        aria-autocomplete="list"
        aria-controls="autocomplete-list"
        className="input"
        placeholder="search"
      />
      {suggestions.length > 0 && (
        <ul id="autocomplete-list" className="suggestions-list" role="listbox">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              role="option"
              aria-selected
              // Additional props
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
