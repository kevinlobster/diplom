import './create-lead.css'
import '../../styles/common.css'

export const CreateLead = () => {
    return (
    <div className="CreateLead">
        <h1>Create lead</h1>
        <form className="CreateLeadSection" >
                <label>Name</label>
                <input type="name" id="name" name="name" placeholder="Your name..." />
                
                <label>Source</label>
                <input type="source" id="source" name="source" placeholder="Your source..." />

                <label>Budget</label>
                <input type="budget" id="budget" name="budget" placeholder="Your budget..." />

                <label>Source</label>
                <input type="source" id="source" name="source" placeholder="Your source..." />

                <label>Next Task</label>
                <input id="nextTask" name="nextTask" placeholder="Your next task..." />
                
                <input type="submit" className="submit" id="submit" value="Submit" />
        </form>
    </div>)
}