import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Navbar from "../components/Navbar/navbar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews