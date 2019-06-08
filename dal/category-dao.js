const db = require('./sequlize')
const getAllCategories = async (pageInfo) => {
    return new Promise((resolve, reject) => {
        db.category.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err);
        })
    })
}

const createCategoryTable = () => {
    return new Promise((resolve, reject) => {
        db.category.sync({ alter: true }).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}

module.exports = {
    getAllCategories, createCategoryTable
}