import CrudOperation from "./CrudOperation";
import DisplayResultAndEdit from "./DisplayResultAndEdit";

const Home = () => {
    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <DisplayResultAndEdit></DisplayResultAndEdit>
            </div>
            <CrudOperation></CrudOperation>
        </div>
    );
};

export default Home;