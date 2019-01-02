import React , { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycletInfo from './LyfeCycleInfo';


class ComponentInfo extends Component  {
    render() {
        return (
        <div className="componentInfo">
        <h2>Component Info</h2>
        <p>=jjjjjj </p>
        <PropsInfo/>
        <StateInfo/>
        <LifeCycletInfo/>
        </div>


        )
    }
}

export default ComponentInfo; 