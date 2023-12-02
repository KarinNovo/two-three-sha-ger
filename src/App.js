
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faShareAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu';
import Filter from './components/Filter';
import ContentList from './components/ContentList';
import * as model from './model/model';
import categoryHashtagsMap from './components/categoryHashtagsMap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstagramCallback from './components/InstagramCallback';
import RocketAnimation from './components/RocketAnimation';


const categories = Object.keys(categoryHashtagsMap);

function App() {
  const [selectedTag, setSelectedTag] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [posts, setPosts] = useState(model.posts);
  const [showInstructions, setShowInstructions] = useState(false);

  const categorySelected = (category) => {
    setSelectedCategory(category);
    setPosts(model.posts.filter((post) => post.category === category));
  };

  const tagSelected = (tag) => {
    setSelectedTag(tag);
    setPosts(model.posts.filter((post) => post.tags.includes(tag)));
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const buttonStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4px',
    padding: '2px 6px',
    height: 'auto',
    textAlign: 'center',
    color: 'white',
    borderRadius: '8px',
    border: '1px solid #CDE0FE',
    background: '#00008B',
    fontSize: 'smaller'
  };
  <div className="rocket-animation-container">
  <RocketAnimation />
  </div>

useEffect(() => {
  const visited = localStorage.getItem("visited");
  if (!visited) {
    setShowInstructions(true);
    localStorage.setItem("visited", "true");
  }
}, []);


  return (
    <Router>
    <Routes>
      <Route exact path="/" element={
        <div className='App'>
        <Menu />
        <RocketAnimation />
        
        {/* Instruction Button with Icon */}
        <button onClick={toggleInstructions}>
          <FontAwesomeIcon icon={faRocket} /> How to Launch Content
        </button>

         {/* Instruction Button with Icon */}
         <button onClick={toggleInstructions}>
              <FontAwesomeIcon icon={faRocket} /> How to Launch Content
            </button>

            {/* Instruction Modal */}
            {showInstructions && (
              <div className="instructions-modal animate-modal">
                <div className="instruction-content">
                  {/* English Instructions */}
                  <div className="english-instructions">
                    <h2>Content Launch Instructions</h2>
                    <ol>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Choose a category and hashtag.</li>
                      <li><FontAwesomeIcon icon={faShareAlt} /> Choose content and click 'Share'.</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Choose a platform and click 'Post'. </li>
                    </ol>
                  </div>
                  {/* Hebrew Instructions */}
                  <div className="hebrew-instructions">
                    <h2>הוראות השקת תוכן</h2>
                    <ol>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> בחר קטגוריה והאשטאג.</li>
                      <li><FontAwesomeIcon icon={faShareAlt} /> בחר תוכן ולחץ על 'שתף'.</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> בחר פלטפורמה ולחץ על 'פרסם'.</li>
                    </ol>
                  </div>
                </div>
                <button onClick={toggleInstructions} className="close-instructions">
                  <FontAwesomeIcon icon={faRocket} className="rocket-icon" /> Close
                </button>
              </div>
            )}

        {/* Categories Section */}
        <div className="category-section">
          <h3>Categories</h3>
          <div style={{ borderTop: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => categorySelected(category)}
                style={buttonStyle}
                className='category-button'
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="tags-section">
          <h3>Tags</h3>
          <Filter tagSelected={tagSelected} selectedCategory={selectedCategory} />
        </div>

        {/* Posts Section */}
        <div style={{ marginTop: '20px', padding: '10px' }}>
          <h3>Posts</h3>
          <div style={{ borderTop: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
          <ContentList posts={_.shuffle(posts)} />
        </div>
      </div>
     }/>
     <Route path="/instagram-callback" element={<InstagramCallback />} />
   </Routes>
 </Router>
);
}

export default App;