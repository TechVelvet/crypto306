import React from 'react'

const ImageField = ({ taggedElem, altText, className, onClick, style }) => {
  return (
    <>
      <img src={taggedElem} alt={altText} className={className} onClick={onClick} style={style} />
    </>
  )
}

export default ImageField