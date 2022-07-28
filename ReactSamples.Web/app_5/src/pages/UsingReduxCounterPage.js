
import Layout from '../layout/Layout';
import Counter from '../components/Counter';

function UsingReduxCounterPage() {

    return <Layout>
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Your Glorious Counter</h3>

            <Counter />

        </div>
    </Layout>


}

export default UsingReduxCounterPage;