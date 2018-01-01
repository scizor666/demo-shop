import React from 'react';

const LoginForm = props =>

    <form className="LoginForm-wrapper">
        <div className="LoginForm-error">{props.error}</div>
        Your login:
        <input className="LoginForm-loginField"
               onChange={props.onUserInput}
               name="login"
               pattern="[A-Za-z]{3,15}"
               minLength="3"
               value={props.login}
        />
        Your password:
        <input className="LoginForm-passwordField"
               onChange={props.onUserInput}
               name="password"
               type="password"
               minLength="6"
               value={props.password}
        />
        <button className="LoginForm-submit"
                onClick={props.handleSubmit}
                type="submit"
                disabled={!props.login || !props.password}>
            Submit
        </button>
    </form>;

export default LoginForm;