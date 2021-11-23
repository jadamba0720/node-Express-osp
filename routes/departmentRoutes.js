const express= require("express")
const router = express.Router();

// const depart= require("../models/departmentModel");

const {getDepartments, saveDepartments, updateDepartments, deleteDepartments, getDepartment} = require("../controller/departmentController")


router.route("/").get(getDepartments).post(saveDepartments);

router.route("/:id").get(getDepartment).put(updateDepartments).delete(deleteDepartments);

// router.get("/api/v1/department/:id", (req, res)=>{
//     res.status(200).send({
//         message: "department ogloo",
//     })
// })


module.exports = router;