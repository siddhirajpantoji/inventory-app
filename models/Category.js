module.exports = (sequilize, DataTypes)=>{
    const Category = sequilize.define('category',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING,
            required: true
          }      
    })
    return Category;
}