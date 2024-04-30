import Sequelize from 'sequelize';
import sequelize from './sequelize.js';

 var department=sequelize.define('vinodhdepartment',{
    department_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    headquarters:{
      type: Sequelize.TEXT,
      allowNull: true
    }
  });

  var employee=sequelize.define('vinodhemployee',{
    employee_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    desig:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    city:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})


department.hasMany(employee,{foreignKey: 'department_id'});
employee.belongsTo(department,{foreignKey: 'department_id'});

department.sync({alter: false,drop: false}).then(() => {
    
    console.log("Department table Synched!!!");
  });

employee.sync({alter: false, drop: false}).then(() => {
    
    console.log("Employee table Synched!!!");
  });


  const model = {
    employee: employee,
    department: department
  }

  export default model