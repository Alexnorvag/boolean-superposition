import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'; // eslint-disable-line no-unused-vars
import update from 'immutability-helper';
import './Superposition.scss';

import ReactTable from "react-table"

class Superposition extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    'x0': '0'
                }, {
                    'x0': '1'
                }
            ],
            columns: [
                {
                    Header: 'X1',
                    accessor: 'x0'
                }
            ],
            rangeValue: 1,
            functionsValue: 1
        };

        this.tableRangeChange = this
            .tableRangeChange
            .bind(this);
        this.renderEditable = this
            .renderEditable
            .bind(this);
    }

    tableRangeChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        }, () => this.generateTruthTable());
    }

    fillingZero(rowLength, num) {
        let length = rowLength - num.length;
        for (let i = 0; i < length; i++) {
            num = '0' + num;
        }

        return num;
    }

    renderEditable(cellInfo) {
        return (<div
            style={{ cursor: "pointer" }}
            suppressContentEditableWarning
            onClick={e => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id] = data[cellInfo.index][cellInfo.column.id] === '-'
                ? '0'
                : data[cellInfo.index][cellInfo.column.id] === '0'
                    ? '1'
                    : '-';
            this.setState({data});
        }}
            dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
        />);
    }

    generateTruthTable() {
        let testData = [];
        let testRow = [];
        let testCol = [];

        for (let i = 0; i < Math.pow(2, this.state.rangeValue); i++) {
            for (let j = 0; j < this.state.rangeValue; j++) {
                testRow = update(testRow, {
                    $merge: {
                        ['x' + j]: this.fillingZero(this.state.rangeValue, Number(i).toString(2))[j]
                    }
                })
            }
            for (let j = 0; j < this.state.functionsValue; j++) {
                testRow = update(testRow, {
                    $merge: {
                        ['f' + j]: '-'
                    }
                })
            }

            testData.push(testRow);
        }

        for (let i = 0; i < this.state.rangeValue; i++) {
            testCol.push({
                Header: 'X' + (i + 1),
                accessor: 'x' + i,
                width: 40
            });
        }

        for (let i = 0; i < this.state.functionsValue; i++) {
            testCol.push({
                Header: 'F' + (i + 1),
                accessor: 'f' + i,
                width: 40,
                Cell: row => this.renderEditable(row)
            });
        }

        this.setState({
            data: update(this.state.data, {$set: testData}),
            columns: update(this.state.columns, {$set: testCol})
        })

        // console.log("DATA: ", testData);
    }

    render() {
        const {rangeValue, functionsValue, data, columns} = this.state;

        return (
            <div className="superposition content">
                <div className="row mx-0">
                    <div className="col-5 mb-4">
                        <label htmlFor="rangeValue" className="range-text mb-0">{"Variables: " + rangeValue}</label>
                        <input
                            id="rangeValue"
                            type="range"
                            step="1"
                            min={1}
                            max={10}
                            className={"ml-3 range " + (rangeValue < 2
                            ? "blue "
                            : rangeValue >= 2 && rangeValue < 4
                                ? "ltpurple "
                                : rangeValue >= 4 && rangeValue < 6
                                    ? "purple "
                                    : "pink")}
                            value={rangeValue}
                            onChange={this.tableRangeChange}/>
                    </div>
                    <div className="col-5 mb-4">
                        <label htmlFor="functionsValue" className="range-text mb-0">{"Functions: " + functionsValue}</label>
                        <input
                            id="functionsValue"
                            type="range"
                            step="1"
                            min={1}
                            max={10}
                            className={"ml-3 range " + (functionsValue < 2
                            ? "blue "
                            : functionsValue >= 2 && functionsValue < 4
                                ? "ltpurple "
                                : functionsValue >= 4 && functionsValue < 6
                                    ? "purple "
                                    : "pink")}
                            value={functionsValue}
                            onChange={this.tableRangeChange}/>
                    </div>
                    <div className={"col-5"}>
                        <ReactTable
                            data={data}
                            columns={columns}
                            showPagination={false}
                            pageSize={Math.pow(2, rangeValue)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Superposition;