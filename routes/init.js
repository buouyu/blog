const express =require('express')
const app = express();
const path = require('path')
const rootPath = path.resolve(__dirname,'../public')
const cookieParse = require('cookie-parser')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParse())
app.use(express.static(rootPath))



app.use(require('./tokenMiddleware'))
app.use('/api/banner',require('./api/banner'))
app.use('/api/admin',require('./api/admin'))

app.use(require('./proxyMid'))
app.use("/api/student", require("./api/student"));




app.use('/api/upload',require('./api/upload'))

app.use('/res',require('./api/download'))

app.use(require('./errorMiddleware'))

const port = 9000;
app.listen(port,()=>{
    console.log('listen success in '+port)
})