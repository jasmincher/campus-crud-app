import React from 'react';
import AddButton from './AddButton';
import '../ CSS/EditForm.css';

function EditFormCampus(props) {
    return (



        <form className="edit-form">


            <div className="form-group row justify-content-sm-center">
                <label className="col-sm-2 col-form-label">{props.name}</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" />
                </div>
            </div>


            <div className="form-group row justify-content-sm-center">
                <label className="col-sm-2 col-form-label">{props.address}</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" />
                </div>
            </div>


            <div className="form-group row justify-content-sm-center">
                <label className="col-sm-2 col-form-label">{props.description}</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" />
                </div>
            </div>


            <AddButton name="Save Changes" className="button" />
        </form>


    );
}


export default EditFormCampus;
