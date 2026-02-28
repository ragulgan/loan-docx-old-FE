import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { regexPattern, errorMessage } from "../../../utils/constant";
import RHFInputField from "../../common/lnputField";
import RHFSelectField from "../../common/selectField";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoleList } from '../../../redux/slices/users/roleList';

const AddAgent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const roles = useSelector((state) => state.role);
    console.log(roles);

    const [selectedRole, setSelectedRole] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            user_name: "",
            user_type: "",
            user_pwd: "",
            upi_id: "",
            address1: "",
            address2: "",
            mobile_number: "",
            email_id: "",
            aadhar_number: "",
            user_active: "",
        }
    });

    const onSubmit = (data) => {
        const payload = {
            ...data,
            user_type: Number(data.user_type)
        };
        console.log("Agent Form Submitted:", payload);
    };

    useEffect(() => {
        dispatch(fetchRoleList({}));
    }, [dispatch])

    const handleRoleChange = (e) => {
        const roleId = e.target.value;
        setSelectedRole(roleId);
        setValue("user_type", roleId, { shouldValidate: true });
    };

    const roleOptions = roles?.roles?.map((role) => ({
        label: role.role_name,
        value: role.id,
    }));

    return (
        <div className="container mt-4">
            <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                    <h5 className="roboto-regular fs-16 mb-4">Add User</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gx-5 gy-3">
                            {/* User Name */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="User Name"
                                    name="user_name"
                                    placeholder="Enter User Name"
                                    register={register}
                                    errors={errors}
                                    showStar={true}
                                    rules={{
                                        required: errorMessage.UserName_Required,
                                        pattern: {
                                            value: regexPattern.Username,
                                            message: errorMessage.Username_Invalid
                                        }
                                    }}
                                />
                            </div>

                            {/* User Type */}
                            <div className="col-lg-6">
                                <RHFSelectField
                                    label="User Type"
                                    name="user_type"
                                    register={register}
                                    errors={errors}
                                    showStar={true}
                                    // rules={{ required: "User Type is required" }}
                                    options={roleOptions}
                                    value={selectedRole}
                                    onChange={handleRoleChange}
                                    disabled={roles.loading}
                                />
                            </div>

                            {/* User Password */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="User Password"
                                    name="user_pwd"
                                    type="password"
                                    placeholder="Minimum 8 characters"
                                    register={register}
                                    showStar={true}
                                    errors={errors}
                                    rules={{
                                        required: errorMessage.Password_Required,
                                        pattern: {
                                            value: regexPattern.password,
                                            message: errorMessage.Password_Criteria,
                                        },
                                    }}
                                />
                            </div>

                            {/* UPI ID */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="UPI ID"
                                    name="upi_id"
                                    placeholder="username@bank"
                                    register={register}
                                    errors={errors}
                                    rules={{ required: "UPI ID is required" }}
                                />
                            </div>

                            {/* Address1 */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="Address1"
                                    name="address1"
                                    placeholder="Street address, building name"
                                    register={register}
                                    showStar={true}
                                    errors={errors}
                                    rules={{ required: "Address1 is required" }}
                                />
                            </div>

                            {/* Address2 */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="Address2"
                                    name="address2"
                                    placeholder="Locality, city, state, PIN"
                                    register={register}
                                    errors={errors}
                                    rules={{ required: "Address2 is required" }}
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="Mobile Number"
                                    name="mobile_number"
                                    placeholder="Enter Mobile Number"
                                    register={register}
                                    showStar={true}
                                    errors={errors}
                                    rules={{
                                        required: errorMessage.Mobile_Required,
                                        pattern: {
                                            value: regexPattern.mobileNumber,
                                            message: errorMessage.Mobile_Invalid,
                                        },
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="Email Id"
                                    name="email_id"
                                    type="email"
                                    placeholder="user@loandocx.com"
                                    register={register}
                                    showStar={true}
                                    errors={errors}
                                    rules={{
                                        required: errorMessage.Email_Required,
                                        pattern: {
                                            value: regexPattern.email,
                                            message: errorMessage.Invalid_Email,
                                        },
                                    }}
                                />
                            </div>

                            {/* Aadhar */}
                            <div className="col-lg-6">
                                <RHFInputField
                                    label="Aadhar Number"
                                    name="aadhar_number"
                                    placeholder="12-digit Aadhaar number"
                                    register={register}
                                    showStar={true}
                                    errors={errors}
                                    rules={{
                                        required: "Aadhar Number is required",
                                        pattern: {
                                            value: /^\d{12}$/,
                                            message: "Enter valid 12 digit Aadhar number",
                                        },
                                    }}
                                />
                            </div>

                            {/* User Status */}
                            <div className="col-lg-6">
                                <RHFSelectField
                                    label="User Status"
                                    name="user_active"
                                    register={register}
                                    errors={errors}
                                    showStar={true}
                                    rules={{ required: "user Status is required" }}
                                    options={[
                                        { label: "Active", value: "Active" },
                                        { label: "InActive", value: "InActive" },
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3 mt-3">
                            <button
                                type="button"
                                className="btn btn-outline-secondary px-4"
                                onClick={() => navigate("/user")}
                            >
                                Cancel
                            </button>

                            <button type="submit" className="btn btn-primary px-4">
                                Save User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAgent;
