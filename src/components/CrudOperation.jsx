
const CrudOperation = () => {

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(name, email, user);

        // send data to server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    // alert('Data Uploaded Successfully');
                    form.reset();
                }
            })
    }

    return (
        <div>
            <h3>Create Data Base</h3>
            <form onSubmit={handleCreateUser}>
                <input type="text" name="name" placeholder="Please Enter Your Name" id="" />
                <br />
                <input type="email" name="email" id="" placeholder="Please Enter Your Email" />
                <br />
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};

export default CrudOperation;