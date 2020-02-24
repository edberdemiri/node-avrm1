const viewBlogpost = (req, res) => {
    res.render('blogpost');
}
const viewNewBlogpost = (req, res) => {
    res.render('blogpost_new');
}
const apiNewBlogpost = (req, res) => {

}
const viewEditBlogpost = (req, res) => {
    res.render('blogpost_edit');
}
const apiEditBlogpost = (req, res) => {

}
const apiDeleteBlogpost = (req, res) => {
    res.render('blogpost_delete');
}


module.exports = {
    viewBlogpost,
    viewNewBlogpost,
    apiNewBlogpost,
    viewEditBlogpost,
    apiEditBlogpost,
    apiDeleteBlogpost
}