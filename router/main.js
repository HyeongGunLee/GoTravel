module.exports = function(app, fs)
{
    /* app.get('/',function(req,res){
         res.render('index', {
             title: "MY HOMEPAGE",
             length: 5
         })
     });
    */
    app.get('/', function(req, res){
        res.render('main',{
            title:"my home",
            length:10
        })
    });
    
    app.get('/profile',function(req,res){
         res.render('profile', {
             length: 5
         })
     });
        
    app.get('/image',function(req,res){
         res.render('image', {
             length: 5
         })
     });
    
    
    app.get('/add',function(req,res){
         res.render('add', {
             length: 5
         })
     });
    
    app.get('/chatting',function(req,res){
         res.render('chatting', {
             length: 5
         })
     });
}
