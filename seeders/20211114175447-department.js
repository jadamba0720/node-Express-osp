'use strict';
const fs= require("fs");

function coordinate(i){
  const coordinate=JSON.parse(fs.readFileSync(__dirname+`/department-geojson/${i}.json`));
  return coordinate;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const coordinate=JSON.parse(fs.readFileSync(__dirname+"/geojson/omnogovi.json"))
    // const coordinate=fs.readFileSync(__dirname+"/geojson/omnogovi.json")
    return queryInterface.bulkInsert('department', [
    //   {
    //   department_id: 15,
    //   department_name: 'Өмнө говь',
    //   coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate)),
    // },
    {
      department_id:1	
      ,department_name:"АРХАНГАЙ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(1)))
      },
      {
      department_id:2	
      ,department_name:"БАГАНУУР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(2)))
      },
      {
      department_id:3	
      ,department_name:"БАЯН ӨЛГИЙ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(3)))
      },
      {
      department_id:4	
      ,department_name:"БАЯНХОНГОР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(4)))
      },
      {
      department_id:5	
      ,department_name:"БУЛГАН" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(5)))
      },
      {
      department_id:6	
      ,department_name:"ГОВЬ АЛТАЙ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(6)))
      },
      {
      department_id:7	
      ,department_name:"ДАРХАН УУЛ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(7)))
      },
      {
      department_id:8	
      ,department_name:"ДОРНОГОВЬ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(8)))
      },
      {
      department_id:9	    
      ,department_name:"ДОРНОД" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(9)))
      },
      {
      department_id:10	
      ,department_name:"ДУНДГОВЬ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(10)))
      },
      {
      department_id:11	
      ,department_name:"ЗАВХАН" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(11)))
      },
      {
      department_id:12	
      ,department_name:"ОРХОН" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(12)))
      },
      {
      department_id:13	
      ,department_name:"ӨВӨРХАНГАЙ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(13)))
      },
      {
      department_id:14	
      ,department_name:"ӨМНӨГОВЬ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(14)))
      },
      {
      department_id:15	
      ,department_name:"СҮХБААТАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(15)))
      },
      {
      department_id:16	
      ,department_name:"СЭЛЭНГЭ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(16)))
      },
      {
      department_id:17	
      ,department_name:"ТӨВ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(17)))
      },
      {
      department_id:18	
      ,department_name:"УВС" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(18)))
      },
      {
      department_id:19	
      ,department_name:"ХОВД" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(19)))
      },
      {
      department_id:20	
      ,department_name:"ХӨВСГӨЛ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(20)))
      },
      {
      department_id:21	
      ,department_name:"ХЭНТИЙ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(21)))
      },
      {
      department_id:22	
      ,department_name:"ҮНДСЭН СҮЛЖЭЭНИЙ ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:23	
      ,department_name:"ОУБХ ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:24	
      ,department_name:"УБХСГ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:25	
      ,department_name:"ЕРӨНХИЙ УДИРДЛАГЫН ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:26	
      ,department_name:"СТРАТЕГИ ТӨЛӨВЛӨЛТ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:27	
      ,department_name:"МХС ХХК СИСТЕМ" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:28	
      ,department_name:"ДОТООД ХЯНАЛТЫН АЛБА" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:29	
      ,department_name:"TOП УДИРДЛАГА" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:30	
      ,department_name:"САНХҮҮГИЙН ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:31	
      ,department_name:"ҮЙЛ АЖИЛЛАГААНЫ ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:32	
      ,department_name:"ОНБ ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
      {
      department_id:33	
      ,department_name:"ТЕХНОЛОГИ АШИГЛАЛТЫН ГАЗАР" ,
      coordinate: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(coordinate(22)))
      },
  ]);
    
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('department',null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
