import React from 'react'
import './Suggestion.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../../img/1.png'
import image2 from '../../img/2.jpg'
import image3 from '../../img/3.jpg'
import image4 from '../../img/4.png'
import image5 from '../../img/5.png'
import image6 from '../../img/6.png'
import image7 from '../../img/7.png'
const Suggestions = () => {
  
  return(
  <div className='suggestions'>
      <span className='Sug'>Suggestions</span>
      <AliceCarousel>
     <img src={image1} alt="Image 1" title="Image 1" />
    <img src={image2} alt="Image 2" title="Image 2" />
     <img src={image3} alt="Image 3" title="Image 3" />
      <img src={image4} alt="Image 4" title="Image 4" />
      <img src={image5} alt="Image 5" title="Image 5" />
      <img src={image6} alt="Image 6" title="Image 6" />
       <img src={image7} alt="Image 7" title="Image 7" /> 
     </AliceCarousel>
      </div>
  )
}

export default Suggestions
