import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeEdit =()=>{
    const { empid } = useParams();


        useEffect(() => {
            fetch("http://localhost:8000/emploee/" + empid).then((res) => {
                return res.json();
            }).then((resp) => {
                idChange(resp.id);
                nameChange(resp.name)
                departmentCnage(resp.department);
                activeChange(resp.active);
            }).catch((err) => {
                console.log(err.message);
            })
        }, []);

        const [id, idChange] = useState("");
        const [name, nameChange] = useState("");
        const [department, departmentCnage] = useState("");
        const [active, activeChange] = useState(true);
        
        const navigate = useNavigate();

        const handleSubmit = (e) =>{
        e.preventDefault();
        const postData = {id, name, department, active}

        fetch('http://localhost:8000/emploee/' + empid, {
            method:"PUT", 
            headers:{'content-type':"application/json"},
            body: JSON.stringify(postData),
      
        }).then((res)=>{
           alert("Post is susscessfully")
           navigate('/');
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    const handleDepartment=(e)=>{
        const formValue = e.target.value
        if(formValue == 1){
            const show = "Manufecture";
            departmentCnage(show)
        }
        else if(formValue == 2){
            const show = "Construction Materials";
            departmentCnage(show)
        }
        else if(formValue== 3){
            const show = "Electronics and Optics";
            departmentCnage(show)
        }

        else if(formValue==4){
             const show = "Food and Beverage";
            departmentCnage(show)
        }
        else if(formValue==5){
             const show = "Bakery & Confectionery Products";
            departmentCnage(show)
        }
        else if(formValue==6){
             const show = "Beverages";
            departmentCnage(show)
        }
        else if(formValue==7){
             const show = "Fish Products";
            departmentCnage(show)
        }
            else if(formValue==8){
             const show = "Meat Products";
            departmentCnage(show)
        }
        else if(formValue==9){
             const show = "Snack Food";
            departmentCnage(show)
        }
        else if(formValue==10){
             const show = "Beverages";
            departmentCnage(show)
        }
        else{
            const show = "Furniture";
            departmentCnage(show)
        }
    }
    

    return(
        <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title text-center">
                                <h2>Employee Create</h2>
          
                                <div className="col-lg-12">
                                    <div className="from-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="from-group">
                                        <label>Name</label>
                                        <input required value={name} onChange={e=>nameChange(e.target.value)} className="form-control" />
                                       
                                    </div>
                                </div>

                                 <div className="col-lg-12">
                                    <div className="from-group">
                                        <label>Department</label>
                                        <select className="form-select"  onChange={(e)=>handleDepartment(e)}>
                                           <option value="">--Select Menu--</option>
                                            <option value='1'> Manufacturing</option>
                                            <option value='2'> Construction Materials</option>
                                            <option value='3'>Electronics and Optics </option>
                                            <option value="4">Food and Beverage</option>
                                            <option value="5">Bakery & Confectionery Products</option>
                                            <option value="6">Beverages</option>
                                            <option value="7">Fish Products</option>
                                            <option value="8">Meat Products</option>
                                            <option value="9">Snack Food</option>
                                            <option value="10">Beverages</option>
                                            {/* <option value="11">Furniture</option>
                                            <option value="12">Bathroom/sauna </option>
                                            <option value="14">Bedroom</option>
                                            <option value="15"> room </option>
                                            <option value="16">Kitchen </option>
                                            <option value="17">Living room </option>
                                            <option value="18">Office</option>
                                            <option value="19">Other (Furniture)</option>
                                            <option value="20">Outdoor </option>
                                            <option value="21">Project furniture</option>
                                            <option value="22">Machinery</option>
                                            <option value="23">Machinery components</option>
                                            <option value="24">Machinery equipment/tools</option>
                                            <option value="25">Manufacture of machinery </option>
                                            <option value="26">Maritime</option>
                                            <option value="27">Aluminium and steel workboats </option>
                                            <option value="28">Boat/Yacht building</option>
                                            <option value="29">Ship repair and conversion</option>
                                            <option value="30">Metal structures</option>
                                            <option value="31">Other</option>
                                            <option value="32">Repair and maintenance service</option>
                                            <option value="33">Metalworking</option>
                                            <option value="34">Construction of metal structures</option>
                                            <option value="35">Houses and buildings</option>
                                            <option value="36">Metal products</option>
                                            <option value="37">Metal works</option>
                                            <option value="38">CNC-machining</option>
                                            <option value="39">Fasteners </option>
                                            <option value="40"> Plasma, Laser cutting</option>
                                            <option value="41"> TIG, Aluminum welding</option>
                                            <option value="42">Plastic and Rubber</option>
                                            <option value="43">Packaging</option>
                                            <option value="44">Plastic goods</option>
                                            <option value="45">Plastic processing technology</option>
                                            <option value="46">Blowing</option>
                                            <option value="47">Moulding</option>
                                            <option value="48">Plastics welding and processing</option>
                                            <option value="49">Plastic profiles</option>
                                            <option value="50">Printing </option>
                                            <option value="51">Advertising</option>
                                            <option value="52">Book/Periodicals printing</option>
                                            <option value="53">Labelling and packaging printing</option>
                                            <option value="54">Textile and Clothing</option>
                                            <option value="55">Clothing</option>
                                            <option value="56">Textile</option>
                                            <option value="57">Wood</option>
                                            <option value="58">Other (Wood)</option>
                                            <option value="59">Wooden building materials</option>
                                            <option value="60">Wooden houses</option>
                                            <option value="61">Other</option>
                                            <option value="62">Creative industries</option>
                                            <option value="63">Energy technology</option>
                                            <option value="64">Environment</option>
                                            <option value="65">Service</option>
                                            <option value="66">Business services</option>
                                            <option value="67">Engineering</option>
                                            <option value="68">Information Technology and Telecommunications</option>
                                            <option value="69">Data processing, Web portals, E-marketing</option>
                                            <option value="70">Programming, Consultancy</option>
                                            <option value="71">Software, Hardware</option>
                                            <option value="72">Telecommunications</option>
                                            <option value="73">Tourism</option>
                                            <option value="74">Translation services</option>
                                            <option value="74">Transport and Logistics</option>
                                            <option value="76">Air</option>
                                            <option value="77">Rail</option>
                                            <option value="78">Road</option>
                                            <option value="79">Water</option> */}
                                        </select> 
                                    </div>
                                </div> 

                                <div className="col-lg-12">
                                    <div className="from-group">
                                        <input  type="checkbox" value={active} onChange={e=>activeChange(e.target.value)} className="from-check-input"></input>
                                        <label className="from-check-lebel">Is Active</label>
                                    </div>
                                </div>
                                <hr />
                                <br/>
                                <div className="col-lg-12">
                                    <div className="from-group">
                                        <button  type="submit" className="btn btn-success"> Sumit</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default EmployeeEdit;