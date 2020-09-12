import React, { useState, useEffect, useContext } from 'react';
import StoryList from './StoryList';
import Loading from './Loading';
import { fetchStoryIds, fetchItem } from '../utils/api';
import ThemeContext from '../contexts/theme';

const Home = () => {
    const [topStories, setTopStories] = useState({});
    const [loadingStories, setLoadingStories] = useState(true);
    const theme = useContext(ThemeContext);

    
    useEffect(() => {
        (async() => {
            try {
                const storyIds = await fetchStoryIds('topstories');
                storyIds.forEach(async(id) => {
                    if(!topStories[id]) {
                        const story = await fetchItem(id);
                        setTopStories((topStories) => ({
                            ...topStories,
                            [story.id]: {...story}
                        }));
                        if(loadingStories) {
                            setLoadingStories(false);
                        }
                    }
                });

            } catch(e) {
                console.warn(e);
            };
        })();
    }, [topStories]);

    // Convert stories objects to an array of stories.
    const storiesToArray = () => {
        const ids = Object.keys(topStories);
        const stories = ids.map(id => topStories[id]);
        return stories;
    };

    const renderUI = () => {
        // if(loadingStories ===true) {
        //     ui = <Loading text='Fetching top stories' />;
        // }

        // ui = <StoryList stories={storiesToArray()} />

        return loadingStories ? <Loading className={`text-${theme}`} text='Fetching top stories' /> : <StoryList stories={storiesToArray()} />
    }

    return (
        <React.Fragment>
            <h1 className={`ui header text-${theme}`}>Top 50 Stories</h1>
            {renderUI()}
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