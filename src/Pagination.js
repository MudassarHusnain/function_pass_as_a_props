import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


function AdvancedExample() {
    const data = [
        { name: "Mudassar Husnain", cast: "Jutt", contact: 2222, address: [{ hn: 23, city: "Sahiwal", country: "Pakistan" }, { hn: 23, city: "Multan", country: "Pakistan" }, { hn: 23, city: "Chichawatni", country: "Pakistan" }, { hn: 23, city: "Lahore", country: "Pakistan" }] },
        { name: "Husnain", cast: "Jutt", contact: 1111, address: [{ hn: 23, city: "Sahiwal", country: "Pakistan" }, { hn: 23, city: "Multan", country: "Pakistan" }, { hn: 23, city: "Chichawatni", country: "Pakistan" }, { hn: 23, city: "Lahore", country: "Pakistan" }] },
        { name: "Muzammal Husnain", cast: "Jutt", contact: 3333, address: [{ hn: 23, city: "Sahiwal", country: "Pakistan" }, { hn: 23, city: "Multan", country: "Pakistan" }, { hn: 23, city: "Chichawatni", country: "Pakistan" }, { hn: 23, city: "Lahore", country: "Pakistan" }] }]
    return (

        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name:
                    </th>
                    <th>
                        Cast:
                    </th>
                    <th>
                        Contact:
                    </th>
                    <th>
                        Address:
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>
                        <tr key={i}>
                            <td>{i}</td>
                            <td>
                                {d.name}
                            </td>
                            <td>
                                {d.cast}
                            </td>
                            <td>
                                {d.contact}
                            </td>
                            <td>
                                <Table striped bordered hover variant='dark'>
                                    {d.address.map((a) =>
                                        <tbody>
                                            <tr>
                                                <td>{a.hn}</td>
                                                <td>{a.city}</td>
                                                <td>{a.country}</td>
                                            </tr>
                                        </tbody>
                                    )}

                                </Table>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );

}

export default AdvancedExample;