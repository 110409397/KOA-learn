const Koa = require('koa')
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'hello world';
});

app.listen('3000',function (err){
    if(err){
        console.log(err);
    }
    console.log('server is running on 3000');
})