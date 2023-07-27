
const email = ['abc@gmail.com', 'xyz@email.com', 'pqr@gmail.com', 'jkl@gmail.com'];




//GET REQUEST

const metaAPI = 'https://developer-api.meta.com/v3/getUser';

const twitterAPI = 'https://developer-api.twitter.com/v2.4/getUser';

async function saveUsers({metaUser , twitterUser}){
    // save the user 
}
async function fetchUserDetails(users){

    const userPromiseArr = users.map(
        async function (userEmailId){
            const {User:metaUser} = await fetchMetaDetails(userEmailId);
            const {User: twitterUser} = await fetchTwitterDetails(userEmailId);
            if(metaUser && twitterUser){
                return await saveUsers(
                    {
                        metaUser, twitterUser
                    }
                )

            }


            return false 
        }
    )



        

    // const user = await PromiseAll

}


Twiotter 2min
facebook 3min 
backend 1min

fetchUserDetails(email)





async function fetchMetaDetails(userEmail){
    // validate useremail
    // try catch
    //await
    
    return {error : null , User:{}}
    
}

async function fetchTwitterDetails(userEmail){
    // validate useremail
    
    // try catch
    //await

    return {error : null , User:{}}

}


//POST REQUEST

const backendAPI = 'https://api.mysite.com/saveUser';




//Complete the following

// 1) iterate through all the emails

// 2) get facebook public profile details

// 3) get twitter public profile details

// 4) combine the result of both

// 5) POST the data to Internal API to save User.