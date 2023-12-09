import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Resigter.css"
const Register = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("india");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("female");

    const navigate = useNavigate();

    const validateForm = () => {
        let isProceed = true;
        let errorMessage = 'Please enter the value in';
        
        if (id === null || id === '') {
            isProceed = false;
            errorMessage += ' Username';
        }
        if (name === null || name === '') {
            isProceed = false;
            errorMessage += ' Fullname';
        }
        if (password === null || password === '') {
            isProceed = false;
            errorMessage += ' Password';
        }
        if (email === null || email === '') {
            isProceed = false;
            errorMessage += ' Email';
        }

        if (!isProceed) {
            toast.warning(errorMessage);
        } else {
            if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                isProceed = false;
                toast.warning('Please enter a valid email');
            }
        }
        return isProceed;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userObject = { id, name, password, email, phone, country, address, gender };
        if (validateForm()) {
            fetch("http://localhost:3000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userObject)
            })
            .then((res) => {
                toast.success('Registered successfully.');
                navigate('/login');
            })
            .catch((err) => {
                toast.error('Failed: ' + err.message);
            });
        }
    }

    return (
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>User Registration</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={id} onChange={(e) => setId(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Full Name <span className="errmsg">*</span></label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone <span className="errmsg"></span></label>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Country <span className="errmsg">*</span></label>
                                    <select value={country} onChange={(e) => setCountry(e.target.value)} className="form-control">
                                        <option value="india">India</option>
                                        <option value="usa">USA</option>
                                        <option value="singapore">Singapore</option>
                                        <option value="vietnam">Vietnam</option>
                                        <option value="japan">Japan</option>
                                        <option value="thailand">Thailand</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br />
                                    <div>
                                        <input type="radio" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} name="gender" value="male" className="app-check" />
                                        <label>Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} name="gender" value="female" className="app-check" />
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Register</button> |
                        <Link to={'/login'} className="btn btn-danger">Close</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
