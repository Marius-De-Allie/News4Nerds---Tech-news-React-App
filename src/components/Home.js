import React, { useState, useEffect, useContext } from 'react';
import StoryList from './StoryList';
import { fetchStoryIds, fetchItem } from '../utils/api';
import ThemeContext from '../contexts/theme';

const Home = () => {
    const [topStories, setTopStories] = useState({});
    const theme = useContext(ThemeContext);

    
    useEffect(() => {
        (async() => {
            const storyIds = await fetchStoryIds('topstories');
            storyIds.forEach(async(id) => {
                if(!topStories[id]) {
                    const story = await fetchItem(id);
                    setTopStories((topStories) => ({
                        ...topStories,
                        [story.id]: {...story}
                    }));
                }
            });
            
        })();
    }, [topStories]);

    // Convert stories objects to an array of stories.
    const storiesToArray = () => {
        const ids = Object.keys(topStories);
        const stories = ids.map(id => topStories[id]);
        return stories;
    };

    return (
        <React.Fragment>
            <h1 className={`ui header text-${theme}`}>Top 50 Stories</h1>
            <StoryList stories={storiesToArray()} />
        </React.Fragment>
    );
}
// class Home extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             topStories: {}
//         }
//     }

//     async componentDidMount () {
//         const storyIds = await fetchStoryIds('topstories');
//         console.log('TOP STORIES', storyIds)
//         storyIds.forEach( async(id) => {
//             if(!this.state.topStories[id]) {
//                 const story = await fetchItem(id);
//                 this.setState(prevState => ({
//                     topStories: {
//                         ...prevState.topStories,
//                         [story.id]: {...story}
//                     }
//                 }))
//             }
//         })

//         // fetchStories('topstories')
//         // .then(topStories => {
//         //   this.setState(prevState => ({
//         //     topStories
//         //   }));
//         // })
//         // .catch(e => console.warn(e));
//     }

//     render() {
//         const { topStories } = this.state;
//         const ids = Object.keys(topStories);
//         const stories = ids.map(id => topStories[id]);

//         // console.log('STORIES', stories)
//         console.log('TOP STORIES MAN', topStories)
//         return (
//             <ThemeContext.Consumer>
//                 {({ theme }) => (
//                     <React.Fragment>
//                         <h1 className={`ui header text-${theme}`}>Top 50 Stories</h1>
//                         <StoryList stories={stories} />
//                     </React.Fragment>
//                 )}
//             </ThemeContext.Consumer>
//         );
//     }

// };

export default Home;