const jwt = require('jsonwebtoken')

const token = jwt.sign({email : "fsghfsgf"},'secret',{
    expiresIn : "7d"
})

let toekns = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZzZ2hmc2dmIiwiaWF0IjoxNjQ3NDIwOTU4LCJleHAiOjE2NDgwMjU3NTh9.uMnRW0eCXIwnaQqfe2woSeC2YJUv-XAzd6t9bxguugM'

const dicts = {
    name : "suresh",
    phone : "5376535621",
}

const token = jwt.sign(dicts,'secret',{
    expiresIn : "7d"
})

// do this in login route

resizeBy.cookie("jwt", token ,{
    expiresIn : new Date(Date.now() + 50000),
    httponly : true
})

// install cookie-parser
app.use(cookieParser())


// In Middleware :
const token = req.cookies.jwtoken
        const vefify = jwt.verify(token,process.env.SECRET_KEY)

        const rootuser = await User.findOne({_id: vefify._id, "tokens.token" : token})

        if (!rootuser) { throw new Error('user not found')}

        req.token = token
        req.rootuser = rootuser
        req.userId = rootuser._id
        next()


const vefify = jwt.verify(token,'secret') 
const user = vefify.name

console.log(user)


