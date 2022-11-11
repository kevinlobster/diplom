import '../../styles/common.css'
import './leadTable.css'
import { lead } from '../../mocks/leadTable'
import { Link } from 'react-router-dom'

export const LeadTable = () => {
    return (
        <div className="LeadTable">
            <h1 className="hero">Lead Table</h1>
            <Link to="../create-lead">
                <button className="addButton">
                    <img src="/assets/img/plus.svg"></img>
                </button>
            </Link>
            <div className="table-responsive"><table>
                <tbody>
                    <tr className="table-first-line">
                        <td>Name</td>
                        <td>Source</td>
                        <td>Budget</td>
                        <td>Next task</td>
                        <td>Contacts</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table></div>
        </div>
    )
}
