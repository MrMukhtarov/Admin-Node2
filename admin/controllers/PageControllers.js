const vistaPrincipial = (req,res) => {
    res.render('home')
} 

const vistaTables = (req,res) => {
    res.render('tables')
} 

const vistaNotifications = (req,res) => {
    res.render('notifications')
} 


module.exports = {
    vistaPrincipial,
    vistaTables,
    vistaNotifications
}