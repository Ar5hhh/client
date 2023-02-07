import React from 'react'
import Input from './Input'
import Radio from './Radio'
import Selectbox from './Selectbox'
import TextArea from './TextArea'

const Form = () => {
    return (
        <form className='container mt-4 border border-2 rounded rounder-3'>
            <div className='row p-2'>
                <div className='form-group col-md-6 p-1'>
                    <Input label="ENTER FIRST NAME" name="fname" handler className="form-control" placeholder="ex:brenden" />
                </div>
                <div className='form-group col-md-6 p-1'>
                    <Input label="ENTER LAST NAME" name="lname" handler className="form-control" placeholder="ex:eich" />
                </div>
            </div>
            <div className='row p-2'>
                <div className='form-group col-md-6 p-1'>
                    <Input label="ENTER PHONE NUMBER" name="phone" type="number" handler className="form-control" placeholder="ex:9047552424" />
                </div>
                <div className='form-group col-md-6 p-1'>
                    <Input label="ENTER FATHERS NAME" name="fathername" handler className="form-control" placeholder="ex:brenden eich" />
                </div>
            </div>
            <div className='row p-2'>
                <div className='form-group col-md-6 p-1'>
                    <Input label="ENTER DOB" name="dob" type="date" handler className="form-control" />
                </div>
                <div className='form-group col-md-6'>
                    <div className='row p-1' >
                        <div className='form-group col-md-6'>
                            <Selectbox label="QUALIFICATION" name="course" id="course" className="form-control" handler opt={["select course", "javascript", "python", "java", "ruby"]} />
                        </div>
                        <div className='form-group col-md-6'>
                            <label></label>
                            <Selectbox name="subject" id="subject" className="form-control" handler opt={["select subject", "OOPS", "data-structures", "ML", "AI"]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row p-2'>
                <div className='form-group col-md-6 p-1'>
                    <Input label="ENTER AADHAR NUMBER" name="aadhar" handler className="form-control" placeholder="ex:4573 XXXX XXXX XXX8" />
                </div>
                <div className='form-group col-md-6 p-1'>
                    <div className="row p-2">
                        <div className='row-col-md-9'>
                            <label>GENDER</label>
                            <div className='d-flex'>
                                <div className="d-inline-block pe-5">
                                    <Radio label="MALE" className="form-input-check" name="gender" handler />
                                </div>
                                <div className="d-inline-block">
                                    <Radio label="FEMALE" className="form-input-check" name="gender" handler />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='row p-2'>
                <div className='form-group col-md-6 p-1'>
                    <TextArea label="PERMANENT ADDRESS" name="permaddress" className="form-control" handler />
                </div>
                <div className='form-group col-md-6 p-1'>
                    <TextArea label="CURRENT ADDRESS" name="curraddress" className="form-control" handler />
                </div>
            </div>
            <div className='row p-2'>
                <div className='form-group col-md-6 p-1'>

                </div>
                <div className='form-group col-md-6 p-1'>
                    <Input label="SAME AS PERMAMENT ADDRESS" type="checkbox" handler className="form-check-label mx-3" />
                </div>
            </div>
            <div className='row p-3'>
                <div className='text-center'>
                    <button type="submit" class="btn btn-outline-dark p-3 text-primary border-primary">SUBMIT</button>
                </div>
            </div>
        </form >
    )
}

export default Form