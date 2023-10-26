import React, { useState } from 'react';
import style from "../styles/Contact.module.css";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    desc: ""
  })

  const handleSubmit = async (e) => {
    if (!form.name || !form.email || !form.phone) {
      return alert("Please fill required data.");
    }
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    };
    const response = await fetch('http://localhost:3000/api/postcontact', requestOptions);
    if (response.status === 200) {
      setForm({
        name: "",
        email: "",
        phone: "",
        desc: ""
      })
    }
  }

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'name') {
      setForm({ ...form, name: value })
    } else if (name === 'email') {
      setForm({ ...form, email: value })
    } else if (name === 'phone') {
      setForm({ ...form, phone: value })
    } else if (name === 'desc') {
      setForm({ ...form, desc: value })
    }
  }


  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={style.title}>Contact Us</h1>
        <div className={style.formgroup}>
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} value={form.name} type="text" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter your name..." />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="email">Email address</label>
          <input onChange={handleChange} value={form.email} type="email" name="email" className="form-control" id="email" placeholder="Enter email..." />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className={style.formgroup}>
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input onChange={handleChange} value={form.phone} type="number" className="form-control" id="phone" name="phone" placeholder="Enter your contact number" />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="exampleInputPassword1">Consern</label>
          <input onChange={handleChange} value={form.desc} type="text" className="form-control" id="desc" name="desc" placeholder="Write your consern..." />
        </div>
        <button type="submit" className={style.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact