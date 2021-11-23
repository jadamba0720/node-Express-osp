// const departmentModel= require("../models/departmentModel");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");

exports.getDepartments=asyncHandler( async (req, res, next)=>{
    console.log(req.userId);
    req.db.department.findAll().then(data=>{
        // console.log(res)
        res.status(200).json(data);
    })

})
exports.saveDepartments=asyncHandler( async (req, res, next)=>{
    // console.log(req.body);

    let department= await req.db.department.create(req.body);
    res.status(200).json({
        success: true,
        department
    })
})

exports.getDepartment=asyncHandler(async (req, res, next)=>{
    try{
    console.log("1 element")
    let department = await req.db.department.findByPk(req.params.id);
    if(!department){
        throw new MyError(`${req.params.id} id тэй нэгж/станц/ байхгүй байна.`, 400 );
    }

    console.log("ok data");
    res.status(200).json({
        success: true,
        data: department
    })
    }catch(err){
        next(err);
    }
});

exports.updateDepartments=asyncHandler( async(req, res, next )=>{
    console.log(req.body.department_id);
    let department= await req.db.department.findByPk(req.params.id);
    if(!department){
        throw new MyError(`${req.params.id} id тэй нэгж/станц/ байхгүй байна.`, 400);
    }

    department = await department.update(req.body);
    
    res.status(200).json({
        success: true,
        data: department
    })
})

exports.deleteDepartments =asyncHandler( async(req, res, next)=>{
    let department = await req.db.department.findByPk(req.params.id);

    if(!department){
        throw new MyError(`${department} id тэй нэгж/станц/ байхгүй байна`, 400);
    }

    department = await department.destroy();

    res.status(200).json({
        success: true,
        data: department,
    })
});