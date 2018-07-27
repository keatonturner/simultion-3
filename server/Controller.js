



module.exports = {
    register: (req, res) => {
        const {session} = req;
        
        const {username, password} = req.body;
        users.push({username, profile_pic, userId})
        id++;
        session.user.username = username;
        res.status(200).send(session.user)
        
        


    }
}