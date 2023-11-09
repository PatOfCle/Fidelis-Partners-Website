import React, { useEffect, useRef } from 'react';
import './MyPage.css'

const MyPage = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    // Add refs for other sections
  };

  const handleNavigationClick = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Check URL parameters on page load
    const params = new URLSearchParams(window.location.search);
    const scrollToSection = params.get('scrollToSection');

    if (scrollToSection && sectionRefs[scrollToSection]) {
      sectionRefs[scrollToSection].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <div className="navigator">
        <button onClick={() => handleNavigationClick('section1')}>Section 1</button>
        <button onClick={() => handleNavigationClick('section2')}>Section 2</button>
        {/* Add buttons for other sections */}
      </div>

      <div className="content">
        <section ref={sectionRefs.section1}>
          {/* Content of Section 1 */}

          asdf
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          asdf
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section>
        <section ref={sectionRefs.section2}>
          {/* Content of Section 2 */}
            ---------
          asdf
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          asdf
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section>
        {/* Add other sections */}
      </div>
    </div>
  );
};

export default MyPage;
