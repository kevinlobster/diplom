import './create-script.css'
import '../../styles/common.css'

export const CreateScript = () => {
    return (
    <div className="CreateScript">
        <h1 className="hero">Create Script</h1>
        <form className="CreateLeadSection" >
                <label>Name</label>
                <input type="name" id="name" name="name" placeholder="Your name..." />
                
                <label>Source</label>
                <input type="source" id="source" name="source" placeholder="Your source..." />

                <label>Link</label>
                <input type="link" id="link" name="link" placeholder="Your link..." />
        </form>
    </div>)
}