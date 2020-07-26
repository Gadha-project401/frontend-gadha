let initialState = {
    posts : []
};

// {"createdBy": "israa",
// "createdAt": "7/25/2020, 4:03:58 PM",
// "_id": "5f1c2dc4c53cba1751d73660",
// "title": "test4",
// "story": "test4 story",
// "__v": 0,
// "virtual-owner": {
//     "role": "user",
//     "country": "jordan",
//     "createdAt": "2020-07-25T12:33:29.494Z",
//     "profilePic": "myPic.png",
//     "_id": "5f1c29df1a874e171606dcfe",
//     "username": "alaaa",
//     "fullName": "alaa ayoub",
//     "password": "$2b$10$Phrc7ket254EeQ5GqAiHfuZMEMvUKQMUYOWStJ7g9r69L3eWTAgh2",
//     "gender": "female",
//     "birthday": "2/11/2002",
//     "__v": 0
// },
// "id": "5f1c2dc4c53cba1751d73660"
// }



// The reducer function
export default (state = initialState, action) => {
    let { type, payload } = action;
    // console.log('payload',payload);
    // console.log('state',state);

    switch (type) {
        case 'GET':
            //sort by date 
          let reversed = payload.reverse();
            return { posts: reversed }
        case 'POST':
            return { ...state, payload }
        default:
            return state;
    }
}