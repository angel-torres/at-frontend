const initialState = {
    posts: [{
        img: "",
        datePosted: "",
        title: "",
        author: "",
        description: "",
    }, {
        img: "",
        datePosted: "",
        title: "",
        author: "",
        description: "",
    }, {
        img: "",
        datePosted: "",
        title: "",
        author: "",
        description: "",
    }],
    loggedIn: false,
    artist: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
} 