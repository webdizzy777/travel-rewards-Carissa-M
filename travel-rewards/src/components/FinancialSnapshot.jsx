import { formatDate, formatCurrency, formatDueDate } from "./Functions";
function FinancialSnapshot({cards}){

    //find lowest APR
    const aprs = cards.map((c)=>c.apr);
    const lowestApr = Math.min(...aprs);

    //fill out the table
    //red style if utilization above threshold
    const cardNameF = cards.map((c) => {
        const utilization = ((c.balance / c.creditLimit).toFixed(2))*100;
        return (
            <tr key={c.id}>
            <td>{c.cardName}</td>
            <td>${c.fee}</td>
            <td>{formatDate(c.dateOpened)}</td>
            <td>{c.apr === lowestApr
                ? <span className="green"><b>{c.apr}%</b></span>
                : `${c.apr}%`
                }</td>
            <td>{formatCurrency(c.creditLimit)}</td>
            <td>{formatCurrency(c.balance)}</td>
            <td>
                {utilization > 30
                ? <span className="red">{utilization}%</span>
                : `${utilization}%`}
            </td>
            <td>{formatDueDate(c.dueDate)}</td>
            </tr>
        );
    });


    return(
        <>
            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Card Name</th>
                            <th>Fee</th>
                            <th>Date Opened</th>
                            <th>APR</th>
                            <th>Credit Limit</th>
                            <th>Balance</th>
                            <th>Utilization</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardNameF}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FinancialSnapshot;