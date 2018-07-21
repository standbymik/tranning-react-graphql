import React, { Component } from 'react'


function PowerDisplay({ base ,exponent}) { 
    return  <h1>n^{exponent}:{Math.pow(base, exponent)}</h1>
}

export default PowerDisplay