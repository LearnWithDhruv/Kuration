import React, { useState } from "react";
import axios from "axios";

function LeadForm({ setLeadData }) {
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:5000/api/enrich", {
                company_name: company,
                website: website,
            });
            setLeadData(response.data);
        } catch (error) {
            console.error("Error fetching enriched data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                required
            />
            <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website URL"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Enrich Lead"}
            </button>
        </form>
    );
}

export default LeadForm;
