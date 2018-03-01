// a reducer takes in two things:
// 1. action (info about what happened)
// 2. current state

function posts(state=[], action) {
    console.log(state, action);
    return state;
}

export default posts;