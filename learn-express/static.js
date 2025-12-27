const ex = require ("express")
const app = ex();
app.use(ex.static(process.argv[3] || path.join(__dirname,'public')))
app.listen(process.argv[2])