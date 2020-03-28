import React from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


function App() {
  // products will be presented by react-bootstrap-table
var products = [{
  id: 1,
  name: "Item name 1",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
}];
const priceFormatter= function (cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
};
  return (
    <div >
      <BootstrapTable data={products} striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}

export default App;
// https://biz2creditisp.firebaseio.com/providers.json