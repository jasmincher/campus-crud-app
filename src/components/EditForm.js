import React from 'react';
import AddButton from './AddButton';
import '../ CSS/EditForm.css';

function EditForm(props) {
    let something = <br />;


    if (props.input3)
        something = (<div className="form-group justify-content-sm-center">
            <label className="col-sm-2 col-form-label">Campus Description</label>
            <textarea className="col-sm-2 " id="text-area" rows="3"></textarea>
        </div>);

    return (



        <form className="edit-form">


            <div className="form-group row justify-content-sm-center">
                <label className="col-sm-2 col-form-label">{props.name}</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" />
                </div>
            </div>


            <div className="form-group row justify-content-sm-center">
                <label className="col-sm-2 col-form-label">{props.input1}</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" />
                </div>
            </div>


            <div className="form-group row justify-content-sm-center">
                <label className="col-sm-2 col-form-label">{props.input2}</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" />
                </div>
            </div>


            {something}

            <AddButton name="Save Changes" className="button" />
        </form>


    );
}


export default EditForm;
