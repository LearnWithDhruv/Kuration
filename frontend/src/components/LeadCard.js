import React from "react";

function LeadCard({ data }) {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>Industry: {data.industry}</p>
            <p>Location: {data.location}</p>
            <p>Employees: {data.employeeCount}</p>
        </div>
    );
}

export default LeadCard;
