import { useState, useContext } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostContext } from "../utils/contexts/PostContext"
import { ThemeContext } from "../utils/contexts/ThemeContext"

const Header = () => {
    const { addPost } = useContext(PostContext)
    const { theme } = useContext(ThemeContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const regEx = /^\s+$/
    // Checks if user input is an empty string (space)
    const invalidTitle = regEx.test(title)
    const invalidBody = regEx.test(body)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (invalidTitle || invalidBody) {
            setTitle("")
            setBody("")
            return toast.error("Please enter a valid input", { autoClose: 2000, theme: "dark", width: "200" })
        }
        addPost(title, body)
        setTitle("")
        setBody("")
    }

    return (
        <header className={`header ${theme}`}>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="nugget">Nugget</label>
                <textarea
                    type="text"
                    cols="15"
                    rows="5"
                    value={body}
                    placeholder="Your nugget for the tribe"
                    name="nugget"
                    required
                    onChange={(e) => setBody(e.target.value)} />

                <input type="submit" value="Share" className="btn submit-btn" />
            </form>
        </header>
    )
}

export default Header