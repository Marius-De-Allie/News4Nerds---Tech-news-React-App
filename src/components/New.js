import React, { useState, useEffect, useContext } from 'react';
import StoryList from './StoryList';
import Loading from './Loading';
import { fetchStoryIds, fetchItem } from '../utils/api';
// theme context.
import ThemeContext from '../contexts/theme';

const New = () => {
  const [newStories, setNewStories] = useState({});
  const [loadingStories, setLoadingStories] = useState(true);
  const theme = useContext(ThemeContext);

  useEffect(() => {
      (async() => {
          try {
            //   setLoadingStories(true);
              const storyIds = await fetchStoryIds('newstories');
              storyIds.forEach(async(id) => {
                  if(!newStories[id]) {
                      const story = await fetchItem(id);
                      setNewStories((newStories) => ({
                          ...newStories,
                          [story.id]: {...story}
                      }));
                      if(loadingStories) {
                          setLoadingStories(false);
                      }
                  }
              });
          } catch(e) {
              console.warn(e);
          }
      })();
  }, [newStories]);

  const ids = Object.keys(newStories);
  const stories = ids.map(id => newStories[id]).sort((a, b) => b.time - a.time);

  const renderUI = () => {
    return loadingStories 
        ? <Loading className={`text-${theme}`} text='Fetching new stories' />
        : <StoryList stories={stories} />

  };
  return (
      <React.Fragment>
        <h1 className={`ui header text-${theme}`}>New Stories</h1>
        {renderUI()}
      </React.Fragment>
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