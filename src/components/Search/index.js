import {useForm} from "react-hook-form";
import {inputErrorClass} from "../../global/utils";
import {useState} from "react";

function Search({ inputDataHook }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        inputDataHook(e)
    };

    //console.log(watch("search"))

    return(
        <>
            <div className="tab w-100 d-flex justify-content-center flex-column align-items-center">
                <form onSubmit={handleSubmit(onSubmit)} className={`d-flex w-100 w-md-50 bg-white rounded border border-2 ${inputErrorClass(errors.search)}`}>
                    <input {...register("search", { required: true })} type="text" placeholder="Search" className="form-control p-2 " />
                    <input type="submit" className="btn btn-primary w-50" value="Submit" />
                </form>
                {errors.search && <div className="alert alert-danger py-1 px-3 w-25 mt-3 text-center" role="alert">This field is required</div>}
            </div>
        </>
    )
}

export default Search