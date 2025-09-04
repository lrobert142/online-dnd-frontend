'use client'

import './main.css'

import MaterialPlane from "@/app/locations/components/planes/material-plane";
import {useQueryState} from "nuqs";
import Feywilds from "@/app/locations/components/planes/feywilds";

export default function Main() {
    const activeTabKey = "activeLocationTab";
    const materialPlaneVal = "material-plane";
    const feywildsVal = "feywilds";
    const [activeTab, setActiveTab] = useQueryState(activeTabKey, {defaultValue: materialPlaneVal});

    const materialPlaneActive = activeTab == materialPlaneVal;
    const feywildsActive = activeTab == feywildsVal;

    return (
        <div id="locations">
            <div id="tabs-container">
                <div className={"tab" + (materialPlaneActive ? " active" : "")}
                     onClick={() => setActiveTab(materialPlaneVal)}>Material Plane
                </div>
                <div className={"tab" + (feywildsActive ? " active" : "")}
                     onClick={() => setActiveTab(feywildsVal)}>The Feywilds
                </div>
            </div>
            <MaterialPlane display={materialPlaneActive}/>
            <Feywilds display={feywildsActive}/>
        </div>
    )
}