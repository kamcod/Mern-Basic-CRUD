const About = () => {
    return(
        <div>
            <h1>About</h1>
            <form>
                <label htmlFor="name" />
                <input id="name" name="name" />
                <button type="button" onClick={addData}>Add</button>
            </form>
        </div>
    );
}

export default About;