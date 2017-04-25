// v4

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from '.../some_path'

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Welcome} />
    <Route path="/about" component={Welcome} />
    <Route path="/strict/" component={Welcome} />
  </BrowserRouter>
)

// Strict means the path must match EXACTLY /strict/
