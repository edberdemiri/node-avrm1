import React from 'react'

export function About(props) {
    return (
        <div id="about">
            <h2>About</h2>
            <fieldset disabled={props.disabled}>
                <legend>Input {props.disabled === "disabled" ? "Disabled" : "Enabled"}

                </legend>
                <span>Name:</span>
                <input
                    type="text"
                    value={props.valueName}
                    name="name"
                    onChange={props.handleChange}
                    placeholder={props.disabled === "disabled" ? "You cant write" : "Writing enabled"} /><br /><br />
                <span>Email:</span>
                <input
                    type="text"
                    value={props.valueEmail}
                    name="email"
                    onChange={props.handleChange}
                    placeholder={props.disabled === "disabled" ? "You cant write" : "Writing enabled"} /><br /><br />
                <button type="button" onClick={()=>{props.showAlert()}}>Submit</button>

            </fieldset>
            <button
                type="button"
                onClick={() => { props.changeDisabled() }}>
                {props.disabled === "disabled" ? "Enable Input" : "Disable Inputs"}
            </button>
        </div >
    )
}