import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-records-context";
import { useMemo } from "react";
const Dashboard = () => {
  const { user } = useUser();

  const { records } = useFinancialRecords();
  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);
  return (
    <div className="dashborad-container">
      <h1>Welcome {user?.firstName}! Here are your finances</h1>

      <FinancialRecordForm />
      <div>
        <h1>Total Monthly:${totalMonthly}</h1>
      </div>
      <FinancialRecordList />
    </div>
  );
};

export default Dashboard;
