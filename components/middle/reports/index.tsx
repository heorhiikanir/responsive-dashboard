import ReportItem from "./ReportItem";
import { reportsData } from "@data/data";

export default function Reports() {
  return (
    <>
      <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-4 justify-between mt-4 p-6">
        {/** reports list */}
        {reportsData.map((report, __) => {
          return <ReportItem key={__} data={report} />;
        })}
      </div>
    </>
  );
}
