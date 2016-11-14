import React from 'react';

export default ({
  handleJoin,
  handleChange,
  handleLogOut,
  email,
  pwd,
  user
}) => (
  <form>
    <h3>{ user.email }</h3>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className="form-control"
        value={email}
        type='text'
        placeholder='Enter email'
        onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password</label>
      <input
        name="pwd"
        className="form-control"
        value={pwd}
        type='password'
        placeholder='Password'
        onChange={handleChange} />
    </div>
    {
      user.email ?
      <button className="btn" onClick={handleLogOut}>
        Log Out
      </button> :
      <button className="btn btn-primary" onClick={handleJoin}>
        Login
      </button>
    }
  </form>
);
