const express = require("express");
const path = require("path");
const { readFile, writeFile } = require("./modules/filehandler");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");










/*DASHBOARD*/
app.get("/", async (req, res) =>
{
    const employees = await readFile();
    res.render("index", { employees });
});









/*ADD FORM PAGE*/
app.get("/add", (req, res) =>
{
    res.render("add");
});





/*ADD EMPLOYEE*/
app.post("/add", async (req, res) =>
{
    const { name, gender, Salary, startDate, notes } = req.body;
    // Handle multiple checkboxes properly
    const department = Array.isArray(req.body.Department)
        ? req.body.Department
        : req.body.Department
            ? [req.body.Department]
            : [];
    if (!name || !gender || department.length === 0 || Salary <= 0)
    {
        return res.send("Invalid input. Please fill all required fields correctly.");
    }
    const employees = await readFile();
    const newEmployee =
    {
        id: Date.now(),
        name: name.trim(),
        gender: gender,
        department: department,
        salary: Number(Salary),
        startDate: startDate,
        notes: notes
    };
    employees.push(newEmployee);
    await writeFile(employees);
    res.redirect("/");
});







/*DELETE EMPLOYEE */
app.get("/delete/:id", async (req, res) =>
{
    const id = Number(req.params.id);
    let employees = await readFile();
    employees = employees.filter(emp => emp.id !== id);
    await writeFile(employees);
    res.redirect("/");
});







/*EDIT PAGE*/
app.get("/edit/:id", async (req, res) =>
{
    const id = Number(req.params.id);
    const employees = await readFile();
    const employee = employees.find(emp => emp.id === id);
    res.render("edit", { employee });
});







/*UPDATE EMPLOYEE*/
app.post("/edit/:id", async (req, res) =>
{
    const id = Number(req.params.id);
    const { name, gender, Salary, startDate, notes } = req.body;
    const department = Array.isArray(req.body.Department)
        ? req.body.Department
        : req.body.Department
            ? [req.body.Department]
            : [];
    if (!name || !gender || department.length === 0 || Salary <= 0)
    {
        return res.send("Invalid input.");
    }
    const employees = await readFile();
    const updatedEmployees = employees.map(emp =>
    {
        if (emp.id === id)
        {
            return {
                id: emp.id,
                name: name.trim(),
                gender: gender,
                department: department,
                salary: Number(Salary),
                startDate: startDate,
                notes: notes
            };
        }
        return emp;
    });
    await writeFile(updatedEmployees);
    res.redirect("/");
});



/*START SERVER*/
app.listen(PORT, () =>
{
    console.log(`Server running on http://localhost:${PORT}`);
});
