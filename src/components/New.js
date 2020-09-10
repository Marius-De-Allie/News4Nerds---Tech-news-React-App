import React, { useState, useEffect } from 'react';
import StoryList from './StoryList';
import { fetchStoryIds, fetchItem } from '../utils/api';
// theme context consumer.
import ThemeContext from '../contexts/theme';

const New = () => {
  const [newStories, setNewStories] = useState({});

  useEffect(() => {
      (async() => {
          const storyIds = await fetchStoryIds('newstories');
          storyIds.forEach(async(id) => {
              if(!newStories[id]) {
                  const story = await fetchItem(id);
                  setNewStories((newStories) => ({
                      ...newStories,
                      [story.id]: {...story}
                  }));
              }
          });
          
      })();
  }, [newStories]);

  const ids = Object.keys(newStories);
  const stories = ids.map(id => newStories[id]).sort((a, b) => b.time - a.time);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <React.Fragment>
          <h1 className={`ui header text-${theme}`}>New Stories</h1>
          <StoryList stories={stories} />
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  );
};

// class New extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             newStories: {}
//         }
//     }

//     async componentDidMount() {
//       const storyIds = await fetchStoryIds('newstories');
//       storyIds.forEach( async(id) => {
//           if(!this.state.newStories[id]) {
//               const story = await fetchItem(id);
//               this.setState(prevState => ({
//                   newStories: {
//                       ...prevState.newStories,
//                       [story.id]: {...story}
//                   }
//               }))
//           }
//       })
//       // fetchStories('newstories')
//       //   .then(newStories => this.setState(prevState => ({
//       //     newStories
//       //   })))
//       //   .catch(e => console.warn(e))
//     }

//     render() {
//       const { newStories } = this.state;
//       const ids = Object.keys(newStories);
//       const stories = ids.map(id => newStories[id]).sort((a, b) => b.time - a.time)
//         return (
//           <ThemeContext.Consumer>
//             {({ theme }) => (
//               <React.Fragment>
//                 <h1 className={`ui header text-${theme}`}>New Stories</h1>
//                 <StoryList stories={stories} />
//               </React.Fragment>
//             )}
//           </ThemeContext.Consumer>
//         );
//     }
// };

export default New;