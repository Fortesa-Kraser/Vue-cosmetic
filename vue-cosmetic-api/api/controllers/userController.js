const userController = {
    register: async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await admin.auth().createUser({
            email,
            password
        });

        if (user.email.includes("ubt-uni.net")) {
            admin.auth().setCustomUserClaims(user.uid, {admin: true });
        }
    
        return res.json({ user });

    }catch (error) {
        return res.status(403).json({ error });
    }

   },

};

export default userController;
