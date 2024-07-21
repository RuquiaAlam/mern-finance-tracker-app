import React, { useState } from "react";
import {useUser} from "@clerk/clerk-react"
import { useFinancialRecords } from "../../contexts/financial-records-context";

export const FinancialRecordForm = () => {

    const {user}=useUser();
    const [description,setDescription]=useState<string>("");
    const [amount,setAmount]=useState<string>("");
    const [category,setCategory]=useState<string>("");
    const [paymentMethod,setPaymentMethod]=useState<string>("");
    const{addRecord}=useFinancialRecords()
   
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>
{
e.preventDefault();

const newRecord={
    userId:user?.id ??"",
    date:new Date(),
    description:description,
    category:category,
    amount:parseFloat(amount),
    paymentMethod:paymentMethod


}
addRecord(newRecord);
setDescription("");
setAmount("");
setCategory("");
setPaymentMethod("");

}
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description:</label>
          <input type="text" required className="input" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input type="text" required className="input" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select required className="input" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
            <option value="entertainment">Entertainment</option>

            <option value="utilities">Utilities</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method:</label>
          <select required className="input" value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
     <button type="submit" className="button">Add Record</button>
      </form>
    </div>
  );
};

