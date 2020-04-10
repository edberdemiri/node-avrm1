import React, { Component } from 'react'
import { Typography, Button, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TextField } from '@material-ui/core'
import axios from 'axios'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            name: "",
            username: "",
            email: ""
        }

    }

    componentDidMount = () => {
        this.fetchUserData()
    }

    fetchUserData = () => {
        axios({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET"
        })
            .then((res) => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    removePerson = (id,index) => {
        var array = [...this.state.user]
        if (index !== -1) {
            array.splice(index, 1)
            this.setState({
                user: array
            })
        }
        axios({
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            method: "DELETE"
        })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addUser = () => {
        var users = {
            id: this.state.user.length + 1,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }
        this.setState({
            user: [...this.state.user, users],
            id: "",
            name: "",
            username: "",
            email: ""
        })
    }

    render() {
        console.log(this.state)
        return (

            <Grid container justify="center">
                <Grid item xs={2}>
                    <Typography variant="body1">
                        New User
                    </Typography><br />
                    <TextField
                        variant="outlined"
                        label="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br /><br />
                    <TextField
                        variant="outlined"
                        label="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    /><br /><br />
                    <TextField
                        variant="outlined"
                        label="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /><br /><br />
                    <Button
                        color="primary"
                        size="small"
                        variant="contained"
                        onClick={() => { this.addUser() }}
                    >
                        AddUser
                                            </Button>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={9}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">UserName</TableCell>
                                    <TableCell align="right">E-Mail</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.user && this.state.user.map((row, i) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.username}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">
                                            <Button
                                                color="secondary"
                                                size="small"
                                                variant="contained"
                                                onClick={() => { this.removePerson(row.id,i) }}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        )
    }
}
