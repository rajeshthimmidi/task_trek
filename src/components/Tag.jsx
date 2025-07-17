import React from 'react'
import './Tag.css'
const Tag = ({ tagName, selectTag, selected }) => {
  const SelectedStyles = {
  "HTML": { backgroundColor: "orange", color: "white" },
  "CSS": { backgroundColor: "blue", color: "white" },
  "JavaScript": { backgroundColor: "yellow", color: "black" },
  "React": { backgroundColor: "cyan", color: "black" },
  "Default": { backgroundColor: "gray", color: "white" }
  }
  return (
    <div>

        <button type="button" className='tags' onClick={() => selectTag(tagName)} style={selected ? SelectedStyles[tagName] : SelectedStyles.Default }>{tagName}</button>
    </div>
  )
}

export default Tag;