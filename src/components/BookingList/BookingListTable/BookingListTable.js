import React from 'react';

const BookingListTable = () => {
    return (
        <div className="m-3">
            <table className="table bg-white">
                <thead className="bg-secondary">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Massage</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookingListTable;