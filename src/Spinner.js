import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui massive text loader">{props.message}</div>
        </div>
    );
};

//this is default text you can use if you forgot to gave on indexjs
Spinner.defaultProps = {
    message: "Loading....."
};

export default Spinner;