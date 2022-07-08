import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Nwws from './Nwws'

export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Nwws category="All" />}></Route>
                        <Route path='/Politics' element={<Nwws category="Politics" />}></Route>
                        <Route path='/Education' element={<Nwws category="Education" />}></Route>
                        <Route path='/Science' element={<Nwws category="Science" />}></Route>
                        <Route path='/Technology' element={<Nwws category="Technology" />}></Route>
                        <Route path='/Sports' element={<Nwws category="Sports" />}></Route>
                        <Route path='/Jokes' element={<Nwws category="Jokes" />}></Route>
                        <Route path='/Crime' element={<Nwws category="Crime" />}></Route>
                        <Route path='/Entertainment' element={<Nwws category="Entertainment" />}></Route>


                    </Routes>
                </BrowserRouter>
                <Footer />

            </>
        )
    }
}
