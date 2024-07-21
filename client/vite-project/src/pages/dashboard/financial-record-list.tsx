import { useFinancialRecords } from "../../contexts/financial-records-context";


export const FinancialRecordList = () => {

  const {records}=useFinancialRecords();

  return (
    <div className="table-container">
      <h1>Record List</h1>
    </div>
  );
};


