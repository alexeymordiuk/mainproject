import "swiper/css/bundle";
import React from 'react'
import Header from './component/header/Header'
import Books from './component/books/Books'
import Author from './component/authorabout/Author'
import Trusted from './component/trusted/Trusted'
import Learn from './component/learn/Learn'
import Testimonials from './component/testimonials/Testimonials'
import Articles from './component/swiper/Articles'
import Subscribe from "./component/subscribe/Subscribe";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
	 <>
	 <Header/>
	 <Books/>
	 <Author/>
	 <Trusted/>
	 <Learn/>
	 <Testimonials/>
	 <Articles/>
	 <Subscribe/>
	 <Footer/>
	 </>
  )
}

export default App